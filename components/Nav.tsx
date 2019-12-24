import styled from 'styled-components';

import Menu from '@/components/Menu';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { SectionId, COMPANY, PRODUCT } from '@/constants';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const StyledNav = styled(Grid)`
  z-index: 2;
  background-color: #fff;
  box-shadow: 0px 1px 2px 0px #eee;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 20px;
  padding-bottom: 12px;
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

const ScrollLink = styled(AnchorLink)`
  margin-left: 34px;
  color: #000;
  font-size: 20px;
  text-decoration: none;
`;

const A = styled.a`
  margin-left: 34px;
  color: #000;
  font-size: 20px;
  text-decoration: none;
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
          <StyledImage src={PRODUCT.LOGO_PATH} alt="logo" />
          <NavTitle>{PRODUCT.NAME}</NavTitle>
        </CenteredCol>
        <AlignEndCol xs={false} sm={false} md>
          <ScrollLink href={`#${SectionId.Features}`}>Features</ScrollLink>
          <ScrollLink href={`#${SectionId.Scenarios}`}>Scenarios</ScrollLink>
          <ScrollLink href={`#${SectionId.HowItWork}`}>How it works</ScrollLink>
          <ScrollLink href={`#${SectionId.Download}`}>Download</ScrollLink>
          <A href={COMPANY.WEBSITE_URL}>{COMPANY.NAME}</A>
        </AlignEndCol>
      </Row>
    </StyledNav>
  </>
);
