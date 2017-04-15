var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray (array,element){
    var newAddElementToBeginningOfArray = [...element, addElementToBeginningOfArray]
    return newAddElementToBeginningOfArray;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  return destructivelyAddElementToBeginningOfArray.push();
}

function addElementToEndOfArray (array,element){
  var newAddElementToEndOfArray = [addElementToEndOfArray, ...element];
  return newAddElementToEndOfArray;
}

function destructivelyAddElementToEndOfArray () {
  return addElementToEndOfArray.unshift();

}


function accessElementInArray (array, index){
  return element[index];
}
