import React from 'react';
import { Link } from 'react-router-dom';
//components
import Search from "./Search";



function Nav({ search, setSearch }) {
  return (
    <nav className="nav">
        <h1 className="brand-name">Teacher Findr</h1>
          <Link className="home" to="/">Home</Link>
          <Link className="add-new" to="/form">+ Add New</Link>
            <Search search={search} setSearch={setSearch} />
      </nav>
  )
};

export default Nav