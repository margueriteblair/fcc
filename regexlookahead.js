// positive lookaheads are used to find patterns further along in a string!

// Use lookaheads in the pwRegex to match passwords that are greater than
//5 characters long, do not begin with numbers, and have two consecutive digits.

function passwordCheck(password) {
    let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2,})/; 
    console.log(pwRegex.test(password));
}

passwordCheck("Babyshark99");
passwordCheck("131313")


