
// gradually creates a larger left portion which is sorted
// take an element and then find the correct position

const insertionSorter = (array) => {
    let iterations = [[...array]]
    const insertionSort = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            let currentVal = arr[i];
            for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = currentVal;
            iterations.push([...arr]);
        }
        return arr;
    }
    insertionSort(array)
    return iterations;
}

export default insertionSorter;

// console.log(insertionSorter([3,5,1,2,6,4]))
