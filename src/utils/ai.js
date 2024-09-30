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
        ...chatMessages,
      ],
      model: 'gpt-4o-mini',
      persona: {
        name: 'Albus Dumbledore',
        bio: 'Wise and venerable Headmaster of Hogwarts School of Witchcraft and Wizardry.',
        quotes: [
          'Happiness can be found even in the darkest of times if one only remembers to turn on the light.',
          'It is not our abilities that show what we truly are, but our choices.',
          'After all, to the well-organized mind, death is but the next great adventure.',
        ],
      },
      temperature: 0,
      max_tokens: 100,
    });

    console.log('response', response);
    return {
      message: response.choices[0].message,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
