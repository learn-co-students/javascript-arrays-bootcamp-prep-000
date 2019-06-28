var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
var element = 'kale'

function addElementToBeginningOfArray (chocolateBars, element) {
newArr = [element,...chocolateBars];
return newArr;
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, element) {
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars,element) {
  newArr =  [...chocolateBars,element]
  return newArr
}

function destructivelyAddElementToEndOfArray (chocolateBars, element) {
  chocolateBars.push(element)
  return chocolateBars
}

function accessElementInArray(array, index){
 return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars, element) {
  chocolateBars.shift(element)
  return chocolateBars
}

function removeElementFromBeginningOfArray (chocolateBars, element) {
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars, element) {
  chocolateBars.pop(element)
  return chocolateBars
}

function removeElementFromEndOfArray (chocolateBars, element) {
  chocolateBars = chocolateBars.slice(0,
  chocolateBars.length-1)
  return chocolateBars
}