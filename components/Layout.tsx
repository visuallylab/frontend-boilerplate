import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string,
};

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link>{' | '}
        <Link href='/about'><a>About</a></Link>{' | '}
        <Link href='/todo-with-state'><a>Todo with state</a></Link>{' | '}
        <Link href='/comment-with-server'><a>Comment with server</a></Link>
      </nav>
    </header>
    {children}
    <footer>
      Footer is here to stay
    </footer>
  </div>
);

export default Layout;
