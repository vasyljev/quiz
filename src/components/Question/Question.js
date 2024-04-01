import React, { useEffect, useState } from 'react';
import Counter from '../Counter';
import './Question.css';
import { Card, CardBody, Flex, Progress } from '@chakra-ui/react';

const Question = () => {
  const [showCounter, setShowCounter] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!showCounter) {
      const interval = setInterval(() => {
        if (time === 100) {
          clearInterval(interval);
          return;
        }
        setTime((prevTime) => {
          return prevTime + 0.1;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [showCounter, time]);

  if (showCounter) return <Counter setShowCounter={setShowCounter} />;

  return (
    <section className="Question">
      <Progress value={time} />
      <Flex className="questions-container" justify="space-between" alignItems="center" p={6}>
        <Card className="question-variant">
          <CardBody>
            <p>Question 1</p>
          </CardBody>
        </Card>
        <Card className="question-variant" variant="filled">
          <CardBody>
            <p>Question 2</p>
          </CardBody>
        </Card>
        <Card className="question-variant" variant="filled">
          <CardBody>
            <p>Question 3</p>
          </CardBody>
        </Card>
        <Card className="question-variant" variant="filled">
          <CardBody>
            <p>Question 4</p>
          </CardBody>
        </Card>
      </Flex>
    </section>
  );
};

export default Question;
