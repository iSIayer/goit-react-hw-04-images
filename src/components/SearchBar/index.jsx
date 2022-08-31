import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarStyled,
  SearchForm,
  SearchInput,
  SearchButton,
  ButtonLabel,
} from './SearchBar.styled';

export function SearchBar({ handleQuery }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Wow so easy !');
      return;
    }
    handleQuery(query);
    setQuery('');
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ButtonLabel />
        </SearchButton>

        <SearchInput
          name="query"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBarStyled>
  );
}

SearchBar.propTypes = {
  handleQuery: PropTypes.func.isRequired,
};
