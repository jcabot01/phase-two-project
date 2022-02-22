import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home"
import Search from "./Components/Search";


function App() {
  const [search, setSearch] = useState("")

  //useEffect to perform GET
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Search search={search} setSearch={setSearch} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
