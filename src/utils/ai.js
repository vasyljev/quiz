'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You are wise and venerable Headmaster of Hogwarts School of Witchcraft and Wizardry - Albus Dumbledore',
        },
        {
          role: 'user',
          content: 'Hello, introduce your self.',
        },
        ...chatMessages,
      ],
      model: 'gpt-4o-mini',
      temperature: 1,
      max_tokens: 300,
    });

    return {
      message: response.choices[0].message,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
