import React from 'react';

import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import { SectionId } from '@/constants';
import Paragraphs from '../Paragraphs';

const HowItWorks: React.FC = () => (
  <Section
    background="white"
    title={{
      content: 'How BiiMe works?',
      id: SectionId.HowItWork,
      color: 'rgb(58, 173, 212)',
    }}
  >
    <Paragraphs
      data={[
        {
          color: 'rgb(58, 173, 212)',
          icon: getRelativePath('/icon-3-getbiime.svg'),
          title: 'Get BiiMe DID',
          description:
            'Service owners may use your existing account system and connect BiiMe with OAuth API, or using BiiMe APP developed by BiiLabs directly.',
        },
        {
          color: 'rgb(58, 173, 212)',
          icon: getRelativePath('/icon-3-licensing.svg'),
          title: 'Licensing',
          description:
            'Once the users request to join your services, they are able to authorize their information and personal data on DID or offline to meet your licensing proof.',
        },
        {
          color: 'rgb(58, 173, 212)',
          icon: getRelativePath('/icon-3-verfivation.svg'),
          title: 'Verification',
          description:
            'Only need to scan the users QR code to verify if they meet the qualification without more detail information or prove ducuments.',
        },
        {
          color: 'rgb(58, 173, 212)',
          icon: getRelativePath('/icon-3-access-service.svg'),
          title: 'Access Service',
          description:
            'Easily manage the qualification to access the control of the services, and speed up the user base and integrate multiple services across different department.',
        },
      ]}
    />
  </Section>
);

export default HowItWorks;
