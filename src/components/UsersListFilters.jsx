import InputCheckbox from './forms/InputCheckbox';
import InputSearch from './forms/InputSearch';
import Select from './forms/Select';
import style from './UsersListFilters.module.css';

const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<div className={style.form}>
		<div className={style.row}>
			<InputSearch
				placeholder='Search...'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>
			<Select
				value={sortBy}
				onChange={ev => setSortBy(Number(ev.target.value))}
			>
				<option value={0}>By Default</option>
				<option value={1}>By Name</option>
				<option value={2}>By Role</option>
				{!onlyActive && <option value={3}>By Active</option>}
			</Select>
		</div>
		<div className={style.row}>
			<div className={style.active}>
				<InputCheckbox
					className={style.checkbox}
					checked={onlyActive}
					onChange={ev => setOnlyActive(ev.target.checked)}
				/>
				<p>Show only actives</p>
			</div>
		</div>
	</div>
);

export default UsersListFilters;
