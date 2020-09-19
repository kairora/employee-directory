import React from 'react';
import './App.css';
import Table from "./components/table"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><i class="fas fa-id-card"></i> Employee Directory</h1>
        <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
      </header>
      <Table />
    </div>
  );
}

export default App;
