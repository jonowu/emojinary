import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';

import Layout from '../components/layout';
import Button from '../components/button';

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const Play = () => {
  return (
    <Layout>
      <Heading>Guess the Movie!</Heading>

      <Flex justifyContent="center" mt="3rem">
        <Box>
          <Button type={'button'}>Submit</Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Play;
