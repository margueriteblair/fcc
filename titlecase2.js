// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
//try to use a regex;
function titleCase(str) {
    let newStr = str.toLowerCase().split(" ");
    for (i = 0; i < newStr.length; i++) {
        finalStr = (str.replace(newStr[i][0],newStr[i][0].toUpperCase()));
        console.log(newStr[i][0]);
        console.log(newStr[i][0].toUpperCase());
        console.log(newStr[1][0].toUpperCase());
        }
        // console.log(finalStr);
    }
  
  titleCase("I'm a little tea pot");


// REGEX POSSIBILITIES: 

// /^\w|\s