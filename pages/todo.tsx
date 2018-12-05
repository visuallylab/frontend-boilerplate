import Layout from '../components/Layout';
import TodoTaskForm from '../components/TodoTaskForm';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';
import TodoComments from '../components/TodoComments'
import TodoCommentForm from '../components/TodoCommentForm'

export default () => (
  <Layout title="Todo | Next.js + TypeScript Example">
    <h1>ToDo 😼</h1>
    <TodoTaskForm />
    <TodoList />
    <TodoFooter />
    <TodoComments />
    <TodoCommentForm />
  </Layout>
)
