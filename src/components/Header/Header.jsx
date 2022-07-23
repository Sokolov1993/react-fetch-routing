import React from 'react';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

import HeaderStyles from './Header.module.scss';

const Header = ({ renderFilteredData, isSearchDisabled }) => {
  return (
    <header className={HeaderStyles.Header}>
      <div className={HeaderStyles.Wrapper}>
        <Search
          renderFilteredData={renderFilteredData}
          isSearchDisabled={isSearchDisabled}
        />
        <ul className={HeaderStyles.NavBar}>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/characters">CHARACTERS</Link>
          </li>

          <li>
            <Link to="/info">INFO </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
