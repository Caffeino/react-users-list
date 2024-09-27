import UsersList from './components/UsersList';

const USERS = [
	{
		username: 'andyt',
		name: 'Andres Tellez',
		active: true,
		role: 'teacher'
	},
	{
		username: 'pablitop',
		name: 'Pablo Perez',
		active: false,
		role: 'teacher'
	},
	{
		username: 'javij',
		name: 'Javier Juarez',
		active: true,
		role: 'student'
	}
];

function App() {
	return <UsersList initialUsers={USERS} />;
}

export default App;
