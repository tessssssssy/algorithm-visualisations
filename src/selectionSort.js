// look for min value, then put that at the front
// swap the min element with whatever at arr[0]
const selectionSorter = (array) => {
    let iterations = [[...array]];
    const selectionSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            let lowest = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[lowest]) {
                    lowest = j;
                }
            }
            if (i !== lowest) {
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
            iterations.push([...arr])
        }
        return arr;
    }
    selectionSort(array)
    return iterations;
}

export default selectionSorter;

// console.log(selectionSort([3,5,1,2,6,4]))