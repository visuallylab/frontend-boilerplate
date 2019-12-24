import styled from 'styled-components';

import Menu from '@/components/Menu';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import {
  SectionId,
  COMPANY_WEBSITE_URL,
  PRODUCT_NAME,
  COMPANY_NAME,
  PRODUCT_LOGO_PATH,
} from '@/constants';

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
          <StyledImage src={PRODUCT_LOGO_PATH} alt="logo" />
          <NavTitle>{PRODUCT_NAME}</NavTitle>
        </CenteredCol>
        <AlignEndCol xs={false} sm={false} md>
          <A href={`#${SectionId.Features}`}>Features</A>
          <A href={`#${SectionId.Scenarios}`}>Scenarios</A>
          <A href={`#${SectionId.HowItWork}`}>How it works</A>
          <A href={`#${SectionId.Download}`}>Download</A>
          <A href={COMPANY_WEBSITE_URL}>{COMPANY_NAME}</A>
        </AlignEndCol>
      </Row>
    </StyledNav>
  </>
);
