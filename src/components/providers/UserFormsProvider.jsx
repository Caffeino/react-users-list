import { UserFormsContex } from '../../lib/context/UserFormsContex';
import { useSelectedForms } from '../../lib/hooks/useSelectedForm';

const UserFormsProvider = ({ resetFilters, children }) => {
	const { setFiltersForm, ...restSelectedForm } = useSelectedForms();

	const onSuccess = () => {
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
