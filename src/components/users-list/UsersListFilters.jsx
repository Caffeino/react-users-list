import { useContext } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import { USER_FORMS } from '../../constants/userForms';
import { UserFormsContex } from '../../lib/context/UserFormsContex';
import Button from '../buttons/Button';
import InputCheckbox from '../forms/InputCheckbox';
import InputSearch from '../forms/InputSearch';
import Select from '../forms/Select';
import style from './UsersListFilters.module.css';

const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	const { currentForm, setCreateForm } = useContext(UserFormsContex);

	if (currentForm !== USER_FORMS.FILTERS) return null;

	return (
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
					<option value={SORT_OPTIONS.DEFAULT}>By Default</option>
					<option value={SORT_OPTIONS.NAME}>By Name</option>
					<option value={SORT_OPTIONS.ROLE}>By Role</option>
					{!onlyActive && (
						<option value={SORT_OPTIONS.ACTIVE}>By Active</option>
					)}
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
				<Button onClick={setCreateForm}>New</Button>
			</div>
		</div>
	);
};

export default UsersListFilters;
