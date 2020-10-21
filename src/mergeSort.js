

let globalArr = [10,5,3,2,1,6,7,4];
let iterations = [globalArr];



const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // console.log([...left, ...right])
    return merge(left, right);
}

const merge = (arr1, arr2) => {
    const newArr = []
    let counter = 1;
    while (arr1.length > 0 && arr2.length > 0) {
        // setTimeout
        if (arr1[0] <= arr2[0]) {
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
    // need to iterate through the global arr (state) and find where to transplant the new sorted subarray
    // ...globalArr.slice(0, newArr.length), 
    let index = 0;
    for (let i = 0; i < globalArr.length; i++) {
        if (newArr.includes(globalArr[i])) {
            index = i;
            break;
        }
    }
    // maybe you could save each iteration into the state and then just run through it in a separate function
    globalArr = [...globalArr.slice(0, index), ...newArr, ...globalArr.slice(index + newArr.length)];
    iterations.push(globalArr);
    // console.log(globalArr);
    // console.log(newArr);
    return newArr;
}


// mergeSort([10,5,3,2,1,6,7,4]);


// for (let i = 0; i < iterations.length; i++) {
//     // set the state to arr[i] each time
//     setTimeout(() => {
//         console.log(iterations[i]);
//     }, 500 * i)
// }


class MergeSortAnimation {
    constructor(columns) {
        this.columns = columns;
        this.iterations = [columns]; 
    }

    mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        // console.log([...left, ...right])
        return merge(left, right);
    }

    merge = (arr1, arr2) => {
        const newArr = []
        while (arr1.length > 0 && arr2.length > 0) {
            // setTimeout
            if (arr1[0] <= arr2[0]) {
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
        // need to iterate through the global arr (state) and find where to transplant the new sorted subarray
        // ...globalArr.slice(0, newArr.length), 
        let index = 0;
        for (let i = 0; i < this.columns.length; i++) {
            if (newArr.includes(this.columns[i])) {
                index = i;
                break;
            }
        }
        // maybe you could save each iteration into the state and then just run through it in a separate function
        this.columns = [...this.columns.slice(0, index), ...newArr, ...this.columns.slice(index + newArr.length)];
        console.log(this.columns)
        this.iterations.push(this.columns);
        // console.log(globalArr);
        // console.log(newArr);
        return newArr;
    }
    
}

// const merger = new MergeSortAnimation([10,5,3,2,1,6,7,4]);

// console.log(merger.columns);

// merger.mergeSort(merger.columns);
// merger.iterations.push(merger.columns)
// console.log(merger.iterations);

const mergeSorter = (array) => {
    let iterations = [array]
    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        // console.log([...left, ...right])
        return merge(left, right);
    }
    
    const merge = (arr1, arr2) => {
        const newArr = []
        let counter = 1;
        while (arr1.length > 0 && arr2.length > 0) {
            // setTimeout
            if (arr1[0] <= arr2[0]) {
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
        // need to iterate through the global arr (state) and find where to transplant the new sorted subarray
        // ...globalArr.slice(0, newArr.length), 
        let index = 0;
        for (let i = 0; i < array.length; i++) {
            if (newArr.includes(globalArr[i])) {
                index = i;
                break;
            }
        }
        // maybe you could save each iteration into the state and then just run through it in a separate function
        array = [...array.slice(0, index), ...newArr, ...array.slice(index + newArr.length)];
        iterations.push(array);
        // console.log(globalArr);
        // console.log(newArr);
        return newArr;
    }
    mergeSort(array);
    return iterations;
}

export default mergeSorter;