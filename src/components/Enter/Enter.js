'use client';

import React from 'react';
import './Enter.scss';
import { Button, Flex, Input } from '@chakra-ui/react';
import StorageService from '../../services/StorageService';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import questionsService from '../../services/QuestionsService';
import { useForm } from 'react-hook-form';

export const useQuestionsQuery = () =>
  useQuery({
    queryKey: ['questions'],
    queryFn: questionsService.getQuestions,
  });

const Enter = () => {
  const router = useRouter();
  const { data: questions } = useQuestionsQuery();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => storeNameAndRedirect(data.name);

  const storeNameAndRedirect = (name) => {
    localStorage.clear();
    StorageService.userName = name;
    questions.length = 5;
    StorageService.questions = questions;
    router.push('question/1');
  };

  const redirectToChat = () => {
    router.push('chat');
  };

  return (
    <section className="Enter">
      <Button colorScheme="green" size="lg" className="chat-btn" onClick={redirectToChat}>
        Dumbledore Chat
      </Button>
      <Flex align="center" justify="center" direction="column" pt={200}>
        <Flex className="input-block" align="center" justify="center" direction="column">
          <p className="main-text">
            Enter your name, O seeker of lore! To unlock the secrets behind the door. Scribe your identity with an
            enchanted quill, and prepare to climb the wizard's hill.
          </p>
          <form className="w-full form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter your name"
              _placeholder={{ opacity: 1, color: 'white' }}
              size="lg"
              mb={5}
              {...register('name')}
            />
            <Button colorScheme="green" size="lg" type="submit">
              Start
            </Button>
          </form>
        </Flex>
      </Flex>
    </section>
  );
};

export default Enter;
