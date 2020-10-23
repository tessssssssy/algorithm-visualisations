import React, { useState, useEffect } from "react";
import Column from "./Column";

import mergeSorter from "./mergeSort.js";
import quickSorter from "./quickSort.js";

import "./Sorter.scss";

class SorterClass extends React.Component {
  state = {
    columns: [],
    iterations: [],
  };
  componentDidMount() {
    console.log("Sorter component mounting");
    this.populateColumns();
  }

  populateColumns = () => {
    const newArr = [];
    for (let i = 64; i >= 1; i--) {
      newArr.push(i);
    }
    const randomArr = [];
    while (newArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * newArr.length);
      randomArr.push(newArr[randomIndex]);
      newArr.splice(randomIndex, 1);
    }
    console.log(randomArr);
    this.setState({ columns: randomArr }, () => {
        console.log(this.state.columns);
        this.setState({iterations: this.getIterations([...this.state.columns])}, () => {
            console.log(this.state.iterations);
        })
    });
    // return randomArr;
  };

  getIterations = () => {
    let iterations;
    switch (this.props.sortMethod) {
      case "merge-sort":
        iterations = mergeSorter(this.state.columns);
        return iterations;
        break;
      case "quick-sort":
        iterations = quickSorter(this.state.columns);
        return iterations;
        // setState({iterations: iterations});
        break;
      case "bubble-sort":
        // code block
        break;
      case "selection-sort":
        // code block
        break;
      case "insertion-sort":
        // code block
        break;
      default:
      // code block
    }
  };

  animateSort = () => {
    // console.log(state.iterations);
    for (let i = 0; i < this.state.iterations.length; i++) {
      setTimeout(() => {
        // console.log(iterations[i]);
        this.setState({ columns: this.state.iterations[i] });
      }, 100 * i);
    }
    //console.log(state.iterations);
  };

  reset = () => {
    console.log("Resetting")
    this.populateColumns();
    // this.setState({ columns: arr, iterations: this.getIterations([...arr]) });
  };
  render() {
    return (
      <div className="sorter-container">
        <div className="columns-container">
          {this.state.columns &&
            this.state.columns.map((column) => {
              return <Column number={column} highlighted={false} />;
            })}
        </div>
        <button onClick={this.animateSort}>Sort</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default SorterClass;
