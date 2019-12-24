import React from 'react';

import Section from '@/components/Section';
import { SectionId, PRODUCT_NAME } from '@/constants';
import Paragraphs from '../Paragraphs';

const HowItWorks: React.FC = () => (
  <Section
    title={{
      content: `How ${PRODUCT_NAME} works?`,
      id: SectionId.HowItWork,
    }}
  >
    <Paragraphs
      data={[
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Lorem',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum numquam laboriosam itaque dolorum eveniet fugit error, nulla quisquam earum debitis! Reprehenderit hic, odit eveniet modi dolorem beatae neque iste vero?',
        },
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Ipsum',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis consequatur sit odit! Rerum quasi officiis itaque voluptates ullam veniam tempore eos quod corporis reiciendis, rem nam commodi nemo necessitatibus.',
        },
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Dolor',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia autem consectetur rem quidem cupiditate explicabo culpa mollitia quia doloribus, praesentium eius ducimus repellat rerum minus ipsam distinctio velit beatae?',
        },
        {
          icon: 'http://unsplash.it/600/600?random&gravity=center',
          title: 'Consectetur',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis blanditiis doloremque, fugit dolor libero minus perspiciatis at incidunt deserunt aut harum rem amet quasi, omnis deleniti vero tenetur unde dolorum!',
        },
      ]}
    />
  </Section>
);

export default HowItWorks;
