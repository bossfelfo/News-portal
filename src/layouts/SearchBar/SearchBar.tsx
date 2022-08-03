import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchIcon } from '../../components/icons';
import { closeMobileNav } from '../../features/app/appSlice';
import { setSearchTerm } from '../../features/articles/articleSlice';

import styles from './SearchBar.module.scss';

const SearchBar = ({}) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim().length > 0) {
      dispatch(setSearchTerm(query.trim()));
      dispatch(closeMobileNav());
    }
  };

  return (
    <div className={styles.searchSection}>
      <form onSubmit={handleSubmitSearch}>
        <SearchIcon />
        <input
          name="searchTerm"
          placeholder="Search news"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);

            if (value.trim().length === 0) {
              dispatch(setSearchTerm(''));
            }
          }}
        />
        <button type="submit" aria-label="search">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
