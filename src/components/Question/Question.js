import React, { useEffect, useState } from 'react';
import Counter from '../Counter';
import './Question.css';
import { Flex, Progress } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import VariantCard from '../VariantCard';

const Question = () => {
  const maxPageCount = 2;
  const navigate = useNavigate();
  const { number } = useParams();
  const [showCounter, setShowCounter] = useState(true);
  const [time, setTime] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [variants, setVariants] = useState([]);

  const resetState = () => {
    setTime(0);
    setSelectedVariant(null);
    setCorrectAnswer(null);
    setShowCounter(true);
    setCurrentQuestion(null);
    setVariants([]);
  };

  const showCorrectAnswer = () => {
    setTimeout(() => {
      setCorrectAnswer(currentQuestion.correctAnswer);
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
    console.log('redirectToNextQuestion', number);
    setTimeout(() => {
      if (number < maxPageCount) {
        navigate(`/question/${+number + 1}`);
        resetState();
        return;
      }
      navigate('/score');
    }, 4000);
  };

  useEffect(() => {
    const selectVariant = (variant) => {
      if (selectedVariant) return;
      setSelectedVariant(variant);
      console.log('variant', variant);
    };

    const questions = JSON.parse(localStorage.getItem('questions'));
    const question = questions[number - 1];
    setCurrentQuestion(question);
    console.log('questions', questions, question, number);
    const { correctAnswer: answer, incorrectAnswers } = question;
    setVariants(
      [...incorrectAnswers, answer].map((v) => (
        <VariantCard
          key={v}
          variant={v}
          selectedVariant={selectedVariant}
          correctAnswer={correctAnswer}
          selectVariant={selectVariant}
        ></VariantCard>
      )),
    );
  }, [selectedVariant, correctAnswer]);

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
  }, [showCounter, time, setVariants]);

  if (showCounter) return <Counter setShowCounter={setShowCounter} />;

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
