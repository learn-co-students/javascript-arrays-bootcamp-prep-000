var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var element= 'twix';
function addElementToBeginningOfArray(chocolateBars, element){
chocolateBars.unshift(element);
return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
array.push(element);
return array
}
function destructivelyAddElementToEndOfArray(array, element){
array.push(element)
return array
}

function accessElementInArray(array, index){
return array[index];
}

function destructivelyRemoveElementFromBeginningofArray(array, element){
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}
function removeElementFromEndOfArray(array) {
  array.pop()
  return array

}
