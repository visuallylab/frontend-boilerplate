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

const MediaLink: React.FC<IMedia> = ({ uri, img }) => (
  <a style={{ marginRight: 16 }} href={uri}>
    <MediaIcon src={img} />
  </a>
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
  margin-top: 100px;
  color: #fff;
  font-family: 'HelveticaNeue-Light';
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
    <Row between="xs">
      <Col xs={24} sm={24} md={2} style={{ textAlign: 'center' }}>
        <Logo src={getRelativePath('/logo-biilabs.svg')} />
      </Col>
      <Col xs={24} sm={24} md={22}>
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
