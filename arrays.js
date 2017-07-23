function chocolateBars(){
  var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToBeginningOfArray(myArray,a){
  var modArray = [ a, ...myArray ]
  return modArray
}

function destructivelyAddElementToBeginningOfArray(inputArray, element){
inputArray.unshift(element)
return inputArray
}

function addElementToEndOfArray (inputArray, element){
var array = [ ...inputArray, element]
    return array
}

function destructivelyAddElementToEndOfArray (inputArray, element){
  inputArray.push(element)
  return inputArray
}

function accessElementInArray(inputArray, index){
  var local = inputArray[index]
  return local
}

function destructivelyRemoveElementFromBeginningOfArray(inputArray){
  inputArray.shift()
  return inputArray
}

function removeElementFromBeginningOfArray(local){
  var inputArray = [...local]
  inputArray.shift()
  return inputArray
}

function destructivelyRemoveElementFromEndOfArray(inputArray){
  inputArray.pop()
  return inputArray
}

function removeElementFromEndOfArray(local){
  var inputArray =[...local]
  inputArray.pop()
return inputArray
}
