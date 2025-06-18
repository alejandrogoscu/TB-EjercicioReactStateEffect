import { useState } from 'react';

const Counter = ({ initialValue, incrementValue }) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + incrementValue);
  };

  const decrement = () => {
    setCounter(counter - incrementValue);
  };

  return (
    <>
      <button onClick={increment}>Sumar</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>Restar</button>
    </>
  );
};

export default Counter;
