import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Section from '@/components/Section';
import { getRelativePath } from '@/utils';

const Content = styled(Row)`
  padding-top: 140px;
  align-items: space-around;
`;

const ButtonsWrapper = styled(Row)`
  margin-top: 120px;
`;

const Intro: React.FC = () => (
  <Section
    fullscreen
    alignItems="center"
    background="linear-gradient(125deg, rgb(255, 255, 255), rgb(255, 255, 230))"
  >
    <Content center="xs">
      <Col>
        <h1 style={{ textAlign: 'center' }}>the awesome app</h1>
        <p style={{ textAlign: 'center' }}>our ultimate solution</p>
        <ButtonsWrapper center="xs">
          <a
            href="https://testflight.apple.com/join/DSWpIJ36"
            style={{ marginRight: 15 }}
          >
            <img src={getRelativePath('/button-app-store.svg')} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.biime">
            <img src={getRelativePath('/button-google-play.svg')} />
          </a>
        </ButtonsWrapper>
      </Col>
    </Content>
  </Section>
);

export default Intro;
