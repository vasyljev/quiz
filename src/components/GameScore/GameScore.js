'use client';

import React, { useEffect, useState } from 'react';
import './GameScore.scss';
import { Flex } from '@chakra-ui/react';
import StorageService from '../../services/StorageService';
import { motion } from 'framer-motion';
import { SCORE_ANIMATION_CONFIG, SCORE_TEXT_ANIMATION_CONFIG } from '../../constants/routing-animation-config';

const GameScore = () => {
  const [score, setScore] = useState(0);
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [name, setName] = useState('');
  const [resultText, setResultText] = useState('');

  const setTextAccordingToResult = (scoreValue, setQuestionsNumberValue) => {
    const percentage = (scoreValue / setQuestionsNumberValue) * 100;
    switch (true) {
      case percentage <= 20:
        setResultText(
          "Alas, young wizard, your journey's just begun,\n" +
            'With spells to learn and battles to be won.\n' +
            'Your score whispers of potential yet to find,\n' +
            'Fear not, for greatness takes time to bind.\n',
        );
        break;
      case percentage > 20 && percentage <= 70:
        setResultText(
          'Well met, apprentice of the arcane arts,\n' +
            'Your score reflects a heart that bravely starts.\n' +
            'A commendable feat, with much room to grow,\n' +
            'In the dance of enchantments and magical flow.\n',
        );
        break;
      case percentage > 70:
        setResultText(
          'Huzzah! A master of the wizarding lore,\n' +
            'Your score soars high, with myths to explore.\n' +
            'In the annals of Hogwarts, your name shall gleam,\n' +
            "A champion of magic, a sorcerer's dream.\n",
        );
        break;
      default:
        setResultText('');
        break;
    }
  };

  useEffect(() => {
    const scoreValue = StorageService.correctAnswersNumber;
    const setQuestionsNumberValue = StorageService.questions?.length;
    setScore(scoreValue);
    setQuestionsNumber(setQuestionsNumberValue);
    setName(StorageService.userName);
    setTextAccordingToResult(scoreValue, setQuestionsNumberValue);
  }, []);
  return (
    <motion.div variants={SCORE_ANIMATION_CONFIG} initial="initial" animate="final" className="GameScore w-full h-full">
      <motion.div variants={SCORE_TEXT_ANIMATION_CONFIG} initial="initial" animate="final">
        <Flex align="center" justify="center" direction="column" pt={200}>
          <h2 className="title">{name}!</h2>
          <Flex className="text-block" align="center" justify="center" direction="column">
            <p className="main-text">{resultText}</p>
            <p className="main-text">
              {score} / {questionsNumber}
            </p>
          </Flex>
        </Flex>
      </motion.div>
    </motion.div>
  );
};

export default GameScore;
