import React, { useState } from 'react';
import axios from 'axios';
import { Card, Icon } from 'antd';

import Section from '@/components/Section';
import Layout from '@/layouts/Main';
import { useAsyncEffect } from '@/utils';

type TUser = {
  gender: string;
  name: string;
  region: string;
  surname: string;
  photo: string;
};

// You can replace it by your API_ROOT in .env
// const API = `${process.env.API_ROOT}?ext`;
const API = `https://uinames.com/api/?ext`;

export default function Index() {
  const [user, setUser] = useState<TUser>({
    gender: '',
    name: '',
    region: '',
    surname: '',
    photo: '',
  });

  useAsyncEffect(async () => {
    try {
      const response = await axios.get(API);
      setUser(response.data);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const { gender, name, region, surname, photo } = user;
  return (
    <Layout>
      <Section fullscreen={true}>
        <Card
          hoverable={true}
          style={{ width: 200 }}
          cover={photo && <img alt="avatar" src={photo} />}
          actions={[
            <Icon key={1} type="like" />,
            <Icon key={2} type="heart" />,
            <Icon key={3} type="instagram" />,
          ]}
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
