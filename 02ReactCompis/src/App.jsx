import { useState } from 'react';
import './App.css';

function App() {
  const [compi, setCompi] = useState('Alex 💩');
  const compis = ['Alex 💩', 'Bea 🥇', 'Carlos 👳🏽‍♀️', 'Hugo 🎮', 'Miguel 👨🏻‍🎓', 'Palo 🐥', 'Patri 🎀', 'Trini 🧟‍♀️'];

  const changeCompiName = (name) => {
    setCompi(name);
  };

  return (
    <>
      <h2>Compi Name: {compi}</h2>
      <ul>
        {compis.map((compi) => (
          <li>
            <button onClick={() => changeCompiName(compi)}>{compi}</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
