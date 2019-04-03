import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';

import { getTodos, updateTodo } from '../api';

function Home(props) {
  const { initialData } = props;

  const[data, setData] = useState(initialData);
  const[loading, setLoading] = useState(false);
  const[hide, setHide] = useState(true);

  async function onToggleCompleted() {
    setLoading(true);
    setHide(!hide);
    const filteredData = await getTodos(hide);
    setData(filteredData);
    setLoading(false);
  }

  return (
    <Layout title="Verkefni">
    <Todos
      loading={loading}
      data={data}
      onToggleCompleted={onToggleCompleted}
      hide={hide}/>
    <Form/>
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const data = await getTodos(false);

  return { initialData: data };
}

export default Home
