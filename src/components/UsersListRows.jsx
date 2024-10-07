import UserRow from './UserRow';

const UsersListRows = ({
	users,
	error,
	loading,
	setEditForm,
	setDeleteForm
}) => {
	if (loading) return <p>Loading users...</p>;
	if (error) return <p>Error trying to load user list.</p>;
	if (!users.length) return <p>There are no users to display yet.</p>;

	return users.map(user => (
		<UserRow
			key={user.id}
			{...user}
			setEditForm={setEditForm}
			setDeleteForm={setDeleteForm}
		/>
	));
};

export default UsersListRows;
