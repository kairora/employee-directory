import React, { useEffect, useState } from 'react';
import './App.css';
import Table from "./components/table"
import Search from "./components/search"


function App() {
  const [search, setSearch] = useState('')


  return (
    <div className="App">
      <header className="App-header">
        <h1><i className="fas fa-id-card"></i> Employee Directory</h1>
        <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
      </header>
      <Search />
      <Table />
    </div>
  );
}

export default App;
