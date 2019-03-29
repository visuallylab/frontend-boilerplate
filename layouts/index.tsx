import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Col, Layout, Row } from 'antd';

import '@/assets/style.less';
import {
  SITE_TITLE,
  SITE_DESC,
  NAV_TITLE,
  FAVICON_PATH,
  LARGE_ICON_PATH,
  SITE_URL,
} from '../constants';

interface IProps {
  title?: string;
  children: React.ReactNode;
}

const StyledHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: rgba(240, 242, 245, 0.95);
  height: auto;
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 2.5rem;
`;

const NavTitle = styled.span`
  line-height: 2.5rem;
  display: inline-block;
  font-size: 15px;
  margin-left: 10px;
  transform: translateY(5px);
`;

const MyLayout: React.FunctionComponent<IProps> = ({
  children,
  title = SITE_TITLE,
}) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={SITE_DESC} />
      <link rel="icon" type="image/x-icon" href={FAVICON_PATH} />
      <link rel="apple-touch-icon" href={LARGE_ICON_PATH} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESC} />
      <meta property="og:image" content={LARGE_ICON_PATH} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Head>
    <StyledHeader>
      <span>
        <StyledImage src="/static/logo.svg" alt="logo" />
        <NavTitle>{NAV_TITLE}</NavTitle>
      </span>
      <span>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </span>
    </StyledHeader>
    <Layout.Content>
      <Row type="flex" justify="center">
        <Col xs={20} lg={12}>
          {children}
        </Col>
      </Row>
    </Layout.Content>
    <Layout.Footer> Footer is here </Layout.Footer>
  </Layout>
);

export default MyLayout;
