// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let arr1 = arr[0].toLowerCase(); 
    let arr2 = arr[1].toLowerCase(); 
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) < 0) {
            console.log(false);
        } else console.log(true);
    }
  }
  
//   mutation(["hello", "hey"]);
//   mutation(["hello", "Hello"])
//   mutation(["hello", "neo"]);

  function mutation2(arr) {
      let arrTest = arr[1].toLowerCase();
      let arrTarget = arr[0].toLowerCase();
      for (let i = 0; i < arrTest.length; i++) {
          if (arrTarget.indexOf(arrTest[i]) < 0) {
              console.log(false);
          } else console.log(true);
      }
  }

  mutation2("hello", "hey");
  mutation2("hello", "neo")
  