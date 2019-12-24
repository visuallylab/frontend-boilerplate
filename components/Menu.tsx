import { useState } from 'react';
import styled from 'styled-components';
import { SectionId, COMPANY_WEBSITE_URL, COMPANY_NAME } from '@/constants';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { generateMedia } from 'styled-media-query';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const MenuIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 44px;
  height: 44px;
`;

const media = generateMedia({
  md: '1024px',
});

export const MenuIconWrapper = styled.a`
  position: absolute;
  top: 24px;
  right: 32px;
  z-index: 9;
  display: none;
  cursor: pointer;

  ${media.lessThan('md')`
    display: block;
  `}
`;

export const MenuWrapper = styled.div<{ active: boolean }>`
  background-color: #fff;
  box-shadow: 0px 1px 2px 0px #eee;
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 32px;
`;

export const ScrollMenuItem = styled(AnchorLink)`
  display: block;
  font-size: 20px;
  text-decoration: none;
  font-weight: 400;
  line-height: 60px;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuItem = styled.a`
  display: block;
  font-size: 20px;
  text-decoration: none;
  font-weight: 400;
  line-height: 60px;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 8;
`;

const Menu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const close = () => setIsActive(false);
  return (
    <>
      <MenuIconWrapper
        onClick={e => {
          e.preventDefault();
          setIsActive(prev => !prev);
        }}
      >
        {isActive ? <FaTimesCircle color="#333" /> : <FaBars color="#333" />}
      </MenuIconWrapper>
      <Container>
        <MenuWrapper active={isActive}>
          {isActive && (
            <>
              <ScrollMenuItem href={`#${SectionId.Features}`} onClick={close}>
                Features
              </ScrollMenuItem>
              <ScrollMenuItem href={`#${SectionId.Scenarios}`} onClick={close}>
                Scenarios
              </ScrollMenuItem>
              <ScrollMenuItem href={`#${SectionId.HowItWork}`} onClick={close}>
                How it works
              </ScrollMenuItem>
              <ScrollMenuItem href={`#${SectionId.Download}`} onClick={close}>
                Download
              </ScrollMenuItem>
              <MenuItem href={COMPANY_WEBSITE_URL} onClick={close}>
                {COMPANY_NAME}
              </MenuItem>
            </>
          )}
        </MenuWrapper>
      </Container>
    </>
  );
};

export default Menu;
