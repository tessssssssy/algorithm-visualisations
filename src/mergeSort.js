
const mergeSorter = (array) => {
    let iterations = [array]
    const mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
    
    const merge = (arr1, arr2) => {
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
        let index = 0;
        for (let i = 0; i < array.length; i++) {
            if (newArr.includes(array[i])) {
                index = i;
                break;
            }
        }
        array = [...array.slice(0, index), ...newArr, ...array.slice(index + newArr.length)];

        iterations.push(array);
        return newArr;
    }
    mergeSort(array);
    return iterations;
}


export default mergeSorter;