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
import bubbleSorter from "./bubbleSort";
import selectionSorter from "./selectionSort";
import insertionSorter from "./insertionSort";

class DashboardClass extends React.Component {
  state = {
    sortMethod: "merge-sort",
    visual: null,
    size: 64,
    speed: 100,
    columns: [],
    iterations: [],
  };

  componentDidMount() {
    console.log("Sorter component mounting");
    this.populateColumns();
  }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.sortMethod !== this.props.sortMethod) {
  //       this.populateColumns();
  //     }
  //   }

  populateColumns = () => {
    const newArr = [];
    for (let i = this.state.size; i >= 1; i--) {
      newArr.push(i);
    }
    // Random array
    const randomArr = [];
    while (newArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * newArr.length);
      randomArr.push(newArr[randomIndex]);
      newArr.splice(randomIndex, 1);
    }

    this.setState({ columns: randomArr }, () => {
      console.log(this.state.columns);
      this.setState({ iterations: this.getIterations() }, () => {
        console.log(this.state.iterations);
      });
    });
    // return randomArr;
  };

  getIterations = () => {
    let iterations;
    switch (this.state.sortMethod) {
      case "merge-sort":
        iterations = mergeSorter([...this.state.columns]);
        return iterations;
        break;
      case "quick-sort":
        iterations = quickSorter([...this.state.columns]);
        console.log(iterations);
        return iterations;
        // setState({iterations: iterations});
        break;
      case "bubble-sort":
        iterations = bubbleSorter([...this.state.columns]);
        return iterations;
        break;
      case "selection-sort":
        iterations = selectionSorter([...this.state.columns]);
        return iterations;
        break;
      case "insertion-sort":
        iterations = insertionSorter([...this.state.columns]);
        return iterations;
        break;
      default:
      // code block
    }
  };

  animateSort = () => {
    // console.log(state.iterations);
    let speed = 1000 / this.state.speed;
    for (let i = 0; i < this.state.iterations.length; i++) {
      setTimeout(() => {
        // console.log(iterations[i]);
        this.setState({ columns: this.state.iterations[i] });
      }, speed * i);
    }
    //console.log(state.iterations);
  };

  reset = () => {
    console.log("Resetting");
    this.populateColumns();
    // this.setState({ columns: arr, iterations: this.getIterations([...arr]) });
  };
  handleChange = (evt) => {
    const value = evt.target.value;
    console.log(value);
    this.setState(
      {
        ...this.state,
        [evt.target.name]: value,
      },
      () => {
        if (evt.target.name === "sortMethod") {
          this.populateColumns();
        }
      }
    );
  };

  handleSizeChange = (evt, val) => {
    console.log(evt.target.id);
    console.log(val);
    this.setState({ size: val }, () => {
      this.populateColumns();
    });
  };

  handleSpeedChange = (evt, val) => {
      this.setState({speed: val})
  }
  render() {
    return (
      <>
        <div className="dashboard">
          <div className="dashboard-column">
            <div className="select-container">
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
                id="speed"
                valueLabelDisplay="auto"
                max={100}
                min={1}
                defaultValue={this.state.speed}
                onChange={this.handleSpeedChange}
                aria-labelledby="continuous-slider"
              />
            </div>
            <div className="slider-container">
              <InputLabel className="slider-label">Size</InputLabel>
              <Slider
                valueLabelDisplay="auto"
                max={500}
                min={4}
                id="size"
                defaultValue={this.state.size}
                onChange={this.handleSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
          <Button
            className="dashboard-button"
            onClick={this.animateSort}
            variant="outlined"
          >
            Sort
          </Button>
          <Button
            className="dashboard-button"
            onClick={this.reset}
            variant="outlined"
          >
            Reset
          </Button>
        </div>
        <SorterClass
          sortMethod={this.state.sortMethod}
          columns={this.state.columns}
          iterations={this.state.iterations}
        />
      </>
    );
  }
}
export default DashboardClass;
