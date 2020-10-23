import React, { useState } from "react";
import { Select, MenuItem, InputLabel, Slider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SliderContainer from "./SliderContainer";
import "./Dashboard.scss";
import Sorter from './Sorter.jsx';

import mergeSorter from './mergeSort.js';
import quickSorter from './quickSort.js';

const Dashboard = () => {
  const [state, setState] = useState({
    algorithm: mergeSorter,
    visual: null,
    size: 100,
    speed: 100,
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

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
            labelId="algorithm"
            id="algorithm"
            value={state.algorithm}
            onChange={handleChange}
            label="Sorting Algorithm"
          >
            <MenuItem value={"bubbleSort"}>Bubble Sort</MenuItem>
            <MenuItem value={"selectionSort"}>Selection Sort</MenuItem>
            <MenuItem value={"insertionSort"}>Insertion Sort</MenuItem>
            <MenuItem value={mergeSorter}>Merge Sort</MenuItem>
            <MenuItem value={quickSorter}>Quick Sort</MenuItem>
          </Select>
        </div>
        <div className="select-container">
          <InputLabel className="select-label" id="visualisation">
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
          </Select>
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
    <Sorter/>
    </>
  );
};

export default Dashboard;
