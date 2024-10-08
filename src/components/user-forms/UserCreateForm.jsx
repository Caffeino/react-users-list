import { useContext, useState } from 'react';
import { USER_ROLES } from '../../constants/userRoles';
import { createUser } from '../../lib/api/usersApi';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import style from './UserCreateForm.module.css';

const UserCreateForm = () => {
	const { onSuccess } = useContext(UserFormsContex);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { name, username, setName, setUsername, isFormInvalid } =
		useCreateForm();

	return (
		<form
			onSubmit={ev =>
				handleSubmit(ev, name, username, setIsSubmitting, onSuccess)
			}
		>
			<div className={style.row}>
				<InputText
					className={style.input}
					label='Name'
					placeholder='John Doe'
					error={name.error}
					value={name.value}
					onChange={ev => setName(ev.target.value)}
				/>
				<InputTextAsync
					className={style.input}
					label='Username'
					placeholder='johndoe'
					success={username.value && !username.loading && !username.error}
					loading={username.loading}
					error={username.error}
					value={username.value}
					onChange={ev => setUsername(ev.target.value)}
				/>
			</div>
			<div className={style.row}>
				<Select name='role'>
					<option value={USER_ROLES.TEACHER}>Teacher</option>
					<option value={USER_ROLES.STUDENT}>Student</option>
					<option value={USER_ROLES.OTHER}>Other</option>
				</Select>
				<div className={style.active}>
					<InputCheckbox name='active' />
					<span>Mark as active</span>
				</div>
				<Button disabled={isFormInvalid || isSubmitting} type='submit'>
					{isSubmitting ? 'Submitting...' : 'Create'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, name, username, setIsSubmitting, onSuccess) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const user = {
		id: crypto.randomUUID(),
		name: name.value,
		username: username.value,
		role: ev.target.role.value,
		active: ev.target.active.checked
	};

	const success = await createUser(user);

	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserCreateForm;
