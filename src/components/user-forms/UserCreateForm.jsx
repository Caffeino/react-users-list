import { useState } from 'react';
import { USER_ROLES } from '../../constants/userRoles';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import style from './UserCreateForm.module.css';

const UserCreateForm = ({ onClose }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { name, username, setName, setUsername } = useCreateForm();

	const isDisabled =
		!name.value ||
		name.error ||
		!username.value ||
		username.error ||
		username.loading ||
		isSubmitting;

	return (
		<div className={style.wrapper}>
			<form
				onSubmit={ev =>
					handleSubmit(ev, name, username, setIsSubmitting, onClose)
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
					<div className={style.btnGroup}>
						<Button type='button' kind='secondary' onClick={onClose}>
							Cancel
						</Button>
						<Button disabled={isDisabled} type='submit'>
							{isSubmitting ? 'Submitting...' : 'Create'}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

const handleSubmit = async (ev, name, username, setIsSubmitting, onClose) => {
	ev.preventDefault();
	setIsSubmitting(true);

	const user = {
		id: crypto.randomUUID(),
		name: name.value,
		username: username.value,
		role: ev.target.role.value,
		active: ev.target.active.checked
	};

	const res = await fetch('http://localhost:4000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});

	if (res.ok) {
		onClose();
		//ToDo... Update the user list
	} else {
		setIsSubmitting(false);
	}
};

export default UserCreateForm;
