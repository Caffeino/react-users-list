import { UserFormsContex } from '../../lib/context/UserFormsContex';
import { useSelectedForms } from '../../lib/hooks/useSelectedForm';

const UserFormsProvider = ({ reloadUsers, resetFilters, children }) => {
	const { setFiltersForm, ...restSelectedForm } = useSelectedForms();

	const onSuccess = () => {
		reloadUsers();
		resetFilters();
		setFiltersForm();
	};

	return (
		<UserFormsContex.Provider
			value={{
				setFiltersForm,
				onSuccess,
				...restSelectedForm
			}}
		>
			{children}
		</UserFormsContex.Provider>
	);
};

export default UserFormsProvider;
