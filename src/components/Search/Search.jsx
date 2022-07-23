import React, { useState, useEffect } from 'react';
import { API_URL } from '../../constants';

import SearchStyles from './Search.module.scss';

const Search = ({ renderFilteredData, isSearchDisabled }) => {
  const [inputValue, setInputValue] = useState('');
  const [renderHint, setRenderHint] = useState('');

  const fetchSearchedData = () => {
    fetch(`${API_URL}/?name=${inputValue}`)
      .then((response) => response.json())
      .then((searchData) => setRenderHint(searchData))
      .catch((err) => {
        console.error(`Hi! We have some troubles ${console.log(err)}`);
        setRenderHint('Сharacter not found!');
      });

    // console.log(renderHint);
  };
  //   console.log(renderHint);

  useEffect(fetchSearchedData, [inputValue]);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!renderHint['error']) {
      setInputValue('');
      renderFilteredData(renderHint.results);
    }
  };

  const onClickHandler = (event) => {
    !renderHint['error'] && setInputValue(event.target.textContent);
  };

  return (
    <form className={SearchStyles.Search} onSubmit={onSubmitHandler}>
      <input
        type="search"
        onChange={onChangeHandler}
        value={inputValue}
        placeholder="Search by name"
        disabled={isSearchDisabled && true}
      ></input>
      {inputValue && (
        <span className={SearchStyles.Hint} onClick={onClickHandler}>
          {renderHint['error']
            ? 'Сharacter not found!'
            : renderHint.results[0].name}
        </span>
      )}
      <button disabled={(renderHint['error'] || isSearchDisabled) && true}>
        Search
      </button>
    </form>
  );
};

export default Search;
