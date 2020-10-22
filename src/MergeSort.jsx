import React, { useState, useEffect } from "react";
import Column from "./Column";
import mergeSorter from './mergeSort.js';

const MergeSort = () => {
  const [iterations, setIterations ] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const arr = populateColumns();
    setColumns(arr);
    setIterations(mergeSorter(arr));
    animateMergeSort();
  }, []);

  const populateColumns = () => {
    const newArr = []
    for (let i = 1; i <= 500; i++) {
      newArr.push(i)
    }
    const randomArr = []
    while (newArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * newArr.length)
      randomArr.push(newArr[randomIndex]);
      newArr.splice(randomIndex, 1);
    }
    return randomArr;
  }

  // const mergeSort = (arr) => {
  //   if (arr.length <= 1) return arr;
  //   let mid = Math.floor(arr.length / 2);
  //   let left = mergeSort(arr.slice(0, mid));
  //   let right = mergeSort(arr.slice(mid));
  //   return merge(left, right);
  // };

  // const merge = (arr1, arr2) => {
  //   const newArr = [];
  //   while (arr1.length > 0 && arr2.length > 0) {
  //     if (arr1[0] <= arr2[0]) {
  //       newArr.push(arr1[0]);
  //       arr1.shift();
  //     } else {
  //       newArr.push(arr2[0]);
  //       arr2.shift();
  //     }
  //   }
  //   if (arr1.length > 0) {
  //     newArr.push(...arr1);
  //   } else {
  //     newArr.push(...arr2);
  //   }

  //   let index = 0;
  //   for (let i = 0; i < columns.length; i++) {
  //       if (newArr.includes(columns[i])) {
  //           index = i;
  //           break;
  //       }
  //   }
  //   // maybe you could save each iteration into the state and then just run through it in a separate function
  //   let newColumns = [...columns.slice(0, index), ...newArr, ...columns.slice(index + newArr.length)];
  //   setColumns(newColumns);
  //   let newIterations = [...iterations, newColumns];
  //   setIterations(newIterations);
  //   console.log(newIterations)
  //   return newArr;
  // };

  const animateMergeSort = () => {
    console.log(iterations);
    console.log(iterations.length);
    for (let i = 0; i < iterations.length; i++) {
        setTimeout(() => {
            // console.log(iterations[i]);
            setColumns(iterations[i])
        }, 50 * i)      
    }
  }

  const containerStyles = {
    display: "flex",
    width: "1000px",
    height: "1000px",
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
