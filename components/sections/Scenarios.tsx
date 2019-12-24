import React from 'react';
import { Row } from 'react-styled-flexboxgrid';

import Section from '@/components/Section';
import Scenario from '@/components/Scenario';
import { getRelativePath } from '@/utils';
import { SectionId } from '@/constants';

const Scenarios: React.FC = () => (
  <Section
    background="linear-gradient(rgb(0, 226, 158), rgb(0, 156, 255))"
    title={{
      content: 'Application Scenarios',
      id: SectionId.Scenarios,
    }}
  >
    <Row style={{ width: '100%' }} between="xs">
      <Scenario
        title="Certificates"
        icon={getRelativePath('/icon-certification.svg')}
      />
      <Scenario
        title="Smart City"
        icon={getRelativePath('/icon-smart-city.svg')}
      />
      <Scenario
        title="Medical Record"
        icon={getRelativePath('/icon-medical-record.svg')}
      />
      <Scenario
        title="OAuth Login"
        icon={getRelativePath('/icon-oauth-login.svg')}
      />
    </Row>
  </Section>
);

export default Scenarios;
