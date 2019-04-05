import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { onCreated, refreshPage } = props;

  const [data, setData] = useState({ title: '', due: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    setLoading(true);
    const err = []
    const result = await addTodo(data.title, data.due);
    if(result.length > 0){
      for(var i = 0; i < result.length; i++){
        err.push(result[i].message);
      }
      setErrors(err);
      setLoading(false);
      return null;
    }
    setErrors(err);
    await refreshPage();
    setData({ title: '', due: undefined });
    setLoading(false);
  }

  function onChange(e) {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  return (
    <React.Fragment>
      {loading && (
        (<p>Bý til todo...</p>)
      )}
      {!loading && ( 
      <React.Fragment>
        <form className={css.form} onSubmit={onSubmit}>
        <h2 className={css.form__header}>Nýtt verkefni</h2>
        <Errors errors={errors}/>
        <Field name='title' type='text' label='Titill:' value={data.title} onChange={onChange}/>
        <Field name='due' type='datetime-local' label='Klárast fyrir:' value={data.due} onChange={onChange}/>
        <Button children='Búa til'/>
        </form>
      </React.Fragment>
  )}
  </React.Fragment>
  )
}
