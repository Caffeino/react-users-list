import { useState } from 'react';
import { deleteUserById } from '../../lib/api/usersApi';
import Button from '../buttons/Button';
import style from './UserDeleteForm.module.css';

const UserDeleteForm = ({ onSuccess, onCancel, user }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			onSubmit={ev => handleSubmit(ev, user.id, setIsSubmitting, onSuccess)}
		>
			<p className={style.text}>
				Are you sure you want to delete user <b>{user.name}</b>?
			</p>
			<div className={style.row}>
				<div className={style.btnGroup}>
					<Button
						type='button'
						kind='secondary'
						disabled={isSubmitting}
						onClick={onCancel}
					>
						{isSubmitting ? 'Submitting...' : 'Cancel'}
					</Button>
					<Button type='submit' kind='danger' disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Yes, delete!'}
					</Button>
				</div>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, userId, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const success = await deleteUserById(userId);

	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserDeleteForm;
