import { Box, Flex } from 'reflexbox';
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
  const [usedHint, setUsedHint] = useState(false);

  useEffect(() => {
    if (movies.length > 0) {
      randomiseMovie();
    }
    setLoading(false);
  }, []);

  const randomiseMovie = () => {
    const randomMovie = _.shuffle(movies)[0];
    setMovie(randomMovie);
    setShowHint(false);
    setHint(randomMovie.hint);
  };

  const skipMovie = () => {
    if (movies.length > 1) {
      const skippedMovie = movie;
      _.remove(movies, skippedMovie); // remove the movie to be skipped
      randomiseMovie();
      movies.push(skippedMovie); // add back the movie that was skipped
    }
  };

  const checkAnswer = () => {
    _.each(movie.answers, (answer) => {
      if (playerInput.toUpperCase().trim() === answer.toUpperCase()) {
        setPoints(points + 1);
        setPlayerInput('');
        setIncorrect(false);
        _.remove(movies, movie);
        if (movies.length > 0) {
          randomiseMovie();
        }
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
          <Row justifyContent="center" mb="2rem" mx={[2, 4]}>
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
          <Flex justifyContent="center" textAlign="center" flexWrap={['wrap', 'nowrap']}>
            <Box width={[1, 4 / 5, 'auto']} mr={['0', '1rem']}>
              <Button type={'button'} onClick={checkAnswer} mr="1rem">
                Submit
              </Button>
            </Box>
            <Box width={[1, 4 / 5, 'auto']} mt={['0.5rem', 0]} mr={['0', '1rem']}>
              <Button type={'button'} onClick={skipMovie} mr="1rem">
                Skip
              </Button>
            </Box>
            <Box width={[1, 4 / 5, 'auto']} mt={['0.5rem', 0]}>
              <Button
                type={'button'}
                onClick={() => {
                  setShowHint(!showHint);
                  setUsedHint(true);
                }}
              >
                {showHint ? 'Hide hint' : 'Show hint'}
              </Button>
            </Box>
          </Flex>
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
        <Box width="auto" textAlign="center" mt="1rem" mx="2rem">
          <div>Congratulations 🎉 You've guessed all the movies — thanks for playing!</div>
          {!usedHint && <div>You also used no hints! Wow 👏</div>}
        </Box>
      )}
    </Layout>
  );
};

export default Play;
