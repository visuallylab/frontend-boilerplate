import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { colors } from '@/styles/global';
import { getRelativePath, media } from '@/utils';
import styled from 'styled-components';

interface IMedia {
  uri: string;
  img: string;
}

const MediaIcon = styled.img`
  width: 32px;
  ${media('md')} {
    width: 48px;
  }
`;

const StyledA = styled.a`
  margin-right: 16px;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const MediaLink: React.FC<IMedia> = ({ uri, img }) => (
  <StyledA href={uri}>
    <MediaIcon src={img} />
  </StyledA>
);

const MediaLinkWrapper = styled(Row)`
  display: flex;
  justify-content: flex-end;
  ${media('md')} {
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 150px;
  ${media('md')} {
    width: 80px;
    margin-bottom: 20px;
  }
`;

const Container = styled(Grid)`
  padding: 32px 20px 14px;
  ${media('md')} {
    padding: 16px 0 0 0;
  }
`;

const CopyRight = styled.p`
  text-align: center;
  opacity: 0.5;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: lighter;
  ${media('md')} {
    margin-top: 32px;
    font-size: 16px;
  }
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
        <Logo
          style={{ marginRight: '12px' }}
          src={getRelativePath('/logo-biilabs.svg')}
        />
      </Col>
    </Row>
    <Row center="xs">
      <Col>
        <MediaLinkWrapper>
          <MediaLink
            uri="https://biilabs.io/"
            img={getRelativePath('/link-earth.svg')}
          />
          <MediaLink
            uri="https://www.facebook.com/biilabsrocks"
            img={getRelativePath('/link-fb.svg')}
          />
          <MediaLink
            uri="https://twitter.com/BiiLabs"
            img={getRelativePath('/link-twitter.svg')}
          />
          <MediaLink
            uri="https://medium.com/biilabs"
            img={getRelativePath('/link-medium.svg')}
          />
        </MediaLinkWrapper>
      </Col>
    </Row>
    <CopyRight>2019 © BiiLabs</CopyRight>
  </Container>
);

export default Footer;
