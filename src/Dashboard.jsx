import React, { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel, Slider, Button } from "@material-ui/core";
import "./Dashboard.scss";
import Sorter from './Sorter.jsx';

import mergeSorter from './mergeSort.js';
import quickSorter from './quickSort.js';

const Dashboard = () => {
  const [state, setState] = useState({
    sortMethod: 'merge-sort',
    visual: null,
    size: 100,
    speed: 100,
  });

  useEffect(() => {
    console.log(`Dashboard component mounting with ${state.sortMethod}`);
    const arr = populateColumns();
    setState({columns: arr})
  }, []);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const populateColumns = () => {
    const newArr = []
    for (let i = 64; i >= 1; i--) {
      newArr.push(i)
    }
    const randomArr = []
    while (newArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * newArr.length)
      randomArr.push(newArr[randomIndex]);
      newArr.splice(randomIndex, 1);
    }
    setState({columns: randomArr})
    return randomArr;
    // return newArr
  }


  return (
    <>
    <div class="dashboard">
      <div class="dashboard-column">
        <div class="select-container">
          <InputLabel className="select-label" id="algorithm">
            Algorithm
          </InputLabel>
          <Select
            className="select"
            labelId="sortMethod"
            id="sortMethod"
            value={state.sortMethod}
            onChange={handleChange}
            label="Sorting Algorithm"
            name="sortMethod"
          >
            <MenuItem value={"bubble-sort"}>Bubble Sort</MenuItem>
            <MenuItem value={"selection-sort"}>Selection Sort</MenuItem>
            <MenuItem value={"insertion-sort"}>Insertion Sort</MenuItem>
            <MenuItem value={"merge-sort"}>Merge Sort</MenuItem>
            <MenuItem value={"quick-sort"}>Quick Sort</MenuItem>
          </Select>
        </div>
        <div className="select-container">
          {/* <InputLabel className="select-label" id="visualisation">
            Visualisation
          </InputLabel>
          <Select
            labelId="visualisation"
            id="visualisation"
            value={state.visual}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select> */}
        </div>
      </div>
      <div className="dashboard-column">
        <div className="slider-container">
          <InputLabel className="slider-label">Speed</InputLabel>
          <Slider
            valueLabelDisplay="auto"
            max="1000"
            defaultValue={state.speed}
            vonChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </div>
        <div className="slider-container">
          <InputLabel className="slider-label">Size</InputLabel>
          <Slider
            valueLabelDisplay="auto"
            max="1000"
            defaultValue={state.size}
            vonChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>
      <Button variant="outlined">Sort</Button>
    </div>
    <Sorter sortMethod={state.sortMethod} algorithm={state.algorithm} mergeSorter={mergeSorter} columns={state.columns}/>
    </>
  );
};

export default Dashboard;
