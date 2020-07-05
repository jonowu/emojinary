import { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Layout from '../components/layout';
import Button from '../components/button';
import Input from '../components/input';
import { Row } from '../components/grid';
import { movies } from '../data';

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const Emoji = styled.div`
  font-size: 4rem;
`;

const Play = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [playerInput, setPlayerInput] = useState('');
  const [points, setPoints] = useState(0);
  const [incorrect, setIncorrect] = useState();

  useEffect(() => {
    setMovie(_.shuffle(movies)[0]);
    setLoading(false);
  }, []);

  const checkAnswer = () => {
    _.each(movie.answers, (answer) => {
      if (playerInput.toUpperCase() === answer.toUpperCase()) {
        setPoints(points + 1);
        _.remove(movies, movie);
        setMovie(_.shuffle(movies)[0]);
        setPlayerInput('');
        setIncorrect(false);
        return false;
      } else {
        setIncorrect(true);
      }
    });
  };

  return (
    <Layout>
      <Row justifyContent="center">
        <Heading>Guess the Movie!</Heading>
      </Row>
      <Row justifyContent="center" mb="2rem">
        <div>Points: {points}</div>
      </Row>
      {!loading && movies.length > 0 && (
        <>
          <Row justifyContent="center" mb="2rem">
            <Emoji>{movie.emoji}</Emoji>
          </Row>
          <Row justifyContent="center" mb="2rem" mx="5rem">
            <Input
              type="text"
              placeholder="Please enter your answer"
              value={playerInput}
              onChange={(e) => setPlayerInput(e.target.value)}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  checkAnswer();
                } else {
                  setIncorrect(false);
                }
              }}
              incorrect={incorrect}
            />
          </Row>
          <Row justifyContent="center">
            <Button type={'button'} onClick={checkAnswer}>
              Submit
            </Button>
          </Row>
        </>
      )}
      {!loading && movies.length === 0 && (
        <Row justifyContent="center" mb="2rem">
          No more movies left!
        </Row>
      )}
    </Layout>
  );
};

export default Play;
