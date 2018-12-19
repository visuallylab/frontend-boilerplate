import React from 'react';
import axios from 'axios';
import { Card, Icon } from 'antd';

import Section from '../components/Section';
import Layout from '../components/Layout';

type State = {
  user: {
    gender: string;
    name: string;
    region: string;
    surname: string;
    photo: string;
  };
};

const API = `${process.env.API_ROOT}?ext`;

class Index extends React.Component {
  public readonly state: State = {
    user: {
      gender: '',
      name: '',
      region: '',
      surname: '',
      photo: '',
    },
  };

  public async componentDidMount() {
    try {
      const resposne = await axios.get(API);
      this.setState({ user: resposne.data });
    } catch (error) {
      alert(error.message);
    }
  }

  public render() {
    const { gender, name, region, surname, photo } = this.state.user;
    return (
      <Layout>
        <Section fullscreen>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt='avatar' src={photo} />}
            actions={[<Icon type='like' />, <Icon type='heart' />, <Icon type='instagram' />]}
          >
            <Card.Meta
              title={`${name} ${surname}`}
              description={`${region}, ${gender}`}
            />
          </Card>
        </Section>
      </Layout>
    );
  }
}

export default Index;
