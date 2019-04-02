import React from 'react';
import Head from 'next/head';
import { Col, Layout, Row } from 'antd';

import '@/assets/style.less';
import Header from '@/components/Header';
import { SITE_TITLE } from '@/constants';

import Meta from './meta';
import GlobalStyles from './globalStyles';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const MainLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <Meta />
    </Head>
    <Header />
    <Layout.Content>
      <Row type="flex" justify="center">
        <Col xs={20} lg={12}>
          {children}
        </Col>
      </Row>
    </Layout.Content>
    <Layout.Footer> Footer is here </Layout.Footer>
    <GlobalStyles />
  </Layout>
);

export default MainLayout;
