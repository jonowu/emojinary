import { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Layout from '../components/layout';
import Button from '../components/button';
import Input from '../components/input';
import { Row, Col } from '../components/grid';
import { movies } from '../data';

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const Emoji = styled.div`
  font-size: 4rem;
`;

const Hint = styled.span`
  font-style: italic;
`;

const Play = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [playerInput, setPlayerInput] = useState('');
  const [points, setPoints] = useState(0);
  const [incorrect, setIncorrect] = useState();
  const [hint, setHint] = useState();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    randomiseMovie();
    setLoading(false);
  }, []);

  const randomiseMovie = () => {
    const randomMovie = _.shuffle(movies)[0];
    setMovie(randomMovie);
    setHint(randomMovie.hint);
  };

  const checkAnswer = () => {
    _.each(movie.answers, (answer) => {
      if (playerInput.toUpperCase() === answer.toUpperCase()) {
        setPoints(points + 1);
        _.remove(movies, movie);
        randomiseMovie();
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
      <Row justifyContent="center" mb="0.5rem">
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
            <Col>
              <Button type={'button'} onClick={checkAnswer} mr="1rem">
                Submit
              </Button>
            </Col>
            <Col>
              <Button type={'button'} onClick={() => setShowHint(!showHint)}>
                {showHint ? 'Hide hint' : 'Show hint'}
              </Button>
            </Col>
          </Row>
          {showHint && (
            <Row justifyContent="center" mt="2rem">
              <div>
                Hint: <Hint>{hint}</Hint>
              </div>
            </Row>
          )}
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
