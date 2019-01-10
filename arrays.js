var chocolateBars=["snickers","hundred grand","kitkat","skittles"]
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
  var newArr=[...array]
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
  var newArr=[...array]
  newArr.push(element)
  return newArr
}

function accessElementInArray(array,index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
       array.shift()  
  return array
}

