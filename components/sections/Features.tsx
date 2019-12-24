import React from 'react';

import Section from '@/components/Section';
import { SectionId } from '@/constants';
import Paragraphs from '../Paragraphs';

const Features: React.FC = () => (
  <Section
    title={{
      content: 'Features',
      id: SectionId.Features,
      color: '#333',
    }}
  >
    <Paragraphs
      data={[
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Make Money',
          description:
            'Occaecat velit cupidatat sint deserunt est fugiat reprehenderit.',
        },
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Selling Data',
          description: 'Duis non magna incididunt laborum aliqua.',
        },
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Protect your password',
          description:
            'Qui irure in dolor pariatur voluptate nisi nisi incididunt adipisicing excepteur.',
        },
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Send the email',
          description:
            'Ea velit ullamco id laboris aliquip reprehenderit enim irure.',
        },
      ]}
    />
  </Section>
);

export default Features;
