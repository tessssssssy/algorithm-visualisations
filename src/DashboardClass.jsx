import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  Slider,
  Button,
} from "@material-ui/core";
import "./Dashboard.scss";
import SorterClass from "./SorterClass.jsx";

import mergeSorter from "./mergeSort.js";
import quickSorter from "./quickSort.js";

class DashboardClass extends React.Component {
  state = {
    sortMethod: "merge-sort",
    visual: null,
    size: 100,
    speed: 100,
  };

  componentDidMount() {
    // console.log(`Dashboard component mounting with ${this.state.sortMethod}`);
    // const arr = this.populateColumns();
    // this.setState({ columns: arr });
  }

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    }, () => {
        console.log(this.state);
    });
  };

  render() {
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
                value={this.state.sortMethod}
                onChange={this.handleChange}
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
                defaultValue={this.state.speed}
                vonChange={this.handleChange}
                aria-labelledby="continuous-slider"
              />
            </div>
            <div className="slider-container">
              <InputLabel className="slider-label">Size</InputLabel>
              <Slider
                valueLabelDisplay="auto"
                max="1000"
                defaultValue={this.state.size}
                vonChange={this.handleChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
          <Button variant="outlined">Sort</Button>
        </div>
        <SorterClass
          sortMethod={this.state.sortMethod}
          algorithm={this.state.algorithm}
        />
      </>
    );
  }
}
export default DashboardClass;
