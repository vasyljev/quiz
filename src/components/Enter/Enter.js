import React, { useState } from 'react';
import './Enter.css';
import { Button, Flex, Input } from '@chakra-ui/react';

const Enter = () => {
  const [name, setName] = useState('');

  const storeNameAndRedirect = () => {
    console.log('name', name);
    localStorage.setItem('name', name);
  };

  return (
    <section className="Enter">
      <Flex align="center" justify="center" direction="column" pt={200}>
        <h2 className="title">Text</h2>
        <Flex className="input-block" align="center" justify="center" direction="column">
          <p className="main-text">Please enter your name to start this magic quiz</p>
          <Input
            placeholder="Enter your name"
            size="lg"
            mb={5}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button colorScheme="green" size="md" onClick={storeNameAndRedirect}>
            Start
          </Button>
        </Flex>
      </Flex>
    </section>
  );
};

export default Enter;
