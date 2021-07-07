var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,word){
  return [word, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,word){
  array.unshift(word)
  return array;
}

function addElementToEndOfArray(array,word){
  return [...array, word]
}

function destructivelyAddElementToEndOfArray(array,word){
  array.push(word)
  return array;
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}