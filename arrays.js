var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, item){
  return [item, ...array]
}
function addElementToEndOfArray(array, item){
  return [...array, item]
}

function destructivelyAddElementToBeginningOfArray(array, item){
  array.unshift(item)
  // console.log(`array is ${arr}`);
  return array
}

function destructivelyAddElementToEndOfArray(array, item){
  array.push(item)
  return array
}

function accessElementInArray(array, idx){
  return array[idx]
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  var itemRemoved = array.shift()
  // var arr = array
  // var newArr = arr.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArr = array.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var newArr = array.slice(0, array.length-1)
  return newArr
}
