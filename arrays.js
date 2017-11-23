var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element){

  let newArray = [element, ...array]];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}


function addElementToEndOfArray(array, element){
  let newArrayDelete = [...araay, element];
  return newArrayDelete;
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}
