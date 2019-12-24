import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import Title from '@/components/SectionTitle';
interface ISectionProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  background?: string;
}

interface ITitle {
  content: string;
  id: string;
  color?: string;
}

interface IProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  title?: ITitle;
  desc?: string[];
  background?: string;
}

const StyledSection = styled(Grid)<ISectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 120px 20px;
  align-items: ${(props: ISectionProps) => props.alignItems};
  text-align: ${(props: ISectionProps) => props.textAlign};
  height: ${(props: ISectionProps) => (props.fullscreen ? '90vh' : 'initial')};
  background: ${(props: ISectionProps) => props.background || 'transparent'};
`;

const Section: React.FunctionComponent<IProps> = ({
  children,
  fullscreen = false,
  textAlign = 'left',
  first = false,
  alignItems = 'center',
  background,
  title,
}) => (
  <StyledSection
    fluid
    fullscreen={fullscreen}
    textAlign={textAlign}
    first={first}
    alignItems={alignItems}
    background={background}
  >
    {title && (
      <Title id={title.id} color={title.color}>
        {title.content}
      </Title>
    )}
    {children}
  </StyledSection>
);

export default Section;
