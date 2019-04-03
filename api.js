/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  /* todo */
}

export async function addTodo(title, due) {
  /* todo */
}

export async function updateTodo(id, { title, completed, due } = {}) {
  /* todo */
}

export async function getTodos(hideCompleted) {
  /* todo */
  const add = hideCompleted ? '?completed=false' : ''
  const u = apiUrl + add;
  const response = await fetch(u);

  if(!response.ok){
    return null;
  }

  return response.json();
}

export async function getTodo(id) {
  /* todo */
}
