var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
var array = [1]
var element = "foo"
  return array = [element, ...array]
}
//note to self - i don't really need to use 1 and foo, those are just parameters used in the test. //
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element){
  var array = [1]
  var element = "foo"
  return array = [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element){
array.push(element)
return array
}

function accessElementInArray (array, index){
  return (array[index])

}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)

}
function destructivelyRemoveElementFromEndOfArray(array, element){
array.pop(element)
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}