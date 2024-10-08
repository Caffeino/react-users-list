import { useContext, useState } from 'react';
import { deleteUserById } from '../../lib/api/usersApi';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import Button from '../buttons/Button';
import style from './UserDeleteForm.module.css';

const UserDeleteForm = () => {
	const { currentUser, setFiltersForm, onSuccess } =
		useContext(UserFormsContex);

	const [isSubmitting, setIsSubmitting] = useState(false);

	return (
		<form
			onSubmit={ev =>
				handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess)
			}
		>
			<p className={style.text}>
				Are you sure you want to delete user <b>{currentUser.name}</b>?
			</p>
			<div className={style.row}>
				<div className={style.btnGroup}>
					<Button
						type='button'
						kind='secondary'
						disabled={isSubmitting}
						onClick={setFiltersForm}
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
