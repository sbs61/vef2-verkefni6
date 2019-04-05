import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {

  const { type, label, name, defaultValue, onChange } = props;

  return (
    <div className={css.field}>
    <label className={css.field__label}>{label}</label>
    <input name={name} type={type} className={css.field__input} onChange={onChange} defaultValue={defaultValue}></input>
    </div>
  );
}

Field.propTypes = {

}

Field.defaultProps = {

}
