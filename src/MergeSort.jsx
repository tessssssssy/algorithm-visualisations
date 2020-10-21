import React, { useState, useEffect } from "react";
import Column from "./Column";
import mergeSorter from './mergeSort.js';

const MergeSort = () => {
  const [iterations, setIterations ] = useState(mergeSorter([11,5,3,2,1,6,7,4]));
  const [columns, setColumns] = useState([11,5,3,2,1,6,7,4]);

  useEffect(() => {
    console.log("useEffect");
    mergeSort(columns);
    console.log(columns);
    console.log(iterations);
    // setColumns(iterations[0]);
    animateMergeSort();
  }, []);

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };

  const merge = (arr1, arr2) => {
    const newArr = [];
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] <= arr2[0]) {
        newArr.push(arr1[0]);
        arr1.shift();
      } else {
        newArr.push(arr2[0]);
        arr2.shift();
      }
    }
    if (arr1.length > 0) {
      newArr.push(...arr1);
    } else {
      newArr.push(...arr2);
    }

    let index = 0;
    for (let i = 0; i < columns.length; i++) {
        if (newArr.includes(columns[i])) {
            index = i;
            break;
        }
    }
    // maybe you could save each iteration into the state and then just run through it in a separate function
    let newColumns = [...columns.slice(0, index), ...newArr, ...columns.slice(index + newArr.length)];
    setColumns(newColumns);
    let newIterations = [...iterations, newColumns];
    setIterations(newIterations);
    console.log(newIterations)
    return newArr;
  };

  const animateMergeSort = () => {
    console.log(iterations);
    for (let i = 0; i < iterations.length; i++) {
        setTimeout(() => {
            // console.log(iterations[i]);
            setColumns(iterations[i])
        }, 500 * i + 1)      
    }
  }

  const containerStyles = {
    display: "flex",
    width: "500px",
    height: "200px",
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
