var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];
choclateBars.push("turtles");


function addElementToBeginningOfArray (array,element){
  array = [1]
  array.unshift("foo");
  return array
  }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
array=[1]
  array.push("foo")
  return array
}
function accessElementInArray(array, index){
  array[1,2,3]
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array[1,2,3]
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array[1,2,3]
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array[1,2,3]
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array[1,2,3]
  array =array.slice(0,-1)
  return array
}
