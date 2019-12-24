import React from 'react';
import { Row } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import Scenario from '@/components/Scenario';
import { SectionId, SCENARIOS } from '@/constants';

const Scenarios: React.FC = () => (
  <Section
    title={{
      content: 'Application Scenarios',
      id: SectionId.Scenarios,
    }}
  >
    <Row style={{ width: '100%' }} between="xs">
      {SCENARIOS.map(s => (
        <Scenario key={s.title} {...s} />
      ))}
    </Row>
  </Section>
);

export default Scenarios;
