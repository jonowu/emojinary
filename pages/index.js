import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';

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
      <Flex justifyContent="center" mt="3rem">
        <Box>
          <Button href={'/play'}>Play</Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default HomePage;
