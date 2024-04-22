import React from 'react';
import { Card, CardBody } from '@chakra-ui/react';

const VariantCard = ({ variant, correctAnswer, selectedVariant, selectVariant }) => {
  const getCardStatusClass = () => {
    if (!correctAnswer) return;
    return correctAnswer === variant ? 'correct' : 'incorrect';
  };

  return (
    <Card
      className={`question-variant ${selectedVariant === variant ? 'active' : ''} ${getCardStatusClass()}`}
      key={variant}
      align={'center'}
      justify={'center'}
      onClick={() => selectVariant(variant)}
    >
      <CardBody alignItems={'center'} justifySelf={'center'}>
        <p>{variant}</p>
      </CardBody>
    </Card>
  );
};

export default VariantCard;
