// find the middle and then eliminate half each time

// only works with sorted data

const arr = [1,3,4,6,8,9,11,23,45]

// return the index of the number being searched for
const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let middle = Math.floor((right + left) / 2);
        if (arr[middle] > num) {
            right = middle - 1;
        } else if (arr[middle] < num) {
            left = middle + 1;
        } else {
            return middle
        }
    }
    return - 1
}

console.log(binarySearch(arr, 22));

