function confirmEnding(str, target) {
    if (str.substr(-target.length) === target) {
        console.log(true);
    } else console.log(false);
  }
  
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");