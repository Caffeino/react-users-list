import { useContext, useState } from 'react';
import { deleteUserById } from '../../lib/api/usersApi';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import { alertBox } from '../../lib/events/alertEvents';
import Button from '../buttons/Button';
import style from './UserDeleteForm.module.css';

const UserDeleteForm = ({ currentUser, closeModal }) => {
	const { onSuccess } = useContext(UserFormsContex);

	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			className={style.form}
			onSubmit={ev =>
				handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess, closeModal)
			}
		>
			<p>
				Are you sure you want to delete user <b>{currentUser.name}</b>?
			</p>
			<Button
				type='button'
				kind='secondary'
				disabled={isSubmitting}
				onClick={closeModal}
			>
				{isSubmitting ? 'Submitting...' : 'Cancel'}
			</Button>
			<Button type='submit' kind='danger' disabled={isSubmitting}>
				{isSubmitting ? 'Submitting...' : 'Yes, delete!'}
			</Button>
		</form>
	);
};

const handleSubmit = async (
	ev,
	userId,
	setIsSubmitting,
	onSuccess,
	closeModal
) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const success = await deleteUserById(userId);

	if (success) {
		onSuccess();
		alertBox.success('User has been removed successfully!');
	} else {
		alertBox.error('Error trying to remove user');
	}

	closeModal();
};

export default UserDeleteForm;
