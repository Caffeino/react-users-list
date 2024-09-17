import style from './UserStatus.module.css';

const UserStatus = ({ status }) => {
	const statusClassname = status ? style.active : style.inactive;

	return (
		<span className={statusClassname}>{status ? 'Active' : 'Inactive'}</span>
	);
};

export default UserStatus;
