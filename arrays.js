var chocolateBars = [ 'snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element){
array=[element,...array];
return array
}

function destructivelyAddElementToBeginningOfArray(array,element){
return array.unshift(element);
}

function addElementToEndOfArray(array,element){
  array=[...array,element];
  return array
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
