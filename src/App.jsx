import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'Andres Tellez',
		status: true,
		role: 'teacher'
	},
	{
		name: 'Arisandy Vaquero',
		status: false,
		role: 'teacher'
	},
	{
		name: 'Javier Juarez',
		status: true,
		role: 'student'
	}
];

function App() {
	return (
		<UsersList users={USERS}>
			<h1>Users List</h1>
		</UsersList>
	);
}

export default App;
