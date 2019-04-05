import React, { useState } from 'react';

import TodoItem from '../todo-item/TodoItem';
import Button from '../button/Button';
import css from './Todos.css';

// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const { data, loading, onToggleCompleted, hide } = props;

  function onClick() {
    onToggleCompleted();
  }

  return (
    <React.Fragment>
      {loading && (
        (<p>Hleð verkefnum...</p>)
      )}
      {!loading && (
        <React.Fragment>
          <Button onClick={onClick} children={hide ? 'Fela búið' : 'Sýna allt'} />
          <ul className={css.todos}>
            {data.map((item, i) => (
              <TodoItem item={item} key={i}/>
            ))}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
