var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array,element) {
var newarray = [element,...array]
return newarray
}

function addElementToBeginningOfArray(array,element) {
  array.unshift()
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return array.unshift(element)
}
  
function accessElementInArray(array,index) {
  return console.log(index)
}