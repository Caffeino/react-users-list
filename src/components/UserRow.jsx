import { useState } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role, ...props }) => {
	const [isActive, setIsActiveState] = useState(active);

	return (
		<div className={style.user} {...props}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus status={isActive} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button
					onClick={() => {
						setIsActiveState(!isActive);
					}}
				>
					{isActive ? 'Inactive' : 'Active'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
