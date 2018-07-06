var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  var new_array = [element,array[0]];
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element);
    return array;
}

function addElementToEndOfArray(array,element){
    var new_array = [element,array[3]];
    return new_array;
}
