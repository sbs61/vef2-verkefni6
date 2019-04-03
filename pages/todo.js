import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo } from '../api';

function Home(props) {

  const { id, todo} = props;
  console.log(id, todo)

  return (
    <Layout title={todo.title}>
    <TodoDetail todo={todo}/>
    </Layout>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { id } = query;

  const todo = await getTodo(id);

  return {
    id,
    todo,
  };
}

export default Home
