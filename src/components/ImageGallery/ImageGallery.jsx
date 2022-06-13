import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={s.ImageGallery}>
          {this.props.images.map((image, index) => (
            <ImageGalleryItem
              key={index}
              image={image}
              openModal={this.props.openModal}
            />
          ))}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  openModal: propTypes.func.isRequired,
  images: propTypes.arrayOf(
    propTypes.shape({
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
