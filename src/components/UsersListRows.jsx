import UserRow from './UserRow';

const UsersListRows = ({ users }) => {
	if (!users.length) return <p>There are no users to display yet.</p>;

	return users.map(user => <UserRow key={user.username} {...user} />);
};

export default UsersListRows;
