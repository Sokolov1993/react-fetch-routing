import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';

import CharacterInfoStyles from './CharacterInfo.module.scss';

const CharacterInfo = () => {
  const { characterId } = useParams();
  const [characterInfoPages, setCharacterInfoPages] = useState([]);

  const fetchCharacterInfo = () => {
    fetch(`${API_URL}/${characterId}`)
      .then((response) => response.json())
      .then((CharacterInfo) => {
        setCharacterInfoPages([CharacterInfo]);
      });
  };

  useEffect(fetchCharacterInfo, []);

  return (
    <div className={CharacterInfoStyles.CharacterInfo}>
      {characterInfoPages.map((characterCharacteristics) => {
        return (
          <div
            className={CharacterInfoStyles.Card}
            key={characterCharacteristics.id}
          >
            <img
              src={characterCharacteristics.image}
              alt="Character from the series Rick and Morty"
            />

            <h1>{characterCharacteristics.name}</h1>
            <p>
              <strong> Species:</strong> {characterCharacteristics.species}
            </p>
            <p>
              <strong>From:</strong> {characterCharacteristics.origin.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterInfo;
