var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


addElementToBeginningOfArray = function(array, element) {
  var newArray = [element, ...array]
  return newArray;
}

destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}

// destructivelyAddElementToBeginningOfArray(chocolateBars, 'snic');
//
// console.log(chocolateBars);


addElementToEndOfArray = function(array, element) {
  var newArray = [...array, element]
  return newArray;
}

destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}

accessElementInArray = function (array, position) {
  return array[position];
}

destructivelyRemoveElementFromBeginningOfArray = function (array) {
  array.shift();
  return array;
}

removeElementFromBeginningOfArray = function(array) {
  return array.slice(1);
}

destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array;
}

removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length -1);
}
