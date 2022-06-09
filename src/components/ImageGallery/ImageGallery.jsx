import propTypes from 'prop-types';
import s from './ImageGalery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGalery = ({}) => {
  return <ul className={gallery}>{}</ul>;
};

export default ImageGalery;

const API_KEY = 26220037 - ba2b9defb736764e21d2f2b28;



async function fetchImage(img, page) {
  const params = `image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${img}&${params}`
  );
  const images = response.data;
  return images;
}
