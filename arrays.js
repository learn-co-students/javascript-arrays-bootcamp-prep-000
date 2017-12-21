var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (ray, e) => [e, ...ray]

var destructivelyAddElementToBeginningOfArray = (ray, e) => {
  ray.unshift(e);
  return ray;
}

var addElementToEndOfArray = (ray, e) => [...ray, e]

var destructivelyAddElementToEndOfArray = (ray, e) => {
  ray.push(e);
  return ray;
}

var accessElementInArray = (array, index) => array[index]

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

var destructivelyRemoveElementFromEndOfArray = (ray) => {
  ray.pop()
  return ray;
}

var removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length - 1);
}

var removeElementFromBeginningOfArray = (ray) => ray.slice(1)
