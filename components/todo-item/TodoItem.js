import React, { useState } from 'react';
import Link from 'next/link';

import { updateTodo } from '../../api';
import css from './TodoItem.css';

// Verkefni í lista á forsíðu
export default function todoItem(props) {

  const { item } = props;
  const [loading, setLoading] = useState(false);
  const [itemCompleted, setItemCompleted] = useState(item.completed);
  
  async function handleChange(e){
    setLoading(true);
    const id = e.target.value;
    const completed = e.target.checked;
    await updateTodo(id, { completed });
    setItemCompleted(!itemCompleted);
    setLoading(false);
  }

  return (
    <li className={css.item}>
    {loading && (
        (<span>Uppfæri</span>)
      )}
      {!loading && ( 
      <div>
      <input type="checkbox" onChange={handleChange} checked={itemCompleted} className={css.item__input} defaultValue={item.id}/>
    <Link as={`/${item.id}`} href={`/todo?id=${item.id}`}><a className={css.item__link}>{item.title}</a></Link>
    <span className={css.item__due}>{item.due}</span>
    </div>
      )}
    </li>
  );
}
