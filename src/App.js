import React, { useState } from 'react';
import './App.css';
import Table from "./components/table"
import Search from "./components/search"


function App() {
  const [search, setSearch] = useState(null)

    const searchToState = (event)=> {
        let searchTerm = event.target.value;
        console.log(search)
        setSearch(searchTerm)
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1><i className="fas fa-id-card"></i> Employee Directory</h1>
        <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
      </header>
      <Search pillow="Search Employees" onSearchChanged = {searchToState} />
      <Table currentSearchValue={search} />
    </div>
  );
}

export default App;
