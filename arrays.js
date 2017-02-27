var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(arr, elem){
  var newArr = arr;
  newArr.unshift(elem);
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  //var newArr = arr;
  arr.unshift(elem);
  return arr
}

function addElementToEndOfArray(array, element) {
  var newArr = array;
  newArr.push(element)
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromBeginningOfArray(array){
  var newArr = array;
  newArr.shift()
  return newArr
}

function removeElementFromEndOfArray(array){
  var newArr = array;
  newArr.pop()
  return newArr
}
