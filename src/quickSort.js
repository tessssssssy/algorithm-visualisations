// select a pivot point 
// move all the items to either right or left
// repeat recursively for everything left and right of pivot
const quickSorter = (array) => {
    let iterations = [array];

    const quickSort = (arr, left = 0, right = arr.length - 1) => {
        //console.log(arr);
        if (left < right) {
            let pivotIndex = pivot(arr, left, right);
            quickSort(arr, left, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, right);
        }
        return arr;
    }

    const pivot = (arr, start = 0, end = arr.length - 1) => {
        const swap = (arr, idx1, idx2) => {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };
      
        // We are assuming the pivot is always the first element
        let pivot = arr[start];
        let swapIdx = start;
      
        for (let i = start + 1; i <= end; i++) {
          if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            // console.log(arr);
            
          }
          iterations.push([...arr]);
        }
        // Swap the pivot from the start the swapPoint
        swap(arr, start, swapIdx);
        
        return swapIdx;
      }
      let result = quickSort(array)
      iterations.push(result);
      return iterations;
}

export default quickSorter;
// console.log(quickSorter([4,8,2,1,5,7,6,3]))