// Basic Algorithm Scripting: Truncate a StringPassed
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateStr(str, num) {
    let newStr = "";
    if (num < str.length) {
        newStr = str.slice(0, num);
        console.log(newStr + "...");
    } else console.log(str);
}
truncateStr("I love CareerDevs and Coding", 6);
truncateStr("Hello World", 4);
