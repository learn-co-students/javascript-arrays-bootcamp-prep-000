var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addEleentToBeginningOfArray(array, element) {
  return[element,... array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
  
}

function addElementToEndOfArray(array, element){
  return[...array, element];
}

function destructlyAddElementToEndofArray(array, element){
  array.shift(element);
  return array;
}