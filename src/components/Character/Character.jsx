import React from 'react';

import CharacterStyles from './Character.module.scss';

const Character = ({ gender, name, image, status }) => {
  return (
    <div className={CharacterStyles.Card}>
      <div className={CharacterStyles.Card__title}>
        <h2>{name}</h2>
        <h3>{gender}</h3>
        <p
          className={
            status.toLowerCase() === 'alive'
              ? CharacterStyles.Status__alive
              : CharacterStyles.Status__deadOrUnknown
          }
        >
          {status}
        </p>
      </div>

      <div className={CharacterStyles.Card__image}>
        <img src={image} alt="Character from the series Rick and Morty" />
      </div>
    </div>
  );
};

export default Character;
