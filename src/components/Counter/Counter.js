import './Counter.scss';
import React, { useEffect, useState } from 'react';

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
    <section className="Counter">
      <p className="count-number">{count}</p>
    </section>
  );
};

export default Counter;
