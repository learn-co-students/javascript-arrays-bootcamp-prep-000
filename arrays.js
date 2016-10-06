var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray =(array, element) {
  var arr =[element, ...array];
  return arr;
}

function descructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
 return array;
 }

  
