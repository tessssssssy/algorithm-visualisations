import React from 'react';
import './App.css';
import DashboardClass from './DashboardClass.jsx';

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>ALGOMATIONS</h1>
        <p>Sorting Algorithms Animated</p>
      </nav>
      <DashboardClass/>
    </div>
  );
}

export default App;
