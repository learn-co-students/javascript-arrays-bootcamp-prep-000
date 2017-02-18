var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

addElementToBeginningOfArray(chocolateBars, 'mars');

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
return array
}

destructivelyAddElementToBeginningOfArray(chocolateBars, 'mars');

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

addElementToEndOfArray(chocolateBars, 'mars');

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars, 'mars');

function accessElementInArray(array, index) {
  return array[index]
}

accessElementInArray(chocolateBars, 0);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(array) {
   var array = array.slice(1)
   return array
}
removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
}

destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(array) {
  var array = array.slice(0, array.length -1)
  return array
}
removeElementFromEndOfArray(chocolateBars);
