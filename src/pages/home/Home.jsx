import React from 'react';
import { Link } from 'react-router-dom';
import StylesHomePage from './Home.module.scss';

const Home = () => {
  return (
    <div className={StylesHomePage.Home}>
      <Link to={'/characters'}>
        <button>To characters </button>
      </Link>
    </div>
  );
};

export default Home;
