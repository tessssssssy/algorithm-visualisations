

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

// const mergeSort = (array, m)  => {
//     if (m < array.length) {
//         var n = array.length, a1 = new Array(n);
//           for (var i = 0; i < n; i += m << 1) {
//             var left = i,
//                 right = Math.min(i + m, n),
//                 end = Math.min(i + (m << 1), n);
//                 merge(array, a1, left, right, end);

//           }
//         for (let i = 0; i < n; i++) {
//             array[i] = a1[i]
//         }
//     }
// }

// const merge = (a0, a1, left, right, end) => {
//     for (var i0 = left, i1 = right; left < end; ++left) {
//       if (i0 < right && (i1 >= end || a0[i0].index <= a0[i1].index)) {
//         a1[left] = a0[i0++];
//       } else {
//         a1[left] = a0[i1++];
//       }
//     }
//   }


mergeSort([10,5,3,2,1,6,7,4]);


for (let i = 0; i < iterations.length; i++) {
    // set the state to arr[i] each time
    setTimeout(() => {
        console.log(iterations[i]);
    }, 500 * i)
}

// save the original each iteration

// function mergesort(array) {
//     var n = array.length, a0 = array, a1 = new Array(n);
//     for (var m = 1; m < n; m <<= 1) {
//       for (var i = 0; i < n; i += m << 1) {
//         var left = i,
//             right = Math.min(i + m, n),
//             end = Math.min(i + (m << 1), n);
//         merge(a0, a1, left, right, end);
//       }
//       i = a0, a0 = a1, a1 = i;
//     }
//     if (array === a1) {
//       for (var i = 0; i < n; ++i) {
//         array[i] = a0[i];
//       }
//     }
//   }
  
//   function merge(a0, a1, left, right, end) {
//     for (var i0 = left, i1 = right; left < end; ++left) {
//       if (i0 < right && (i1 >= end || a0[i0] <= a0[i1])) {
//         a1[left] = a0[i0++];
//       } else {
//         a1[left] = a0[i1++];
//       }
//     }
//   }
