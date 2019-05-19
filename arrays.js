// chocolateBars Array

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}

console.log(addElementToBeginningOfArray(chocolateBars, "foo"));

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element;
  return array;
}

// console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "yoyo"));
