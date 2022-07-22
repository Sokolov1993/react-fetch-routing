import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import { Link } from 'react-router-dom';
import Character from '../../components/Character/Character';
import ChractersStyles from './Characters.module.scss';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let isDisabled = false;

  const fetchData = () => {
    fetch(`${API_URL}/?page=${currentPage.toString()}`)
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  };

  useEffect(fetchData, []);
  useEffect(fetchData, [currentPage]);

  const toTheNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const toThePrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  if (currentPage === 1) {
    isDisabled = true;
  }

  return (
    <div className={ChractersStyles.Characters}>
      {characters.map((character) => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          <Character
            gender={character.gender}
            name={character.name}
            image={character.image}
            status={character.status}
          />
        </Link>
      ))}

      <button disabled={isDisabled} onClick={toThePrevPage}>
        PREV
      </button>
      <button onClick={toTheNextPage}>NEXT</button>
    </div>
  );
};

export default Characters;
