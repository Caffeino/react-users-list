import { useState } from 'react';
import { useDropdown } from '../../lib/hooks/useDropdown';
import IconButton from '../buttons/IconButton';
import ImageIcon from '../icons/ImageIcon';
import MoreVerticalAltIcon from '../icons/MoreVerticalAltIcon';
import PencilIcon from '../icons/PencilIcon';
import TrashIcon from '../icons/TrashIcon';
import Modal from '../modal/Modal';
import UserDeleteForm from '../user-forms/UserDeleteForm';
import UserEditForm from '../user-forms/UserEditForm';
import UserPicForm from '../user-forms/UserPicForm';
import style from './UserActions.module.css';

const UserActions = ({ user }) => {
	const {
		modalContent,
		closeModal,
		openEditModal,
		openPicModal,
		openDeleteModal
	} = useModal(user);

	const { dropdownOpened, dropdownRef, openDropdown, closeDropdown } =
		useDropdown();

	return (
		<div className={style.wrapper}>
			<Modal closeModal={closeModal}>{modalContent}</Modal>
			<IconButton icon={MoreVerticalAltIcon} onClick={openDropdown} />

			{dropdownOpened && (
				<ul
					ref={dropdownRef}
					className={style.dropdown}
					onClick={closeDropdown}
				>
					<li onClick={openEditModal}>
						<PencilIcon />
						<span>Edit</span>
					</li>
					<li onClick={openPicModal}>
						<ImageIcon />
						<span>Change picture</span>
					</li>
					<li onClick={openDeleteModal}>
						<TrashIcon />
						<span>Delete</span>
					</li>
				</ul>
			)}
		</div>
	);
};

const useModal = user => {
	const [modalContent, setModalContent] = useState();

	const closeModal = () => setModalContent();

	const openEditModal = () =>
		setModalContent(
			<UserEditForm currentUser={user} closeModal={closeModal} />
		);

	const openPicModal = () =>
		setModalContent(<UserPicForm currentUser={user} closeModal={closeModal} />);

	const openDeleteModal = () =>
		setModalContent(
			<UserDeleteForm currentUser={user} closeModal={closeModal} />
		);

	return {
		modalContent,
		closeModal,
		openEditModal,
		openPicModal,
		openDeleteModal
	};
};

export default UserActions;
