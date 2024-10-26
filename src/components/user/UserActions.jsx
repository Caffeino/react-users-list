import { useState } from 'react';
import { useDropdown } from '../../lib/hooks/useDropdown';
import IconButton from '../buttons/IconButton';
import MoreVerticalAltIcon from '../icons/MoreVerticalAltIcon';
import PencilIcon from '../icons/PencilIcon';
import TrashIcon from '../icons/TrashIcon';
import Modal from '../modal/Modal';
import UserDeleteForm from '../user-forms/UserDeleteForm';
import UserEditForm from '../user-forms/UserEditForm';
import style from './UserActions.module.css';

const UserActions = ({ user }) => {
	const { modalContent, closeModal, openEditModal, openDeleteModal } =
		useModal(user);

	const { dropdownOpened, dropdownRef, openDropdown, closeDropdown } =
		useDropdown();

	return (
		<div className={style.wrapper}>
			<Modal closeModal={closeModal}>{modalContent}</Modal>
			<IconButton
				kind={'violet'}
				icon={MoreVerticalAltIcon}
				onClick={openDropdown}
			/>

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

	const openDeleteModal = () =>
		setModalContent(
			<UserDeleteForm currentUser={user} closeModal={closeModal} />
		);

	return { modalContent, closeModal, openEditModal, openDeleteModal };
};

export default UserActions;
