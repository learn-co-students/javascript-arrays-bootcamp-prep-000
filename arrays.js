var chocolateBars=['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element){
  var lala=[element,...array]
  return lala
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  var lala=[...array,element]
  return lala
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  var rat=array[index]
  return rat
}

function removeElementFromBeginningOfArray(array){
  var miau=array.slice(1)
  return miau
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var mia=array.slice(0, array.length - 1)
  return mia
}
