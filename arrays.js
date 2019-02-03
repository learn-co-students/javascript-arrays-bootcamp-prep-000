
var chocolateBars = ['snikers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (array,elementAdd){
    array.unshift(elementAdd)
  return array
  }

function destructivelyAddElementToBeginningOfArray (array,elementAdd){
  var oldArray = array
  newArray = [elementAdd, ...oldArray]
  return newArray
}

function addElementToEndOfArray (array,elementAdd){
  array = array.push(elementAdd)
  return array
}

function destructivelyAddElementToEndOfArray (array,elemntAdd){
  var oldArray = array
  newArray = [oldArray...,elementAdd]
  return newArray
}
