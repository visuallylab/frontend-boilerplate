import React from 'react';

import Section from '@/components/Section';
import { getRelativePath } from '@/utils';
import { SectionId } from '@/constants';
import Paragraphs from '../Paragraphs';

const Features: React.FC = () => (
  <Section
    background="rgb(22, 30, 60)"
    title={{
      content: 'Features',
      id: SectionId.Features,
    }}
  >
    <Paragraphs
      data={[
        {
          icon: '/icon-digital-id.svg',
          title: 'Digital ID',
          description:
            'An ID identifier that meets GDPR compliant and W3C protocol. It also could be used as cross platform account.',
        },
        {
          icon: '/icon-data-exchange.svg',
          title: 'Data Exchangeable',
          description:
            'Users can authorize their exchangeable data and digital assets on multiple services.',
        },
        {
          icon: getRelativePath('/icon-traceability.svg'),
          title: 'Traceability',
          description:
            'Contain the certificate and verification, making KYC reusable to lower the cost of tracing for data authentication.',
        },
        {
          icon: getRelativePath('/icon-account-integration.svg'),
          title: 'Account Integration',
          description:
            'Account as DID with single sign-on (SSO) in and APIs. easily integrate new and existing accounts.',
        },
      ]}
    />
  </Section>
);

export default Features;
