import React from 'react';

import Head from '@/components/Head';
import Nav from '@/components/Nav';

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
    <Nav />
    <Content>{children}</Content>
    <GlobalStyles />
  </Container>
);

export default Layout;
