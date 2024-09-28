import UsersList from './components/UsersList';
import { USER_ROLES } from './constants/userRoles';

const USERS = [
	{
		username: 'andyt',
		name: 'Andres Téllez',
		active: true,
		role: USER_ROLES.OTHER
	},
	{
		username: 'pablitop',
		name: 'Pablo Perez',
		active: false,
		role: USER_ROLES.TEACHER
	},
	{
		username: 'javij',
		name: 'Javier Juarez',
		active: true,
		role: USER_ROLES.STUDENT
	}
];

function App() {
	return <UsersList initialUsers={USERS} />;
}

export default App;
