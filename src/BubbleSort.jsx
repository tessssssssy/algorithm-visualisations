import React from "react";
import Column from "./Column";

class BubbleSort extends React.Component {
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
  };
  componentDidMount() {
    // this.bubbleSort(this.state.columns);
  }

  bubbleSort = (arr) => {
    let swapped = true;
    let counter = 1;
    while (counter <= arr.length) {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        // swap
        setTimeout(
          function () {
            console.log(arr);
            arr[i].highlighted = true;
            arr[i + 1].highlighted = true;
            if (arr[i].number > arr[i + 1].number) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
              this.setState({ columns: arr });
            }
            arr[i].highlighted = false;
            arr[i + 1].highlighted = false;
          }.bind(this),
          100 * (i + 1) * counter
        );
      }
      console.log(counter);
      counter++;
    }
  };

  selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(
        function () {
          let lowest = i;
          for (var j = i + 1; j < arr.length; j++) {
            setTimeout(() => {
              if (arr[j].number < arr[lowest].number) {
                lowest = j;
                arr[lowest].highlighted = true;
                arr[i].highlighted = true;
              }
            }, 500 * j);
          }
          if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            this.setState({ columns: arr });
          }
          arr[lowest].highlighted = false;
          arr[i].highlighted = false;
          console.log(lowest);
        }.bind(this),
        500 * (i + 1)
      );
    }
  };

  insertionSort = (arr) => {
    let counter = 0;
    for (let i = 1; i < arr.length; i++) {
      setTimeout(
        function () {
          counter++;
          let currentVal = arr[i].number; // 4
          for (var j = i - 1; j >= 0 && arr[j].number > currentVal; j--) {
            arr[j + 1].number = arr[j].number; // 6
          }
          arr[j + 1].number = currentVal; // 4
          this.setState({ columns: arr });
        }.bind(this),
        500 * i
      );
    }
  };

  mergeSort = (arr) => {
    console.log(arr)
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, mid));
    let right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  };

  merge = (arr1, arr2) => {
    const newArr = []
    while (arr1.length > 0 && arr2.length > 0) {
        // setTimeout
        if (arr1[0].number <= arr2[0].number) {
            newArr.push(arr1[0])
            arr1.shift()
        } else {
            newArr.push(arr2[0])
            arr2.shift()
        }
    }
    // setTimeout
    if (arr1.length > 0) {
        newArr.push(...arr1)
    } else {
        newArr.push(...arr2)
    }
    this.setState({arr: newArr})
  }

  render() {
    const containerStyles = {
      display: "flex",
      width: "500px",
      height: "200px",
      alignItems: "flex-end",
      justifyContent: "space-between",
    };
    return (
      <>
        <div class="container" style={containerStyles}>
          {this.state.columns.map((column) => {
            return (
              <Column number={column.number} highlighted={column.highlighted} />
            );
          })}
        </div>
        <button onClick={() => this.bubbleSort(this.state.columns)}>
          Bubble Sort
        </button>
        <button onClick={() => this.selectionSort(this.state.columns)}>
          Selection Sort
        </button>
        <button onClick={() => this.insertionSort(this.state.columns)}>
          Insertion Sort
        </button>
        <button onClick={() => this.mergeSort(this.state.columns)}>
          Merge Sort
        </button>
      </>
    );
  }
}

export default BubbleSort;
