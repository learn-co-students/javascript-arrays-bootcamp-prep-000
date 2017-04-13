var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  return array = [element, ...array];
};

//not working
function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;

};

function addElementToEndOfArray(array, element){
  return array = [...array, element];
};

///not working
function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array;
};

//working
function accessElementInArray(array, index){
 return array[index];
}

//not working
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
};

//working
function removeElementFromBeginningOfArray(array){
  return array = array.slice(1);
};

//not working
function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
};

//working
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
};
