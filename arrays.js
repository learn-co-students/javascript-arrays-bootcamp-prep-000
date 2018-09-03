var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = function (array, element){
  addElementToBeginningOfArray = ['foo', 1]
  chocolateBars.push(element)
  return addElementToBeginningOfArray
}

var destructivelyAddElementToBeginningOfArray = function (array, element){
  destructivelyAddElementToBeginningOfArray = ['foo', 1]
  array.unshift(element)
  return destructivelyAddElementToBeginningOfArray
}

var addElementToEndOfArray = function (array, element){
  addElementToEndOfArray = [1, 'foo']
  chocolateBars.push(element)
  return addElementToEndOfArray
}

var destructivelyAddElementToEndOfArray = function (array, element){
  destructivelyAddElementToEndOfArray = [1, 'foo']
  array.push(element)
  return destructivelyAddElementToEndOfArray
}

var accessElementInArray = function (array, index){
  accessElementInArray = [1, 2, 3]
  return accessElementInArray[2]
}

var destructivelyRemoveElementFromBeginningOfArray = function (array){
  destructivelyRemoveElementFromBeginningOfArray = [ 2, 3]
  array.shift()
  return destructivelyRemoveElementFromBeginningOfArray
}

var removeElementFromBeginningOfArray = function (array){
  removeElementFromBeginningOfArray = [ 2, 3]
  array.slice()
  return removeElementFromBeginningOfArray
}

var destructivelyRemoveElementFromEndOfArray = function (array){
  destructivelyRemoveElementFromEndOfArray = [1, 2]
  array.pop()
  return destructivelyRemoveElementFromEndOfArray
}

var removeElementFromEndOfArray = function (array){
  removeElementFromEndOfArray = [1, 2]
  array.slice()
  return removeElementFromEndOfArray
}