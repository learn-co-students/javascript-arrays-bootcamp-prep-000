var chocolateBars = ('snikers', 'hundred grand', 'kitkat','skittles' );

function addElementToBeginningOfArray (array,element) {
    return [element,...array]
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push (element)
  return (array)
  array.shift (element)
  array.push (element)
  return (array)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift (element)
  return (array)
  array.shift (element)
  array.push (element)
  return (array)
}

function addElementToEndOfArray (array,element) {
    return [...array, element]
}


function accessElementInArray(array, index) {
  return array [2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
return array

}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
  array.unshift(0)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, 2)
}



