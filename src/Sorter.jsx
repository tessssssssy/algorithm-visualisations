import React, { useState, useEffect } from "react";
import Column from "./Column";
import mergeSorter from './mergeSort.js';
import quickSorter from './quickSort.js';
import './Sorter.scss';

const Sorter = () => {
  // const [iterations, setIterations ] = useState([]);
  // const [columns, setColumns] = useState([]);
  const [state, setState] = useState({
    sortingMethod: mergeSorter,
    columns: [],
    iterations: []
  })
  useEffect(() => {
    console.log("useEffect");
    const arr = populateColumns();
    setState({columns: arr, iterations: state.sortingMethod([...arr])})
    // setState(state.sortingMethod([...arr]));
    // animateMergeSort();
  }, []);

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
    return randomArr;
    // return newArr
  }

  const animateMergeSort = () => {
    // console.log(iterations);
    // console.log(iterations.length);
    for (let i = 0; i < state.iterations.length; i++) {
        setTimeout(() => {
            // console.log(iterations[i]);
            setState({columns: state.iterations[i]})
        }, 100 * i)      
    }
  }

  return (
    <div className="sorter-container">
      <div className="columns-container">
      {state.columns.map(column => {
        return (
          <Column number={column} highlighted={false} />
        );
      })}
      </div>
      <button onClick={animateMergeSort}>Sort</button>
    </div>
  );
};

export default Sorter;
