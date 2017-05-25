var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [element,...array]
  return `${array}`
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return `${array}`
}


function addElementToEndOfArray(array,element){
  [...array,element]
  return `${array}`
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return `${array}`
}

function accessElementInArray(array, index) {
  item = array[index]
  console.log`${item}`
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.unshift
  console.log`${array}`
}
 
function removeElementFromBeginningOfArray(array){
  array.slice(0)
  console.log`${array}`
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop
  console.log`${array}`
}

function removeElementFromEndOfArray(){
  array.slice(0,array.length -1)
  console.log`${array}`
}