var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(array, element){
  var newArray = array
  var Array2 = [element, ...newArray]
  return Array2;
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
  var newArray = array
  array.unshift(element)
  return newArray
}

var addElementToEndOfArray = function(array, element){
  var newArray = array
  var Array2 = [...newArray, element]
  return Array2
}

var destructivelyAddElementToEndOfArray = function(array, element){
  var newArray = array
  array.push(element)
  return newArray
}

var accessElementInArray = function(array, index){
  var newArray = array
  return newArray[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  var newArray = array
  newArray.shift()
  return newArray
}

var removeElementFromBeginningOfArray = function(array){
  var newArray = array
  var Array2 = newArray.slice(1)
  return Array2
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  var newArray = array
  newArray.pop()
  return newArray
}

var removeElementFromEndOfArray = function(array){
  var newArray = array
  var Array2 = newArray.slice(0, newArray.length -1)
  return Array2
}
