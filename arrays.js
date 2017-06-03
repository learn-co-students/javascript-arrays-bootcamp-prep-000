var chocolateBars = ["Snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,a){
  var newArray = Array()
  newArray=array
  newArray.unshift(a)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,a){
  array.unshift(a)
  return array
}

function addElementToEndOfArray(array,a){
  var newArray = Array()
  newArray=array
  newArray.push(a)
  return newArray
}

function destructivelyAddElementToEndOfArray(array,a){
  array.push(a)
  return array
}

function accessElementInArray(array,a){
  return array[a]
}

function destructivelyRemoveElementFromBeginningOfArray(array,a){
  array.shift(a)
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = Array()
  newArray=array
  newArray=newArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArray = Array()
  newArray=array
  newArray.pop()
  return newArray
}
