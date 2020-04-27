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

// titleCase("I'm a little tea pot");


// REGEX POSSIBILITIES: 

// /^\w|\s

function titleCase2(str) {
    let newStrArr = str.toLowerCase().split(" ");
    for (i = 0; i < newStrArr.length; i++) {
        finalStr = (str.replace(newStrArr[i][0],newStrArr[i][0].toUpperCase()));
        console.log(finalStr);
    } 
}
titleCase2("I'm a little tea pot");

