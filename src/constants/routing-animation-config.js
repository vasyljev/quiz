export const QUESTION_ANIMATION_CONFIG = {
  initial: {
    y: '100vh',
  },
  final: {
    y: '0vh',
    transition: {
      type: 'spring',
      mass: 0.4,
    },
  },
};

export const COUNTER_ANIMATION_CONFIG = {
  initial: {
    scale: 0,
  },
  final: {
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const SCORE_ANIMATION_CONFIG = {
  initial: {
    y: '100vh',
  },
  final: {
    y: '0vh',
    transition: {
      duration: 0.6,
    },
  },
};

export const SCORE_TEXT_ANIMATION_CONFIG = {
  initial: {
    opacity: 0,
    y: '50px',
  },
  final: {
    opacity: 1,
    y: '0px',
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};
