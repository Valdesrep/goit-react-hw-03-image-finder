import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from 'servises/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button';
import Modal from '../Modal';
import s from './App.module.css';
import { animateScroll as scroll } from 'react-scroll';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    imgInModal: null,
    image: '',
    page: 1,
    imagesInGallery: [],
    modalShow: false,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { image, page } = this.state;
    const pageChange = prevState.page !== page;
    const imageChange = image.trim() && prevState.image !== image;

    try {
      if (imageChange || pageChange) {
        this.setState({
          status: 'pending',
        });
        Notiflix.Loading.circle('Please wait ...');

        const imagesInGallery = await fetchImage(image, page);
        this.setState(prevState => ({
          imagesInGallery: [...prevState.imagesInGallery, ...imagesInGallery],
          status: 'resolved',
        }));
        Notiflix.Loading.remove();
      }
    } catch {
      this.setState({
        status: 'rejected',
      });
      Notiflix.Notify.warning('error');
    }
    if (this.state.imagesInGallery.length > 0) {
      scroll.scrollToBottom();
    }
  }

  getImage = image => {
    this.setState({
      image,
      page: 1,
      imagesInGallery: [],
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onModalOpen = imgInModal => {
    this.setState({
      imgInModal,
      modalShow: true,
    });
  };

  onModalClose = value => {
    this.setState({
      modalShow: value,
    });
  };

  render() {
    const { imagesInGallery, imgInModal, modalShow } = this.state;

    const isVisible = imagesInGallery.length > 0;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.getImage} />;
        {imagesInGallery.length > 0 && (
          <ImageGallery images={imagesInGallery} openModal={this.onModalOpen} />
        )}
        {isVisible && <Button onClick={this.onLoadMore} />}
        {modalShow && <Modal onClose={this.onModalClose} img={imgInModal} />}
      </div>
    );
  }
}
