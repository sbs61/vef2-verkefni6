import React, { useState } from 'react';

import css from './TodoItem.css';

// Verkefni í lista á forsíðu
export default function todoItem(props) {

  const { item } = props;
  
  function onChange(){

  }

  return (
    <li className={css.item}>
    {item.completed ? 
      <input type="checkbox" onChange={onChange} checked className={css.item__input}></input>
      :
      <input type="checkbox" onChange={onChange} className={css.item__input}></input>
    }
    <span className={css.item__link}>{item.title}</span>
    <span className={css.item__due}>{item.due}</span>
    </li>
  );
}
