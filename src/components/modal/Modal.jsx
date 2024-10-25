import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconButton from '../buttons/IconButton';
import CrossCircleIcon from '../icons/CrossCircleIcon';
import style from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
	useEffect(() => {
		if (!children) return;

		document.body.classList.add(style.bodyOverflow);

		return () => {
			document.body.classList.remove(style.bodyOverflow);
		};
	}, [children]);

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
