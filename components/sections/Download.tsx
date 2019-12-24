import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import { SectionId, PRODUCT, CALL_TO_DOWNLOAD } from '@/constants';

const Download: React.FC = () => (
  <Section
    background="transparent"
    title={{
      content: CALL_TO_DOWNLOAD,
      id: SectionId.Download,
    }}
  >
    <Row center="xs">
      <Col>
        <Row center="xs">
          <a href={PRODUCT.APP_STORE_DOWNLOAD_LINK} style={{ marginRight: 30 }}>
            <img src={'/button-app-store.svg'} />
          </a>
          <a href={PRODUCT.GOOGLE_PLAY_STORE_DOWNLOAD_LINK}>
            <img src={'/button-google-play.svg'} />
          </a>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Download;
