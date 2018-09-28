var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
]

function addElementToBeginningOfArray (array, element) {
  var newArray = [...array, `${element}`];
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.unshift()
}
  
function accessElementInArray (array, index) {
  console.log(array[`${index}`])
}
  
function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift()
}

function removeElementFromBeginningofArray (array) {
  var array = array.slice(1);
  return array
}

function destructivelyRemoveElementfromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  return array.slice(0, array.length-1)
}

