import Notiflix from 'notiflix';

const LoaderParams = {
  position: 'center-top',
  timeout: 1500,
  showOnlyTheLastOne: true,
};

class Loader {
  constructor(LoaderParams) {
    this.options = LoaderParams;
  }

  addLoader() {
    Notiflix.Loading.spiner('please wait...', tihis.options);
  }

  removeLoader() {
    Notiflix.Loading.remove();
  }
}

export default new Loader(LoaderParams);
