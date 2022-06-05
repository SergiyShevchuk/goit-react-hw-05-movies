import { useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export default function SearchInput({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const buttonStyle = {
    marginLeft: 20,
  };

  const formStyle = {
    marginTop: 30,
  };

  function handleSearch(e) {
    const { value } = e.currentTarget;
    setSearchQuery(value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchQuery === '') {
      return toast.error(`Are you kidding?`);
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        name="movieName"
        type="text"
        value={searchQuery}
        placeholder="Search movies"
        onChange={handleSearch}
      />
      <button type="sumbit" style={buttonStyle}>
        Search
      </button>
    </form>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
