import LayoutGridIcon from '../icons/LayoutGridIcon';
import LayoutListIcon from '../icons/LayoutListIcon';
import style from './UsersListViewSelector.module.css';

const UsersListViewSelector = ({ showRowsFormat, setShowRowsFormat }) => (
	<div className={style.wrapper}>
		<button onClick={() => setShowRowsFormat(false)} disabled={!showRowsFormat}>
			<LayoutGridIcon className={style.icon} />
		</button>
		<div className={style.divider} />
		<button onClick={() => setShowRowsFormat(true)} disabled={showRowsFormat}>
			<LayoutListIcon className={style.icon} />
		</button>
	</div>
);

export default UsersListViewSelector;
