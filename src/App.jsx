import UsersList from './components/UsersList';

const USERS = [
	{
		id: 0,
		name: 'Andres Tellez',
		active: true,
		role: 'teacher'
	},
	{
		id: 1,
		name: 'Pablo Perez',
		active: false,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Javier Juarez',
		active: true,
		role: 'student'
	}
];

function App() {
	return <UsersList initialUsers={USERS} />;
}

export default App;
