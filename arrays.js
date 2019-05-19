// chocolateBars Array

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = ["fool"];
function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  console.log(array);
}

addElementToBeginningOfArray(array, "bar");
