var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array, element) {
  //(steve, bob)
  //(two, three)
  //(array, element)
  //(arryOfThingsToAddOneTo, elementToAddToArray)

  //here we're going to add an element to an array

  return [element, ...array]
}
// function addTwoNumbers(a,b){
//   return a+b
//   //return 99
// }
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0)
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(3)
  return array
}

function removeElementFromEndOfArray(array){
  array.pop(3)
  return array
}
