import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { onCreated } = props;

  const [data, setData] = useState({ title: '', date: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    setLoading(true);
    const err = [];
    if(data.title.length < 1 || data.title.length > 128){
      err.push('Titill verður að vera strengur sem er 1 til 128 stafir');
    }
    setErrors(err);

    if(err.length === 0){
      console.log(data);
    }
    setLoading(false);
  }

  function onChange(e) {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  return (
    <React.Fragment>
      {loading && (
        (<p>Bý til verkefni...</p>)
      )}
      {!loading && ( 
      <React.Fragment>
        <form className={css.form} onSubmit={onSubmit} onChange={onChange}>
        <h2 className={css.form__header}>Nýtt verkefni</h2>
        <Errors errors={errors}/>
        <Field name='title' type='text' label='Titill:'/>
        <Field name='date' type='datetime-local' label='Klárast fyrir:'/>
        <Button children='Búa til'/>
        </form>
      </React.Fragment>
  )}
  </React.Fragment>
  )
}
