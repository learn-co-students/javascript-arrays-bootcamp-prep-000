var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

addElementToBeginningOfArray = function(array,element) {
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array;
}

addElementToEndOfArray = function(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array;
}

accessElementInArray = function (array,index) {
  return array[index]
}

removeElementFromBeginningOfArray = function (array) {
  return array.slice(1);
}

destructivelyRemoveElementFromEndOfArray = function (array) {
  array.pop(1)
  return array;
}

removeElementFromEndOfArray = function (array) {
  return array.slice(0, array.length - 1);
}
