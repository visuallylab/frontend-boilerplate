import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { media } from '@/utils';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled(Col)`
  color: #333;
  font-size: 24px;
  margin-top: 56px;
  margin-bottom: 30px;
  ${media.lessThan('md')`
   font-size: 16px;
   font-weight: 300;
   margin-bottom: 12px;
   margin-top: 0px;
  `}
`;

const Img = styled.img`
  height: 180px;
  width: 180px;
  margin-bottom: 62px;

  ${media.lessThan('md')`
  width: 90%;
  margin-bottom: 20px;
  `}
`;

const Scenario: React.FC<{
  title: string;
  icon: string;
}> = props => (
  <Container xs={6} sm={4} md={3} {...props}>
    <Title>{props.title}</Title>
    <Img src={props.icon} />
  </Container>
);

export default Scenario;
