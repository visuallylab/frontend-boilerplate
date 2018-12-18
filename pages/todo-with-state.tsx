import Layout from '../components/Layout';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';

export default () => (
  <Layout title='Todo | Next.js + TypeScript Example'>
    <h1>Todo with state 😼</h1>
    <TaskForm />
    <TaskList />
    <TaskFilter />
  </Layout>
);
