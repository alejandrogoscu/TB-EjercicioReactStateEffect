import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const apiCharacter = await axios.get('https://swapi.py4e.com/api/people/');
      setCharacters(apiCharacter.data.results);
      // console.log(apiCharacter.data.results);
    } catch (error) {
      console.error('Error al obtener personaje', error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <h2>Personajes Star Wars</h2>

      {characters.map((character) => (
        <p key={character.name}>{character.name}</p>
      ))}
    </>
  );
}

export default App;
