// compare each item to the one in front
// swap

const bubbleSorter = (array) => {
    let iterations = [[...array]];
    const bubbleSort = (arr) => {
        let swapped = true;
        while (swapped === true) {
            swapped = false
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // swap
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                    iterations.push([...arr])
                }
            }
        }
        return arr;
    }
    bubbleSort(array);
    return iterations;
}

export default bubbleSorter;
// console.log(bubbleSorter([3,5,1,2,6,4]))