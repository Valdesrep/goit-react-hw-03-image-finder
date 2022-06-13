import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import s from './Modal.module.css';

const modal = document.querySelector('#modal-root');

export default class Modal extends Component {
  onEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose(false);
    }
  };

  onOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose(false);
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.onOverlay}>
        <div className={s.Modal}>
          <img src={this.props.img.largeImageURL} alt="" />
        </div>
      </div>,
      modal
    );
  }
}
Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  img: propTypes.string.isRequired,
};
