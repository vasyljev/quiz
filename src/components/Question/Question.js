import React, { useEffect, useState } from 'react';
import Counter from '../Counter';
import './Question.css';
import { Flex, Progress } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import VariantCard from '../VariantCard';

const Question = () => {
  const navigate = useNavigate();
  const { number } = useParams();
  const [showCounter, setShowCounter] = useState(true);
  const [time, setTime] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const selectVariant = (variant) => {
    if (selectedVariant) return;
    setSelectedVariant(variant);
    console.log('variant', variant);
  };

  // TODO: Move to useEffect
  const showCorrectAnswer = () => {
    setTimeout(() => {
      setCorrectAnswer('Variant 1');
      console.log('setCorrectAnswer');
      redirectToNextQuestion();
    }, 3000);
  };

  const redirectToNextQuestion = () => {
    console.log('redirectToNextQuestion', number);
    setTimeout(() => {
      navigate(`/question/${+number + 1}`);
      setTime(0);
      setSelectedVariant(null);
      setCorrectAnswer(null);
      setShowCounter(true);
    }, 3000);
  };

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
  }, [showCounter, time, showCorrectAnswer]);

  if (showCounter) return <Counter setShowCounter={setShowCounter} />;

  const variants = ['Variant 1', 'Variant 2', 'Variant 3', 'Variant 4'].map((v) => (
    <VariantCard
      key={v}
      variant={v}
      selectedVariant={selectedVariant}
      correctAnswer={correctAnswer}
      selectVariant={selectVariant}
    ></VariantCard>
  ));

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
      <p className="question-text">Question Text</p>
    </section>
  );
};

export default Question;
