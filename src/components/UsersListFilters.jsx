import style from './UsersListFilters.module.css';

const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<form className={style.form}>
		<input
			type='text'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
		/>
		<div className={style.active}>
			<input
				type='checkbox'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
			/>
			<span>Only actives</span>
		</div>
		<select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
			<option value={0}>By Default</option>
			<option value={1}>By Name</option>
		</select>
	</form>
);

export default UsersListFilters;
