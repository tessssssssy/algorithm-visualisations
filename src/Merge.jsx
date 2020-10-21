import React from "react";
import Column from "./Column";

class Merge extends React.Component {
  state = {
    columns: [
      {
        number: 6,
        highlighted: false,
      },
      {
        number: 4,
        highlighted: false,
      },
      {
        number: 1,
        highlighted: false,
      },
      {
        number: 8,
        highlighted: false,
      },
      {
        number: 9,
        highlighted: false,
      },
      {
        number: 2,
        highlighted: false,
      },
      {
        number: 3,
        highlighted: false,
      },
      {
        number: 5,
        highlighted: false,
      },
      {
        number: 10,
        highlighted: false,
      },
      {
        number: 7,
        highlighted: false,
      },
    ],
    iterations: [],
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
      if (arr1[0].number <= arr2[0].number) {
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
      if (newArr.includes(this.state.columns[i].number)) {
        index = i;
        break;
      }
    }
    // maybe you could save each iteration into the state and then just run through it in a separate function
    let newColumns = [
      ...this.state.columns.slice(0, index),
      ...newArr,
      ...this.state.columns.slice(index + newArr.length),
    ];
    console.log(newColumns)
    this.setState({columns: newColumns}, () => {
        let newIterations = [...this.state.iterations, newColumns];
        this.setState({iterations: newIterations});
        // console.log(this.state.iterations);
        // console.log(this.state.columns);
    })
    return newArr;
  };

  animateMergeSort = () => {
    console.log(this.state.iterations);
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
            <Column number={column.number} highlighted={column.highlighted} />
          );
        })}
        <button onClick={this.animateMergeSort}>Sort</button>
      </div>
    );
  }
}

export default Merge;
