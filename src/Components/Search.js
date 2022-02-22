import React from 'react'

function Search({ search, setSearch }) { //pass search up to App; to adjust state of Gallery
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input 
        type="text"
        id="search"
        value={search}
        placeholder="Search for instrument..."
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search