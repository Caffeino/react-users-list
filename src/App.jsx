import UsersList from './components/UsersList';

const USERS = [
	{
		name: 'Andres Tellez',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Arisandy Vaquero',
		active: false,
		role: 'teacher'
	},
	{
		name: 'Javier Juarez',
		active: true,
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
