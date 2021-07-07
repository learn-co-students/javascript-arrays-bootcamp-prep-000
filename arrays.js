var chocolateBars = [
  "snickers",
  "hundred",
  "grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, arrayElement){
  //add element to the beginning of the array
  //return a new array and not modify the original
  var newArray = [arrayElement,...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, arrayElement){
  //add element to the beginning of the array
  //alter the original array that's passed in
  array.unshift(arrayElement)
  return array
}

function addElementToEndOfArray(array, arrayElement){
  //add element to the end of the array
  //should not alter the original array
  return [...array, arrayElement]
}

function destructivelyAddElementToEndOfArray(array, arrayElement){
  //add element to the end of the array
  //should alter the original array
  array.push(arrayElement)
  return array
}

function accessElementInArray(array, arrayIndex){
  return array[arrayIndex]
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

  return array.slice(0, array.length-1)
}
