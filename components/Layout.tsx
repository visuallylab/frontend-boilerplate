import React from 'react';

import Head from '@/components/Head';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';

import GlobalStyles, { HEADER_HEIGHT } from '@/styles/global';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  padding-top: ${HEADER_HEIGHT};
`;

const Layout: React.FC = ({ children }) => (
  <Container>
    <Head />

    {/* Body */}
    <Header />
    <Content>{children}</Content>
    {/* <Footer /> */}
    <GlobalStyles />
  </Container>
);

export default Layout;
