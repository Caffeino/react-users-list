import { useContext } from 'react';
import { UsersContext } from '../lib/context/UsersContex';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ id, name, active, role }) => {
	const { toggleUsersActive } = useContext(UsersContext);

	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus status={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button onClick={() => toggleUsersActive(id)}>
					{active ? 'Inactive' : 'Active'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
