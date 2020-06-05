import styled from 'styled-components';

import Layout from '../components/layout';
import Button from '../components/button';

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const HomePage = () => {
  return (
    <Layout>
      <Title>Emojinary</Title>
      <Button href={'/play'}>Play</Button>
    </Layout>
  );
};

export default HomePage;
