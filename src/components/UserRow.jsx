import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, status, role, ...props }) => (
	<div className={style.user} {...props}>
		<div className={style.name}>
			<span>{name}</span>
		</div>
		<div className={style.status}>
			<UserStatus status={status} />
		</div>
		<div className={style.role}>
			<UserRole role={role} />
		</div>
	</div>
);

export default UserRow;
