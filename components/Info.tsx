import React from 'react';
import { Title, Description as ItemDescription } from '@/components/Paragraph';
import styled from 'styled-components';
import { media } from '@/utils';
import { Col } from 'react-styled-flexboxgrid';

export const Description = styled(ItemDescription)`
  text-align: left;
  margin-left: 50px;
  ${media.lessThan('md')`
    max-width: 100%;
    margin-bottom: 100px;
    `}
`;
export const InfoTitle = styled(Title)`
  ${media.lessThan('md')`  margin-bottom: 8px;`}
`;

export const InfoWrapper = styled(Col)`
  display: flex;
  flex: 1;
  text-align: center;
`;
export const Info: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <InfoWrapper md={3} sm={12}>
    <InfoTitle color="rgb(58,173,212)">{title}</InfoTitle>
    <Description color="rgb(58,173,212)">{description}</Description>
  </InfoWrapper>
);
