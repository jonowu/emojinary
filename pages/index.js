import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';

import { Row, Col } from '../components/grid';
import Layout from '../components/layout';
import Button from '../components/button';
import Footer from '../components/footer';

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const Copyright = styled(Col)`
  text-align: left;
`;

const Byline = styled(Col)`
  text-align: center;
`;

const Credits = styled(Col)`
  text-align: right;
`;

const HomePage = () => {
  return (
    <Layout>
      <Title>Emojinary</Title>
      <Flex justifyContent="center" mt="3rem">
        <Box>
          <Button type="link" href={'/play'}>
            Play
          </Button>
        </Box>
      </Flex>
      <Footer>
        <Row flexDirection={['column', 'row']} flexWrap="wrap" justifyContent={['center', 'flex-start']} py="1rem">
          <Copyright mt={['0.5rem', '0']} width={['100%', '15%']} order={[3, 0]}>
            © Copyright
          </Copyright>
          <Byline width={['100%', '70%']}>The ultimate emoji trivia game!</Byline>
          <Credits mt={['0.5rem', '0']} width={['100%', '15%']}>
            Credits
          </Credits>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HomePage;
