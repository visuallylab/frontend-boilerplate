import styled from 'styled-components';

import { Col } from 'react-styled-flexboxgrid';
import { media } from '@/utils';

export const Icon = styled.img`
  z-index: 1;
  border-radius: 50%;
  margin-bottom: 15px;
  position: relative;
  width: 112px;
`;

export const Description = styled.p<{ color: string }>`
  display: inline-block;
  color: ${props => props.color};
  font-size: 18px;
  max-width: 250px;
  margin: 0;
  text-align: left;

  ${media.lessThan('md')`
  max-width: initial;
  font-size: 16px;
  `}
`;

export const Title = styled.h2<{ color: string }>`
  font-weight: 400;
  color: ${props => props.color};
  font-size: 24px;
  margin: 0 0 10px;
  ${media.lessThan('md')` 
   font-size: 20px;
  `}
`;

const Container = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 18px;
  ${media.lessThan('md')` 
    margin-bottom: 40px;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
   
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('md')`
    text-align: left;
    padding-left: 32px;
    align-items: flex-start;
  `}
`;

export interface IParagraph {
  title: string;
  description: string;
  icon?: string;
  color?: string;
  iconStyle?: object;
}

const Paragraph: React.FC<IParagraph> = ({
  title,
  description,
  icon,
  iconStyle,
  color = '#333',
}) => (
  <Container md={3} sm={6} xs={12}>
    {icon && <Icon src={icon} style={iconStyle} />}
    <ContentWrapper>
      <Title color={color}>{title}</Title>
      <Description color={color}>{description}</Description>
    </ContentWrapper>
  </Container>
);

export default Paragraph;
