import UserCard from './UserCard';
import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users, error, loading, view }) => {
	if (loading) return <p>Loading users...</p>;
	if (error) return <p>Error trying to load user list.</p>;
	if (!users.length) return <p>There are no users to display yet.</p>;

	const UserComponent = view ? UserRow : UserCard;

	return (
		<div className={style.container}>
			{users.map(user => (
				<UserComponent key={user.id} user={user} />
			))}
		</div>
	);
};

export default UsersListRows;
