import React, { useEffect, useState } from 'react';
import './GameScore.css';
import { Flex } from '@chakra-ui/react';

const GameScore = () => {
  const [score, setScore] = useState(0);
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    setScore(JSON.parse(localStorage.getItem('answers')));
    setQuestionsNumber(JSON.parse(localStorage.getItem('questions'))?.length + 1);
    setName(localStorage.getItem('name'));
  }, []);
  return (
    <section className="GameScore">
      <Flex align="center" justify="center" direction="column" pt={200}>
        <h2 className="title">{name}</h2>
        <Flex className="input-block" align="center" justify="center" direction="column">
          <p className="main-text">
            Behold your score, woven by fate's own hand, A testament to where your knowledge stands. In the grand
            tapestry of spell and charm, Your intellect has proven to be strong and warm.
          </p>
          <p className="main-text">
            {score} / {questionsNumber}
          </p>
        </Flex>
      </Flex>
    </section>
  );
};

export default GameScore;
