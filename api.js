/* todo isomorphic-fetch og útfæra köll í vefþjónustu með slóð úr config */
import 'isomorphic-fetch';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { apiUrl } = publicRuntimeConfig;

export async function deleteTodo(id) {
  /* todo */
  const url = new URL(`/${id}`, apiUrl);
  const response = await fetch(url.href, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
}

export async function addTodo(title, due) {
  /* todo */
  const url = new URL(apiUrl);
  const response = await fetch(url.href, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
       due: due
      })
  });

  if(!response.ok){
    return null;
  }

  return response.json();
}

export async function updateTodo(id, { title, completed, due } = {}) {
  /* todo */
  const url = new URL(`/${id}`, apiUrl);
  const response = await fetch(url.href, {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      completed: completed,
      due: due
      })
  });

  if(!response.ok){
    return null;
  }

  return response.json();
}

export async function getTodos(hideCompleted) {
  /* todo */
  const add = hideCompleted ? '?completed=false' : ''
  const url = new URL(`/${add}`, apiUrl);
  const response = await fetch(url.href);

  if(!response.ok){
    return null;
  }

  return response.json();
}

export async function getTodo(id) {
  /* todo */
  const url = new URL(`/${id}`, apiUrl);
  console.log('fetch', url.href);
  const response = await fetch(url.href);

  if(!response.ok){
    return null;
  }

  return response.json();
}
