import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { useState } from 'react';
import styled from 'styled-components';
import { SectionId, COMPANY_WEBSITE_URL, COMPANY_NAME } from '@/constants';

export const MenuIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 44px;
  height: 44px;
`;

export const MenuIconWrapper = styled.a`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9;
`;

export const MenuWrapper = styled(Row)<{ active: boolean }>`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 8;
  bottom: ${props => (props.active ? 0 : 'initial')};
  background-color: ${props => (props.active ? '#161e3c' : 'transparent')};
`;

export const MenuItem = styled.a`
  display: block;
  font-size: 32px;
  color: #ffffff;
  padding-top: 32px;
  padding-bottom: 12px;
  margin-left: 32px;
  margin-right: 13px;
  border-bottom: 1px solid #fff;
`;

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const close = () => setIsActive(false);
  return (
    <Grid>
      <MenuWrapper active={isActive}>
        <Col sm={24} md={false}>
          <MenuIconWrapper
            onClick={e => {
              e.preventDefault();
              setIsActive(prev => !prev);
            }}
          >
            <MenuIcon
              src={isActive ? '/button-option-close.svg' : '/button-option.svg'}
            />
          </MenuIconWrapper>
        </Col>
        {isActive && (
          <>
            <MenuItem href={`#${SectionId.Features}`} onClick={close}>
              Features
            </MenuItem>
            <MenuItem href={`#${SectionId.Scenarios}`} onClick={close}>
              Scenarios
            </MenuItem>
            <MenuItem href={`#${SectionId.HowItWork}`} onClick={close}>
              How it works
            </MenuItem>
            <MenuItem href={`#${SectionId.Download}`} onClick={close}>
              Download
            </MenuItem>
            <MenuItem href={COMPANY_WEBSITE_URL} onClick={close}>
              {COMPANY_NAME}
            </MenuItem>
          </>
        )}
      </MenuWrapper>
    </Grid>
  );
};

export default Menu;
