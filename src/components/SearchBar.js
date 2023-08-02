import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {   
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value); 
  }; 

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="Search by description..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
