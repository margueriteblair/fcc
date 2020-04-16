// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

function possibleUsernames(username) {
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
console.log(userCheck.test(username));

}
possibleUsernames("MARGIE");
possibleUsernames("5432gjsd");

function possibleUsernames2(username) {
    let userCheck = /^[a-z]([0-9][0-9]*)$/i
    console.log(userCheck.test(userCheck))
}

possibleUsernames2("CAREERDEVS")
possibleUsernames2("99Falf");

