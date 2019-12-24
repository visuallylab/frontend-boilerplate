import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import { SectionId } from '@/constants';
import { colors } from '@/styles/global';

const Download: React.FC = () => (
  <Section
    background="transparent"
    title={{
      content: 'Manage all digital assets in one APP',
      id: SectionId.Download,
      color: colors.primary,
    }}
  >
    <Row center="xs">
      <Col>
        <Row center="xs">
          <a
            href="https://testflight.apple.com/join/DSWpIJ36"
            style={{ marginRight: 30 }}
          >
            <img src={getRelativePath('/button-app-store.svg')} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.biime">
            <img src={getRelativePath('/button-google-play.svg')} />
          </a>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Download;
