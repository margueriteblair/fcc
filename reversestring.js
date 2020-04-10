function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = str[i];
        console.log(reverseStr);
    }
  }
  
  reverseString("Careerdevs");


function reverseString2(str) {
    reversedString = str.split("").reverse();
    console.log(reversedString);
}
reverseString2("Hello");
reverseString2("Margie");
  