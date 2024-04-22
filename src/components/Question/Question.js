import React, { useEffect, useState } from 'react';
import Counter from '../Counter';
import './Question.css';
import { Flex, Progress } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { randomSort } from '../../utils/rundom-sort';
import VariantCard from '../VariantCard';

const Question = () => {
  const maxPageCount = 2;
  const navigate = useNavigate();
  const { number: questionNumber } = useParams();
  const [showCounter, setShowCounter] = useState(true);
  const [time, setTime] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [sortedVariants, setSortedVariants] = useState([]);

  const initData = () => {
    const questions = JSON.parse(localStorage.getItem('questions'));
    const question = questions[questionNumber - 1];
    setCurrentQuestion(question);
    console.log('questions', questions, question, questionNumber);
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
  };

  const showCorrectAnswer = () => {
    setTimeout(() => {
      setCorrectAnswer(currentQuestion?.correctAnswer);
      console.log('setCorrectAnswer');
      setNumberOfCurrentAnswers();
      redirectToNextQuestion();
    }, 3000);
  };

  const setNumberOfCurrentAnswers = () => {
    const currentAnswersNumber = JSON.parse(localStorage.getItem('answers')) || 0;
    console.log('setNumberOfCurrentAnswers', currentAnswersNumber, currentQuestion.correctAnswer, selectedVariant);
    localStorage.setItem(
      'answers',
      `${currentQuestion.correctAnswer === selectedVariant ? currentAnswersNumber + 1 : currentAnswersNumber}`,
    );
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
          return prevTime + 0.1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [showCounter, time]);

  if (showCounter) return <Counter setShowCounter={setShowCounter} />;

  const variants = buildVariantsView();

  return (
    <section className="Question">
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
    </section>
  );
};

export default Question;
