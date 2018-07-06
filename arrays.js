var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  var new_array = [element,array[0]];
  return new_array;
}

function addElementToEndOfArray(array,element){
    var new_array = [element,array[0]];
    new_array.push(array);
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}


function destructivelyAddElementToEndOfArray(array){
  array.push(element);
}

function accessElementInArray(array,index){
    return array[2];
}


function removeElementFromEndOfArray(array,element){
 var new_array =  [element,array[3]];
  return new_array.pop(3);
}
