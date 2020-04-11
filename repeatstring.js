//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatAString(str, num) {
    let newStr = "";
    for (i = num; i > 0; i--) {
        newStr = newStr + str;
    }
    console.log(newStr);
}

repeatAString("CareerDevs", 2);

function repeatAString2(str, num) {
    let  newStr = "";
    for (i = 0; i < num; i++) {
        newStr = newStr + str;
    }
    console.log(newStr);
}

repeatAString2("13", 13);