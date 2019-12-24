import styled from 'styled-components';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  font-size: ${props => props.fontSize || 40}px;
  font-weight: 400;
  color: ${props => props.color || '#333'};
  margin: ${props => props.margin || '0'};
  margin-top: 60px;
  margin-bottom: 40px;
`;

export default Title;
