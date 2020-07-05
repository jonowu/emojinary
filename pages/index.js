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
      <Flex justifyContent="center">
        <Button type="link" href={'/play'}>
          Play
        </Button>
      </Flex>
      <Footer>
        <Row>
          <Copyright width="30%">© Copyright Jonathan Wu 2020</Copyright>
          <Byline width="40%">The ultimate emoji trivia game!</Byline>
          <Credits width="30%">Credits</Credits>
        </Row>
      </Footer>
    </Layout>
  );
};

export default HomePage;
