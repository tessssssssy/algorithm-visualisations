import React from "react";
import Column from "./Column";

class Merge extends React.Component {
  state = {
    columns: [10,5,3,2,1,6,7,4,8,9],
    iterations: [[10,5,3,2,1,6,7,4,8,9]]
  };

  componentDidMount() {
      this.mergeSort(this.state.columns)
  }

  mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, mid));
    let right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  };

  merge = (arr1, arr2) => {
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
    for (let i = 0; i < this.state.columns.length; i++) {
      if (newArr.includes(this.state.columns[i])) {
        index = i;
        console.log(index)
        break;
      }
    }
    // maybe you could save each iteration into the state and then just run through it in a separate function
    console.log(newArr)
    let newColumns = [
      ...this.state.columns.slice(0, index),
      ...newArr,
      ...this.state.columns.slice(index + newArr.length),
    ];
    console.log(newColumns)
    this.setState({columns: newColumns})
    let newIterations = [...this.state.iterations, this.state.columns];
        this.setState({iterations: newIterations});
        console.log(this.state.iterations)
    return newArr;
  };

  animateMergeSort = () => {
    // console.log(this.state.iterations);
    // for (let i = 0; i < iterations.length; i++) {
    //   setTimeout(() => {
    //     // console.log(iterations[i]);
    //     setColumns(iterations[i]);
    //   }, 500 * i);
    // }
  };

  render() {
    const containerStyles = {
      display: "flex",
      width: "500px",
      height: "200px",
      alignItems: "flex-end",
      justifyContent: "space-between",
    };
    return (
      <div style={containerStyles} className="container">
        {this.state.columns.map((column) => {
          return (
            <Column number={column} highlighted={false} />
          );
        })}
        <button onClick={this.animateMergeSort}>Sort</button>
      </div>
    );
  }
}

export default Merge;
