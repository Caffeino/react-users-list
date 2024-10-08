import { useContext } from 'react';
import { USER_FORMS } from '../../constants/userForms';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import IconnButton from '../buttons/IconButton';
import CrossCircleIcon from '../icons/CrossCircleIcon';
import UserCreateForm from './UserCreateForm';
import UserDeleteForm from './UserDeleteForm';
import UserEditForm from './UserEditForm';
import style from './UserFormContainer.module.css';

const FORMS = {
	[USER_FORMS.CREATE]: <UserCreateForm />,
	[USER_FORMS.EDIT]: <UserEditForm />,
	[USER_FORMS.DELETE]: <UserDeleteForm />
};

const UserFormContainer = () => {
	const { currentForm, setFiltersForm } = useContext(UserFormsContex);

	const form = FORMS[currentForm];

	if (!form) return null;

	return (
		<div className={style.wrapper}>
			<IconnButton
				className={style.close}
				icon={CrossCircleIcon}
				filled
				kind='violet'
				onClick={setFiltersForm}
			/>
			{form}
		</div>
	);
};

export default UserFormContainer;
