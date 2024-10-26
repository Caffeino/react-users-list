import style from './UserDisplay.module.css';

const UserDisplay = ({ name, username, picture }) => (
	<div className={style.wrapper}>
		<img
			className={style.picture}
			alt={`profile picture ${picture}`}
			src={picture || '/user-pic.svg'}
		/>
		<div className={style.display}>
			<span>{name}</span>
			<span className={style.username}>@{username}</span>
		</div>
	</div>
);

export default UserDisplay;
