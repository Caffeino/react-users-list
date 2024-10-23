import { createPortal } from 'react-dom';
import IconButton from '../buttons/IconButton';
import CrossCircleIcon from '../icons/CrossCircleIcon';
import style from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
	if (!children) return null;

	return createPortal(
		<div className={style.overlay}>
			<div className={style.modal}>
				<IconButton
					className={style.close}
					icon={CrossCircleIcon}
					filled
					kind='violet'
					onClick={closeModal}
				/>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
