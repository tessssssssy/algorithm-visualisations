import React, { useState, useEffect } from "react";
import Column from "./Column";
import mergeSorter from './mergeSort.js';
import quickSorter from './quickSort.js';

const MergeSort = () => {
  const [iterations, setIterations ] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const arr = populateColumns();
    setColumns(arr);
    setIterations(quickSorter(arr));
    animateMergeSort();
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
    console.log(iterations);
    console.log(iterations.length);
    for (let i = 0; i < iterations.length; i++) {
        setTimeout(() => {
            // console.log(iterations[i]);
            setColumns(iterations[i])
        }, 100 * i)      
    }
  }

  const containerStyles = {
    display: "flex",
    width: "1000px",
    height: "800px",
    alignItems: "flex-end",
    justifyContent: "space-between",
  };
  return (
    <div style={containerStyles} className="container">
      {columns.map(column => {
        return (
          <Column number={column} highlighted={false} />
        );
      })}
      <button onClick={animateMergeSort}>Sort</button>
    </div>
  );
};

export default MergeSort;
