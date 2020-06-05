import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import _ from 'lodash';

import Layout from '../components/layout';
import Button from '../components/button';
import { Col, Row } from '../components/grid';
import { movies } from '../data';

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const StyledInput = styled.input`
  padding: 0 1rem;
  height: 50px;
  width: 100%;
  border-style: solid;
  font-weight: bold;
`;

const Emoji = styled.div`
  font-size: 4rem;
`;

const Play = () => {
  const [movie, setMovie] = useState('');
  const [points, setPoints] = useState(0);
  const [playerInput, setPlayerInput] = useState('');

  useEffect(() => {
    const randomMovie = _.shuffle(movies)[0];
    setMovie(randomMovie);
  }, [points]);

  const checkAnswer = () => {
    let correct = false;
    _.each(movie.answers, (answer) => {
      if (playerInput === answer) {
        correct = true;
        setPoints(points + 1);
      }
    });
    correct ? console.log('correct') : console.log('incorrect');
  };

  return (
    <Layout>
      <Row justifyContent="center">
        <Heading>Guess the Movie!</Heading>
      </Row>
      <Row justifyContent="center" mb="2rem">
        <div>Points: {points}</div>
      </Row>
      <Row justifyContent="center" mb="2rem">
        <Emoji>{movie.emoji}</Emoji>
      </Row>
      <Row justifyContent="center" mb="2rem" mx="5rem">
        <StyledInput
          type="text"
          placeholder="Please enter your answer"
          value={playerInput}
          onChange={(e) => setPlayerInput(e.target.value)}
        />
      </Row>
      <Row justifyContent="center">
        <Box>
          <Button type={'button'} onClick={checkAnswer}>
            Submit
          </Button>
        </Box>
      </Row>
    </Layout>
  );
};

export default Play;
