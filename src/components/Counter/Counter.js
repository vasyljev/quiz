import './Counter.scss';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { COUNTER_ANIMATION_CONFIG } from '../../constants/routing-animation-config';

const Counter = ({ setShowCounter }) => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (count === 0) {
      setShowCounter(false);
    } else {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [count, setShowCounter]);

  return (
    <motion.div variants={COUNTER_ANIMATION_CONFIG} initial="initial" animate="final" className="Counter">
      <p className="count-number">{count}</p>
    </motion.div>
  );
};

export default Counter;
