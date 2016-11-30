var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = []
function addElementToBeginningOfArray(array, item){
  var newArray = [item, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, item){
  //this is going to return a spread operator
  array.unshift(item)
  return array
}
function addElementToEndOfArray(array, item){
  var newNewArray = [...array, item]
  return newNewArray
}

function destructivelyAddElementToEndOfArray(array, item){
  array.push(item)
  return array
}

function accessElementInArray (array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (foo){
  foo.shift()
  return foo
}

function removeElementFromBeginningOfArray(foo) {
  var newFoo = foo.slice(1)
  return newFoo
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  arrayANew = array.slice(0, array.length - 1)
  return arrayANew
}
