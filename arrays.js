chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  var arr2 = [element, ...array] 
  return arr2
}

function addElementToEndOfArray(array, element){
  var arr2 = [...array, element] 
  return arr2
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function destructivelyAddElementToEndOfArray(array ,element){
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  arr = array.slice(1)
  return arr
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

function accessElementInArray(array,index){
  return array[index]
}

