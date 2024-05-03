import React, { useEffect, useState } from 'react';
import Counter from '../Counter';
import './Question.scss';
import { Flex, Progress } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { randomSort } from '../../utils/rundom-sort';
import VariantCard from '../VariantCard';
import StorageService from '../../services/StorageService';
import { motion } from 'framer-motion';
import { QUESTION_ANIMATION_CONFIG } from '../../constants/routing-animation-config';

const Question = () => {
  let maxPageCount = 5;
  const navigate = useNavigate();
  const { number: questionNumber } = useParams();
  const [showCounter, setShowCounter] = useState(true);
  const [time, setTime] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [sortedVariants, setSortedVariants] = useState([]);
  const [timerStep, setTimerStep] = useState(0.1);

  const initData = () => {
    const questions = StorageService.questions;
    maxPageCount = questions?.length;
    const question = questions[questionNumber - 1];
    setCurrentQuestion(question);
    const { correctAnswer: answer, incorrectAnswers } = question;
    setSortedVariants(randomSort([...incorrectAnswers, answer]));
  };

  const resetState = () => {
    setTime(0);
    setSelectedVariant(null);
    setCorrectAnswer(null);
    setShowCounter(true);
    setCurrentQuestion(null);
    setSortedVariants([]);
    setTimerStep(0.1);
  };

  const showCorrectAnswer = () => {
    setTimeout(() => {
      setCorrectAnswer(currentQuestion?.correctAnswer);
      setNumberOfCurrentAnswers();
      redirectToNextQuestion();
    }, 2000);
  };

  const setNumberOfCurrentAnswers = () => {
    const currentAnswersNumber = StorageService.correctAnswersNumber;
    StorageService.correctAnswersNumber =
      currentQuestion.correctAnswer === selectedVariant ? currentAnswersNumber + 1 : currentAnswersNumber;
  };

  const redirectToNextQuestion = () => {
    setTimeout(() => {
      if (questionNumber < maxPageCount) {
        navigate(`/question/${+questionNumber + 1}`);
        resetState();
        return;
      }
      navigate('/score');
    }, 4000);
  };

  const buildVariantsView = () => {
    const selectVariant = (variant) => {
      if (selectedVariant) return;
      setSelectedVariant(variant);
      setTimerStep(10);
    };
    return sortedVariants.map((v) => (
      <VariantCard
        key={v}
        variant={v}
        selectedVariant={selectedVariant}
        correctAnswer={correctAnswer}
        selectVariant={selectVariant}
      ></VariantCard>
    ));
  };

  useEffect(() => initData(), [questionNumber]);

  useEffect(() => {
    if (!showCounter) {
      const interval = setInterval(() => {
        if (time >= 100) {
          showCorrectAnswer();
          clearInterval(interval);
          return;
        }
        setTime((prevTime) => {
          return prevTime + timerStep;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [showCounter, time, timerStep]);

  if (showCounter) return <Counter setShowCounter={setShowCounter} />;

  const variants = buildVariantsView();

  return (
    <motion.div
      variants={QUESTION_ANIMATION_CONFIG}
      initial="initial"
      animate="final"
      className="Question w-full h-full"
    >
      <Progress value={time} className="timer" mb="24px" />
      <Flex
        className={`questions-container ${time >= 100 && !selectedVariant ? 'disabled' : ''} ${correctAnswer ? 'transparent' : ''}`}
        justify="space-between"
        alignItems="center"
        p={6}
        mb="50px"
      >
        {variants}
      </Flex>
      <p className="question-text">{currentQuestion?.question?.text}</p>
    </motion.div>
  );
};

export default Question;
