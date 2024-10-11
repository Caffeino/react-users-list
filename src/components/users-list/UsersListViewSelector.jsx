import LayoutGridIcon from '../icons/LayoutGridIcon';
import LayoutListIcon from '../icons/LayoutListIcon';
import style from './UsersListViewSelector.module.css';

const UsersListViewSelector = ({ view, setView }) => (
	<div className={style.wrapper}>
		<button onClick={() => setView(false)} disabled={!view}>
			<LayoutGridIcon className={style.icon} />
		</button>
		<div className={style.divider} />
		<button onClick={() => setView(true)} disabled={view}>
			<LayoutListIcon className={style.icon} />
		</button>
	</div>
);

export default UsersListViewSelector;
