// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

function upperAndLowerLimits(ohStr) {

let ohRegex = /oh{3,6}\sno/i;
console.log(ohRegex.test(ohStr));

}
upperAndLowerLimits("oh no");
upperAndLowerLimits("Ohhh no");
upperAndLowerLimits("Ohhhhhhhhhh no");