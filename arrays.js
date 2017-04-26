var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function addElementToBeginningOfArray(array, element) {
  newArray= [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
return array
}

function addElementToEndOfArray(array, element) {
newArray = [...array, element];
return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  newArray = array.shift(element)
return array
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop(2)
return array
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length - 1)
  return newArray
}
