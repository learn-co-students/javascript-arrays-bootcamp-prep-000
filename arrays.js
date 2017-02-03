var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];


var addElementToBeginningOfArray = (array, element) => {
  //array.unshift(element)
  return [element, ...array];
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = (array, element) => {
  return [...array, element];
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}

var accessElementInArray = (array, index) => {
  return array[index]
}

var removeElementFromBeginningOfArray = array => {
  var cdr = array.slice(1)
  return cdr
}

var removeElementFromEndOfArray = array => {
  var front = array.slice(0,-1)
  return front
}
