// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
// //try to use a regex;
function titleCase(str) {
    let newStr = str.toLowerCase().split(" ");
    for (i = 0; i < newStr.length; i++) {
     newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
     }
        console.log(newStr.toString());
    }
  
  titleCase("I'm a little tea pot");

// REGEX POSSIBILITIES: 

// /^\w|\s

function titleCase2(str) {
    let newStr = str.toLowerCase().split(" ");
    for (i = 0; i < newStr.length; i++) {
        if (Number.isInteger(i) === true) {
        finalStr = (str.replace(newStr[i][0],newStr[i][0].toUpperCase()));
    } console.log(finalStr);
}
}

titleCase2("i'm a little tea pot");

function titleCase3(str) {
    let arrOfWords = str.toLowerCase().split(" ");
  
    for (let i = 0; i < arrOfWords.length; i++) {
      arrOfWords[i] = arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1);
    }
  
    console.log(arrOfWords);
  }
  
//   titleCase3("I'm a little tea pot");
