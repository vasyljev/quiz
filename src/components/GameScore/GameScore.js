import React, { useEffect, useState } from 'react';
import './GameScore.css';
import { Flex } from '@chakra-ui/react';
import StorageService from '../../services/StorageService';

const GameScore = () => {
  const [score, setScore] = useState(0);
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [name, setName] = useState('');
  const [resultText, setResultText] = useState('');

  const setTextAccordingToResult = () => {
    const result = StorageService.correctAnswersNumber;
    switch (true) {
      case result <= 3:
        setResultText('');
        break;
      case result > 3 && result <= 7:
        setResultText('');
        break;
      case result > 7:
        setResultText('');
        break;
      default:
        setResultText('');
        break;
    }
  };

  useEffect(() => {
    setScore(StorageService.correctAnswersNumber);
    setQuestionsNumber(StorageService.questions?.length);
    setName(StorageService.userName);
    setTextAccordingToResult();
  }, []);
  return (
    <section className="GameScore">
      <Flex align="center" justify="center" direction="column" pt={200}>
        <h2 className="title">{name}!</h2>
        <Flex className="input-block" align="center" justify="center" direction="column">
          <p className="main-text">
            {resultText}
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
