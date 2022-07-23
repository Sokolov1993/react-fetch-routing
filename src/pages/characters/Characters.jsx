import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import { Link } from 'react-router-dom';
import Character from '../../components/Character/Character';
import ChractersStyles from './Characters.module.scss';
import Header from '../../components/Header/Header';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = () => {
    fetch(`${API_URL}/?page=${currentPage.toString()}`)
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  };

  useEffect(fetchData, [currentPage]);

  const toTheNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const toThePrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  return (
    <div>
      <Header renderFilteredData={setCharacters} />
      <main className={ChractersStyles.Main}>
        <section className={ChractersStyles.Characters}>
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
          <div className={ChractersStyles.Buttons}>
            <button
              disabled={currentPage === 1 && true}
              onClick={toThePrevPage}
            >
              PREV
            </button>
            <button onClick={toTheNextPage}>NEXT</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Characters;
