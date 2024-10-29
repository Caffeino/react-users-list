import { useContext, useState } from 'react';
import { USER_ROLES } from '../../constants/userRoles';
import {
	activeChanged,
	nameChanged,
	roleChanged,
	usernameChanged
} from '../../lib/actions/editFormActions';
import { updateUser } from '../../lib/api/usersApi';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import { alertBox } from '../../lib/events/alertEvents';
import { useEditForm } from '../../lib/hooks/useEditForm';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import style from './UserEditForm.module.css';

const UserEditForm = ({ currentUser, closeModal }) => {
	const { onSuccess } = useContext(UserFormsContex);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const { name, username, role, active, dispatchFormValues, isFormInvalid } =
		useEditForm(currentUser);

	return (
		<form
			className={style.form}
			onSubmit={ev =>
				handleSubmit(
					ev,
					{
						id: currentUser.id,
						name: name.value,
						username: username.value,
						role: role,
						active: active
					},
					setIsSubmitting,
					onSuccess,
					closeModal
				)
			}
		>
			<InputText
				label='Name'
				placeholder='John Doe'
				error={name.error}
				value={name.value}
				onChange={ev => dispatchFormValues(nameChanged(ev.target.value))}
			/>
			<InputTextAsync
				label='Username'
				placeholder='johndoe'
				success={
					username.value !== currentUser.username &&
					!username.loading &&
					!username.error
				}
				loading={username.loading}
				error={username.error}
				value={username.value}
				onChange={ev =>
					dispatchFormValues(
						usernameChanged(ev.target.value, currentUser.username)
					)
				}
			/>
			<Select
				value={role}
				onChange={ev => dispatchFormValues(roleChanged(ev.target.value))}
			>
				<option value={USER_ROLES.TEACHER}>Teacher</option>
				<option value={USER_ROLES.STUDENT}>Student</option>
				<option value={USER_ROLES.OTHER}>Other</option>
			</Select>
			<div className={style.active}>
				<InputCheckbox
					checked={active}
					onChange={ev => dispatchFormValues(activeChanged(ev.target.checked))}
				/>
				<span>Mark as active</span>
			</div>
			<Button disabled={isFormInvalid || isSubmitting} type='submit'>
				{isSubmitting ? 'Submitting...' : 'Update'}
			</Button>
		</form>
	);
};

const handleSubmit = async (
	ev,
	user,
	setIsSubmitting,
	onSuccess,
	closeModal
) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const success = await updateUser(user);

	if (success) {
		onSuccess();
		alertBox.success('User has been updated succesfully!');
	} else {
		alertBox.error('Error trying to update the user');
	}
	closeModal();
};

export default UserEditForm;
