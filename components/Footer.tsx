import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { colors } from '@/styles/global';
import { media } from '@/utils';
import styled from 'styled-components';
import {
  COMPANY_LOGO_PATH,
  COPYRIGHT_YEAR,
  COMPANY_NAME,
  COMPANY_WEBSITE_URL,
  COMPANY_FACEBOOK_URL,
  COMPANY_TWITTER_URL,
  COMPANY_MEDIUM_URL,
} from '@/constants';
import { FaLink, FaFacebookF, FaTwitter, FaMediumM } from 'react-icons/fa';

interface IMedia {
  uri: string;
}

const StyledA = styled.a`
  margin-right: 16px;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const MediaLink: React.FC<IMedia> = ({ uri, children }) => (
  <StyledA href={uri}>{children}</StyledA>
);

const MediaLinkWrapper = styled(Row)`
  display: flex;
  justify-content: flex-end;
  ${media.lessThan('md')`justify-content: center;`}
`;

const Logo = styled.img`
  width: 150px;
  ${media.lessThan('md')`
    width: 80px;
    margin-bottom: 20px;`}
`;

const Container = styled(Grid)`
  padding: 32px 20px 14px;
`;

const CopyRight = styled.p`
  text-align: center;
  opacity: 0.5;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: lighter;
  ${media.lessThan('md')` 
  margin-top: 32px;
  font-size: 16px;`}
`;

const Footer: React.FC = () => (
  <Container
    fluid
    style={{
      backgroundColor: colors.primary,
    }}
  >
    <Row center="xs" style={{ marginBottom: '12px' }}>
      <Col>
        <Logo style={{ marginRight: '12px' }} src={COMPANY_LOGO_PATH} />
      </Col>
    </Row>
    <Row center="xs">
      <Col>
        <MediaLinkWrapper>
          <MediaLink uri={COMPANY_WEBSITE_URL}>
            <FaLink color="#fff" />
          </MediaLink>
          <MediaLink uri={COMPANY_FACEBOOK_URL}>
            <FaFacebookF color="#fff" />
          </MediaLink>
          <MediaLink uri={COMPANY_TWITTER_URL}>
            <FaTwitter color="#fff" />
          </MediaLink>
          <MediaLink uri={COMPANY_MEDIUM_URL}>
            <FaMediumM color="#fff" />
          </MediaLink>
        </MediaLinkWrapper>
      </Col>
    </Row>
    <CopyRight>
      {COPYRIGHT_YEAR} © {COMPANY_NAME}
    </CopyRight>
  </Container>
);

export default Footer;
