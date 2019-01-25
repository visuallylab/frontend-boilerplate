import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About 👀</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);
