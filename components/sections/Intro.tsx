import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import {
  APP_STORE_DOWNLOAD_LINK,
  GOOGLE_PLAY_STORE_DOWNLOAD_LINK,
} from '@/constants';

const Content = styled(Row)`
  padding-top: 140px;
  align-items: space-around;
`;

const ButtonsWrapper = styled(Row)`
  margin-top: 120px;
`;

const Intro: React.FC = () => (
  <Section fullscreen alignItems="center">
    <Content center="xs">
      <Col>
        <h1 style={{ textAlign: 'center' }}>the awesome app</h1>
        <p style={{ textAlign: 'center' }}>our ultimate solution</p>
        <ButtonsWrapper center="xs">
          <a href={APP_STORE_DOWNLOAD_LINK} style={{ marginRight: 15 }}>
            <img src={getRelativePath('/button-app-store.svg')} />
          </a>
          <a href={GOOGLE_PLAY_STORE_DOWNLOAD_LINK}>
            <img src={getRelativePath('/button-google-play.svg')} />
          </a>
        </ButtonsWrapper>
      </Col>
    </Content>
  </Section>
);

export default Intro;
