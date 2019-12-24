import styled from 'styled-components';

import { getRelativePath } from '@/utils';
import Menu from '@/components/Menu';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const StyledNav = styled(Grid)`
  z-index: 2;
  background-color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  padding: 16px;
`;

const StyledImage = styled.img`
  width: 27px;
`;

const NavTitle = styled.span`
  display: inline-block;
  font-size: 24px;
  margin-left: 10px;
  color: rgb(28, 42, 77);
`;

const A = styled.a`
  margin-left: 34px;
  color: #000;
  font-size: 20px;
`;

const CenteredCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlignEndCol = styled(Col)`
  text-align: end;
`;

export default () => (
  <>
    <Menu />
    <StyledNav fluid>
      <Row between="xs" style={{ width: '100%' }}>
        <CenteredCol>
          <StyledImage src={getRelativePath('/icon-4.svg')} alt="logo" />
          <NavTitle>BiiMe</NavTitle>
        </CenteredCol>
        <AlignEndCol xs={false} sm={false} md>
          <A href="#features">Features</A>
          <A href="#scenarios">Scenarios</A>
          <A href="#how-it-work">How it works</A>
          <A href="#download">Download</A>
          <A href="https://biilabs.io/">BiiLabs</A>
        </AlignEndCol>
      </Row>
    </StyledNav>
  </>
);
