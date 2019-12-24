import React from 'react';

import Section from '@/components/Section';
import { SectionId, FEATURES } from '@/constants';
import Paragraphs from '../Paragraphs';

const Features: React.FC = () => (
  <Section
    title={{
      content: 'Features',
      id: SectionId.Features,
      color: '#333',
    }}
  >
    <Paragraphs data={FEATURES} />
  </Section>
);

export default Features;
