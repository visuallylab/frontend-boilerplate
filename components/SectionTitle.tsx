import styled from 'styled-components';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  font-size: ${props => props.fontSize || 36}px;
  color: ${props => props.color || 'rgb(255,255,255)'};
  margin: ${props => props.margin || '0'};
  margin-top: 60px;
  margin-bottom: 40px;
`;

export default Title;
