chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(someArray, element){
  
  return [element, ...someArray]
}

function destructivelyAddElementToBeginningOfArray(someArray, element){
  
  someArray.unshift(element);
  return someArray
}

function addElementToEndOfArray(array, element){
  
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element){
  
  array.push(element)
  return array
}

function accessElementInArray(array, i){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  //slice goes up the second index, but NOT INCLUDING IT!!!
  return array.slice(0, array.length - 1)
}