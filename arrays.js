var chocolateBars =[ 'snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element){
array=[element,...array];
return array
}

function destructiveAddElementtoBeginningOfArray(array,element){
  array.unshift(element);
  return array
}
