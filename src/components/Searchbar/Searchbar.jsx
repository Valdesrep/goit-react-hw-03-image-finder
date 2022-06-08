import propTypes from 'prop-types';
import s from './Searchbar.module.css';

const Searchbar = ({}) => {
  return (
    <header className={s.searchbar}>
      <form className={s.form}>
        <button type="submit" className={s.button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
