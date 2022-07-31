import React, { useState } from 'react';
import { SearchIcon } from '../../components/icons';
import styles from './SearchBar.module.scss';

// const [query, setQuery] = useState('');
const queryChangeHandler = () => {
  // setQuery(e.target.value);
};

const submitHandler = async () => {
  // e.preventDefault();
  //  router.push(`/search?query=${query}`);
};

function SearchBar() {
  return (
    <div className={styles.searchSection}>
      <form onSubmit={submitHandler}>
        <SearchIcon />
        <input name="query" placeholder="Search news" onChange={queryChangeHandler} />
        <button type="submit" aria-label="search">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
