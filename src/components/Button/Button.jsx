import React, { Component } from 'react';
import s from './Button.module.css';
import propTypes from 'prop-types';

export default class Button extends Component {
  handeClick = event => {
    event.preventDefault();
    const updatedPage = this.props.page + 1;
    this.props.onClick(updatedPage);
  };

  render() {
    return (
      <button className={s.moreBtn} type="button" onClick={this.handeClick}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
