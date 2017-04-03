var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray (array,element) {
  return [element,...array];

};


function destructivelyAddElementToBeginningOfArray (array,element) {
 array.unshift(element);
 return array
};
function destructivelyAddElementToEndOfArray (array,element) {
return array.push(element);
};
function addElementToEndOfArray(array,element){
  return array,...element;
};
function accessElementInArray(array,index){
return array[2];
};
function destructivelyRemoveElementFromBeginningOfArray (array){
array.shift(0);
return array
};
function removeElementFromBeginningOfArray (array){
return array.slice(1,3);
}
