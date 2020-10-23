import React, { useState, useEffect } from "react";
import Column from "./Column";

import mergeSorter from './mergeSort.js';
import quickSorter from './quickSort.js';

import './Sorter.scss';

const Sorter = (props) => {
  const [state, setState] = useState({
    columns: [],
    iterations: []
  })

  // useEffect(() => {
  //   console.log(typeof algorithm)
  //   if (columns) {
  //     const iterations = mergeSorter([...columns])
  //     setState({iterations: iterations})
  //   }
  // }, columns)
  // useEffect(() => {
  //   console.log(props.sortMethod)
  //   // console.log(`Sorter component mounting with ${props.algorithm}`);
  //   const arr = populateColumns();
  //   setState({columns: arr})
  //   console.log(arr);
  //   getIterations([...arr]);
  //   console.log(state.iterations);
  // }, []);

  useEffect(() => {
    console.log("Sorter component mounting")
    const arr = populateColumns();
    setState({columns: arr})
    // console.log(arr);
    console.log(state.columns)
    console.log(props.sortMethod);
    setState({iterations: getIterations([...arr])});
    console.log(state.iterations);
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

  const getIterations = () => {
    let iterations;
    switch(props.sortMethod) {
      case 'merge-sort':
        iterations = mergeSorter(state.columns);
        return iterations
        break;
      case 'quick-sort':
        iterations = quickSorter(state.columns);
        return iterations;
        // setState({iterations: iterations});
        break;
      case 'bubble-sort':
        // code block
        break;
      case 'selection-sort':
        // code block
        break;
      case 'insertion-sort':
          // code block
        break;
      default:
        // code block
    }
  }

  const animateSort = () => {
    // console.log(state.iterations);
    for (let i = 0; i < state.iterations.length; i++) {
        setTimeout(() => {
            // console.log(iterations[i]);
            setState({columns: state.iterations[i]})
        }, 100 * i)      
    }
    //console.log(state.iterations);
  }

  const reset = () => {
    const arr = populateColumns();
    setState({columns: arr, iterations: getIterations([...arr])})
  }

  return (
    <div className="sorter-container">
      <div className="columns-container">
      {state.columns && state.columns.map(column => {
        return (
          <Column number={column} highlighted={false} />
        );
      })}
      </div>
      <button onClick={animateSort}>Sort</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Sorter;
