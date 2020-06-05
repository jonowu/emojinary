import styled from 'styled-components';
import Layout from '../components/layout';

const Title = styled.h1`
  font-size: 3rem;
`;

const HomePage = () => {
  return (
    <Layout>
      <Title>Emojinary</Title>
    </Layout>
  );
};

export default HomePage;
