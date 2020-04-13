// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booleanVal(bool) {
    if (typeof bool === "boolean") {
        console.log("true")
    } else console.log("false");
  }
booleanVal(false);
