import React, { useState } from 'react';
import Counter from '../Counter/Counter';

const Question = () => {
  const [showCounter, setShowCounter] = useState(true);

  if (showCounter) return <Counter setShowCounter={setShowCounter} />;

  return <div>Question</div>;
};

export default Question;
