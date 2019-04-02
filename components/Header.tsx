import Link from 'next/link';
import styled from 'styled-components';
import { Layout } from 'antd';

import { NAV_TITLE } from '@/constants';
import { getRelativePath } from '@/utils';

const StyledHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: rgba(240, 242, 245, 0.95);
  height: auto;
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 2.5rem;
`;

const NavTitle = styled.span`
  line-height: 2.5rem;
  display: inline-block;
  font-size: 15px;
  margin-left: 10px;
  transform: translateY(5px);
`;

export default () => (
  <StyledHeader>
    <span>
      <StyledImage src={getRelativePath('/static/logo.svg')} alt="logo" />
      <NavTitle>{NAV_TITLE}</NavTitle>
    </span>
    <span>
      <Link href="/">
        <a>Home</a>
      </Link>
      {' | '}
      <Link href={getRelativePath('/about')}>
        <a>About</a>
      </Link>
    </span>
  </StyledHeader>
);
