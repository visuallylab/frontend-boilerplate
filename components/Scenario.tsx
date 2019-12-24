import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { media } from '@/utils';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media('md')} {
    height: 340px;
  }
`;

const Title = styled(Col)`
  color: #fff;
  font-size: 36px;
  margin-top: 56px;
  margin-bottom: 30px;

  ${media('md')} {
    font-size: 22px;
    text-align: center;
  }
`;

const Img = styled.img`
  height: 180px;
  width: 180px;
  margin-bottom: 62px;

  ${media('md')} {
    width: 90%;
  }
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
