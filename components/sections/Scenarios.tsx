import React from 'react';
import { Row } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import Scenario from '@/components/Scenario';
import { SectionId } from '@/constants';

const Scenarios: React.FC = () => (
  <Section
    title={{
      content: 'Application Scenarios',
      id: SectionId.Scenarios,
    }}
  >
    <Row style={{ width: '100%' }} between="xs">
      <Scenario
        title="Shopping mal"
        icon="http://unsplash.it/600/600?random&gravity=center"
      />
      <Scenario
        title="Smart City"
        icon="http://unsplash.it/600/600?random&gravity=center"
      />
      <Scenario
        title="Collage"
        icon="http://unsplash.it/600/600?random&gravity=center"
      />
      <Scenario
        title="Toilet"
        icon="http://unsplash.it/600/600?random&gravity=center"
      />
    </Row>
  </Section>
);

export default Scenarios;
