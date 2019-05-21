var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const result = [`${element}`, ...array];
  return result;
} 

function destructivelyAddElementToBeginningOfArray(array, element) {
  var answer = array.unshift(element);
  return answer;
}