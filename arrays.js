var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
 array = [element,...array]
   return array
 };

 function destructivelyAddElementToBeginningOfArray (array) {
   array.unshift(element)
   return array
 };

function addElementToEndOfArray(array, element) {
  array=[...array, element]
  return array
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array,element) {
  array.slice(element)
  return array
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray (array, element) {
  array.slice(0, element.length -1)
  return array
}
