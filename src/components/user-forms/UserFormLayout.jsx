import IconnButton from '../buttons/IconButton';
import CrossCircleIcon from '../icons/CrossCircleIcon';
import style from './UserFormLayout.module.css';

const UserFormLayout = ({ onClose, children }) => (
	<div className={style.wrapper}>
		<IconnButton
			className={style.close}
			icon={CrossCircleIcon}
			filled
			kind='violet'
			onClick={onClose}
		/>
		{children}
	</div>
);

export default UserFormLayout;
