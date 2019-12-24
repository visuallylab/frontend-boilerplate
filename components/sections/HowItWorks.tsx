import React from 'react';

import Section from '@/components/Section';
import { SectionId, PRODUCT, HOW_IT_WORKS } from '@/constants';
import Paragraphs from '../Paragraphs';

const HowItWorks: React.FC = () => (
  <Section
    title={{
      content: `How ${PRODUCT.NAME} works?`,
      id: SectionId.HowItWork,
    }}
  >
    <Paragraphs data={HOW_IT_WORKS} />
  </Section>
);

export default HowItWorks;
