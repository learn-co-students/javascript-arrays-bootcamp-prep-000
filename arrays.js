var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return (array)
}
function addElementToEndOfArray(array,element){
  array.push(element)
  return (array)
}
function destructivelyAddElementToEndOfArray(array,element){
  return[...array,element]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.splice(0,1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.slice(-1);
}
function removeElementFromBeginningOfArray(array){
  array.slice(0);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}
function removeElementFromEndOfArray(array){
  array.slice(-1);
}
