import { useContext, useRef, useState } from 'react';
import { updateUserPicture } from '../../lib/api/usersApi';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import { alertBox } from '../../lib/events/alertEvents';
import { fileToDataURL } from '../../lib/utils/file-utils';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import ImageIcon from '../icons/ImageIcon';
import PencilIcon from '../icons/PencilIcon';
import style from './UserPicForm.module.css';

const ALLOWD_MIME_TYPES = ['image/jpeg', 'image/png'];
const MAX_SIZE = 102400;

const UserPicForm = ({ currentUser, closeModal }) => {
	const { onSuccess } = useContext(UserFormsContex);
	const [preview, setPreview] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const inputRef = useRef(null);

	const message = getMessage(preview);

	return (
		<div className={style.wrapper}>
			<div className={style.preview}>
				{preview && preview.src ? (
					<img alt='Preview' src={preview.src} />
				) : (
					<ImageIcon className={style.icon} />
				)}
				<IconButton
					className={style.iconButton}
					icon={PencilIcon}
					onClick={() => inputRef.current.click()}
					filled
				/>
			</div>
			{message}
			<input
				ref={inputRef}
				className={style.input}
				type='file'
				accept={ALLOWD_MIME_TYPES.join(',')}
				onChange={ev => handleChange(ev, setPreview)}
			/>
			<Button
				className={style.button}
				disabled={isSubmitting || !preview || !preview.src}
				onClick={() =>
					handleClick(
						currentUser.id,
						preview,
						onSuccess,
						closeModal,
						setIsSubmitting
					)
				}
			>
				{isSubmitting ? 'Submitting...' : 'Update Photo'}
			</Button>
		</div>
	);
};

const getMessage = preview => {
	if (!preview) return <span>JPG/PNG | Max 100Kb</span>;

	return preview.fileName ? (
		<span className={style.filename}>{preview.fileName}</span>
	) : (
		<span className={style.error}>{preview.error}</span>
	);
};

const handleChange = async (ev, setPreview) => {
	const file = ev.target.files[0];

	if (!file) return setPreview();

	if (!ALLOWD_MIME_TYPES.includes(file.type))
		return setPreview({
			error: 'Only JPG/PNG files are allowd'
		});

	if (file.size > MAX_SIZE)
		return setPreview({
			error: 'Max size: 100Kb'
		});

	try {
		const dataUrl = await fileToDataURL(file);

		setPreview({
			src: dataUrl,
			fileName: file.name
		});
	} catch (err) {
		setPreview({
			error: err.message
		});
	}
};

const handleClick = async (
	userId,
	preview,
	onSuccess,
	closeModal,
	setIsSubmitting
) => {
	if (!preview) return;

	setIsSubmitting(true);

	const success = await updateUserPicture(userId, preview.src);

	if (success) {
		onSuccess();
		alertBox.success('User picture has been changed succesfully!');
	} else {
		alertBox.error('Error trying to change the user picture');
	}

	closeModal();
};

export default UserPicForm;
