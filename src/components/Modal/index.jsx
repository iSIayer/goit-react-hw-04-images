import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyle, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, largeImageURL, tags }) {
  useEffect(() => {
    const onEscKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onEscKey);
    return () => {
      window.removeEventListener('keydown', onEscKey);
    };
  });

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />;
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
