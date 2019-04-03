import React, { useState } from 'react';

import Field from '../field/Field';

import css from './TodoDetail.css';

// Stakt verkefni á /:id
export default function todoDetail(props) {

  const { todo } = props

  return (
    <ul className={css.todoDetail__list}>
      <Field name='title' type='text' label='Titill:' value={todo.title}/>
      <Field name='completed' type='checkbox' label='Lokið:'/>
      <Field name='date' type='datetime-local' label='Klárast fyrir:' value=''/>
    </ul>
  );
}
