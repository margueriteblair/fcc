// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let copyArray2 = arr2.slice(); // this makes a copy of arr2
    // console.log(copyArray2)
    for (let i = 0; i < arr1.length; i++) {
        arr2 = copyArray2.splice(n, 0, arr1[i]);
        n++
    }
    console.log(copyArray2);
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);