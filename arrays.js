var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(const array, element){
  return const newArray = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array=[element, ...array];
}

function addElementToEndOfArray(const array, element){
return const  newArray=[...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
return  array =[...array, element];
}

function accessElementInArray(array,index){
return  array[index];
}

function removeElementFromBeginningOfArray(array){
  return array.slice(0,1);
}
