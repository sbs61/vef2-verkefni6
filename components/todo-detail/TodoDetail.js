import React, { useState } from 'react';
import Link from 'next/link';

import Field from '../field/Field';
import Button from '../button/Button';
import Errors from '../errors/Errors';

import { updateTodo, deleteTodo } from '../../api';


import css from './TodoDetail.css';

// Stakt verkefni á /:id
export default function todoDetail(props) {

  const { todo } = props
  const[updated, setUpdated] = useState(todo.updated);
  const[created, setCreated] = useState(todo.created);
  const[deleted, setDeleted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
     title: todo.title,
     completed: todo.completed,
     due: todo.due
    });

  async function handleUpdate(e){
    const err = []
    const id = todo.id;
    const title = data.title;
    const completed = data.completed;
    const due = data.due;
    const result = await updateTodo(id, { title, completed, due });
    if(result.length > 0){
      for(var i = 0; i < result.length; i++){
        err.push(result[i].message);
      }
      setErrors(err);
      return null;
    }
    setErrors(err);
    setUpdated(result.updated);
  }

  async function handleDelete(e){
    const id = todo.id;
    await deleteTodo(id);
    setDeleted(true);
  }

  function onChange(e){
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  function onToggleChecked(e){
    const {name, checked} = e.target;
    setData({...data, [name]: checked});
  }

  return (
    <div>
      {deleted && (
        (<p>Verkefni eytt</p>)
      )}
      {!deleted && (
      <div>
      <Errors errors={errors}/>
      <div className={css.todoDetail__list}>
      <Field name='title' type='text' label='Titill:' value={data.title} onChange={onChange}/>
      <div className={css.todoDetail__field}>
          <label className={css.todoDetail__label}>Lokið:</label>
          <div className={css.todoDetail__input}>
          <input name='completed' type='checkbox' defaultChecked={data.completed} onChange={onToggleChecked} value={data.completed} className={css.todoDetail__checkbox}></input>
          </div>
      </div>
      <Field name='due' type='datetime-local' label='Klárast fyrir:' value={data.due} onChange={onChange}/>
      <div className={css.todoDetail__field}>
        <span className={css.todoDetail__label}>Uppfært:</span>
        <span className={css.todoDetail__date}>{updated}</span>
      </div>
      <div className={css.todoDetail__field}>
        <span className={css.todoDetail__label}>Búið til:</span>
        <span className={css.todoDetail__date}>{created}</span>
      </div>
    </div>
    <div className={css.todoDetail__buttons}>
        <Button children='Uppfæra' onClick={handleUpdate}/>
        <Button children='Eyða' onClick={handleDelete}/>
    </div>
    </div>
    )}
    <Link href="/">
      <a className={css.todoDetail__back}>Til baka</a>
     </Link>
     </div>
  );
}
