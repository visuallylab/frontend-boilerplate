import Layout from '../components/Layout';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

export default () => (
  <Layout title='Comments | Next.js + TypeScript Example'>
    <h1>Comments with server 😼</h1>
    <CommentList />
    <CommentForm />
  </Layout>
);
