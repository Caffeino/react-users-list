import { PAGINATION } from '../../constants/pagination';
import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import style from './UsersListPagination.module.css';

const UsersListPagination = ({
	page,
	itemsPerPage,
	setPage,
	setItemsPerPage,
	totalUsers
}) => (
	<div className={style.wrapper}>
		<div className={style.itemsPerPage}>
			<Select
				value={itemsPerPage}
				onChange={ev => setItemsPerPage(Number(ev.target.value))}
			>
				{PAGINATION.ITEMS_PER_PAGE_VALUES.map(value => (
					<optione key={value} value={value}>
						{value}
					</optione>
				))}
				<option value={4}>4</option>
				<option value={6}>6</option>
				<option value={8}>8</option>
			</Select>
			<p>Items per page</p>
		</div>
		<PageSelector
			page={page}
			totalPages={Math.ceil(totalUsers / itemsPerPage)}
			setPage={setPage}
		/>
	</div>
);

export default UsersListPagination;
