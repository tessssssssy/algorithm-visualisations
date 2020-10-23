import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sorter from './Sorter';
import Dashboard from './Dashboard.jsx';

const App = () => {
  // const [state, setState] = useState({
  //   algorithm: mergeSorter,
  //   visual: null,
  //   size: 100,
  //   speed: 100,
  // });

  // const handleChange = (evt) => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value,
  //   });
  // };

  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
