import React from 'react'


function Search({ search, setSearch}) { //bring search down to equal the value of the input, & pass search up to App; to adjust state of Gallery
  
  function handleSearch(e) {
    setSearch(e.target.value)
  };

  //search = state of search.  By setting value to search, we make state the source of truth.  State is updated with each keystroke.
  return (
    <div className="search-bar">
      <input 
        type="text"
        id="search"
        value={search}
        placeholder="Search for instrument..."
        onChange={handleSearch}
      />
    </div>
  )
};

export default Search