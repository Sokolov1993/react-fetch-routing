import React from 'react';
import Header from '../../components/Header/Header';

import InfoStyles from './Info.module.scss';

const Info = () => {
  return (
    <div>
      <Header isSearchDisabled={true} />
      <div className={InfoStyles.Info}>
        <div className={InfoStyles.Title}>
          <h1>ABOUT</h1>
          An animated series on adult-swim about the infinite adventures of
          Rick, a genius alcoholic and careless scientist, with his grandson
          Morty, a 14 year-old anxious boy who is not so smart. Together, they
          explore the infinite universes; causing mayhem and running into
          trouble.
        </div>
      </div>
    </div>
  );
};

export default Info;
