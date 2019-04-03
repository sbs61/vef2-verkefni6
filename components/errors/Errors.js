import React from 'react';
import PropTypes from 'prop-types';

import css from './Errors.css';

export default function Errors(props) {
  const { errors } = props;

  return (
    <ul className={css.errors}>
    {errors.map((error, i) => (
        <li className={css.errors__item} key={i}>{error}</li>
    ))}
    </ul>
  );
}

Errors.propTypes = {
};
