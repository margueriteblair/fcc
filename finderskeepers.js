function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(arr[i])) {
      console.log(num);
    }
  } console.log(undefined);
}
