import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          onClick={() => {
            this.props.openModal(this.props.image);
          }}
          src={this.props.image.webformatURL}
          alt=""
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  openModal: propTypes.func.isRequired,
  image: propTypes.arrayOf(
    propTypes.shape({
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGalleryItem;
