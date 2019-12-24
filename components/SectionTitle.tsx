import styled from 'styled-components';
import { media } from '@/utils';

const Title = styled.h1<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  font-size: ${props => props.fontSize || 40}px;
  font-weight: 500;
  color: ${props => props.color || '#333'};
  margin: ${props => props.margin || '0'};
  margin-top: 60px;
  margin-bottom: 40px;

  ${media.lessThan('md')`
    font-size: 30px;
    font-weight: 300;
  `}
`;

export default Title;
