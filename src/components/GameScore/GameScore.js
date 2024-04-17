import React, { useEffect, useState } from 'react';
import './GameScore.css';

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
    <div>
      {name} - {score} / {questionsNumber}
    </div>
  );
};

export default GameScore;
