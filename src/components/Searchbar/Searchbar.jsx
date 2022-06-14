import propTypes from 'prop-types';
import s from './Searchbar.module.css';
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    image: '',
  };

  onInputChange = e => {
    this.setState({
      image: e.target.value,
    });
  };

  onFormSubit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({
      image: e.currentTarget.value,
    });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onFormSubit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.onInputChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
