import React from 'react';
import styled from 'styled-components';
interface ISectionProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
}

interface IProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  title?: string;
  desc?: string[];
}

const StyledSection = styled.section<ISectionProps>`
  width: 100%;
  padding-top: ${props => (props.first ? 'calc(8vh + 64px)' : '8vh')};
  padding-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: ${props => props.alignItems};
  text-align: ${props => props.textAlign};
  height: ${props => (props.fullscreen ? '100vh' : 'initial')};
  box-sizing: ${props => (props.fullscreen ? ' border-box' : 'initial')};
`;

const Section: React.FunctionComponent<IProps> = ({
  children,
  title = '',
  fullscreen = false,
  textAlign = 'left',
  first = false,
  alignItems = 'center',
}) => (
  <StyledSection
    fullscreen={fullscreen}
    textAlign={textAlign}
    first={first}
    alignItems={alignItems}
  >
    <h1>{title}</h1>
    {children}
  </StyledSection>
);

export default Section;
