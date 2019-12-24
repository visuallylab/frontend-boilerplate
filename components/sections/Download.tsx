import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import {
  SectionId,
  APP_STORE_DOWNLOAD_LINK,
  GOOGLE_PLAY_STORE_DOWNLOAD_LINK,
} from '@/constants';

const Download: React.FC = () => (
  <Section
    background="transparent"
    title={{
      content: 'Have the whole world in one APP',
      id: SectionId.Download,
    }}
  >
    <Row center="xs">
      <Col>
        <Row center="xs">
          <a href={APP_STORE_DOWNLOAD_LINK} style={{ marginRight: 30 }}>
            <img src={getRelativePath('/button-app-store.svg')} />
          </a>
          <a href={GOOGLE_PLAY_STORE_DOWNLOAD_LINK}>
            <img src={getRelativePath('/button-google-play.svg')} />
          </a>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Download;
