// chocolateBars Array

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

console.log(addElementToBeginningOfArray(chocolateBars, "foo"));

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "yoyo"));
