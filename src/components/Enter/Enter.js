import React, { useState } from 'react';
import './Enter.css';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import questionsService from '../../services/QuestionsService';

const Enter = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const storeNameAndRedirect = () => {
    console.log('name', name);
    localStorage.setItem('name', name);
    questionsService.getQuestions().then((questions) => {
      localStorage.setItem('questions', JSON.stringify(questions));
      navigate('question/1');
    });
  };

  return (
    <section className="Enter">
      <Flex align="center" justify="center" direction="column" pt={200}>
        <Flex className="input-block" align="center" justify="center" direction="column">
          <p className="main-text">
            Enter your name, O seeker of lore! To unlock the secrets behind the door. Scribe your identity with an
            enchanted quill, and prepare to climb the wizard's hill.
          </p>
          <Input
            placeholder="Enter your name"
            size="lg"
            mb={5}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button colorScheme="green" size="lg" onClick={storeNameAndRedirect}>
            Start
          </Button>
        </Flex>
      </Flex>
    </section>
  );
};

export default Enter;
