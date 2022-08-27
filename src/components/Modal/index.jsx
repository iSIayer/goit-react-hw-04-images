import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyle, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKey);
  }

  onEscKey = evt => {
    if (evt.code === 'Escape') this.props.onClose();
  };

  handleBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyle>
          <img src={largeImageURL} alt={tags} />;
        </ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}
