var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  const arr = array
  const newArr = [element, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var arr = array
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(array, element){
  const arr = array
  const newArr = [...arr, element]
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element){
  var arr = array
  arr.push(element)
  return arr
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var arr = array
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(array){
  var arr = array
  return arr = arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  var arr = array
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(array){
  const arr = array
  const newArr = arr.slice(0, arr.length-1)
  return newArr
}
