var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  const newAddArray = [element, ...array];
  return newAddArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
//[...cities, "Philadelphia"]
  const newAddArrayMe = [...array, element];
  return newAddArrayMe;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  //var element = " this is what hiding in the element of the array.";
  //return console.log(array[index] + element);
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){

  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1);
}
