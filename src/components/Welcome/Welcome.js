import React from 'react';
import './Welcome.scss';

const Welcome = () => {
  return (
    <section className="Welcome w-full h-full bg-white flex flex-col justify-between items-center">
      <div className="flex flex-col items-center">
        <h3 className="title">Hogwarts Quiz!</h3>
        <h1 className="main-text">
          Welcome, brave soul, to the hallowed halls of Hogwarts! Here, magic breathes and dreams take flight. Embark on
          a quest where your wit shines bright. Answer the call, let your journey unfold, In the world of Hogwarts,
          where tales are told.
        </h1>
      </div>
      <footer>
        <p>Vasyliev Mykyta© 2024</p>
      </footer>
    </section>
  );
};

export default Welcome;
