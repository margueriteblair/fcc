function longestWordInAString(str) {
    let longestStr = 0;
    let strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestStr) {
            longestStr = strSplit[i].length;
        }
    }
    console.log(longestStr);
}
longestWordInAString("We work very hard at CareerDevs");
