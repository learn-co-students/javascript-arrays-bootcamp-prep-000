var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(myArray,element){
  return myArray.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(myArray,element){
  var newArray=[]
  newArray=myArray
  return newArray.unshift(element)
}
function addElementToEndOfArray(array,element){
  return array.push(element)
}

function destructivelyAddElementToEndOfArray(array,element){
  var newArray=[]
  newArray=array
  return newArray.push(element)
}
function accessElementInArray(array,number){
  return array[number]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  var newArray=[]
  newArray=array

  return newArray.pop()
}
