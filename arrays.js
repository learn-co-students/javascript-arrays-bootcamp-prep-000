var chocolateBars = [
                     'snickers', 
                     'hundred grand', 
                     'kitkat', 
                     'skittles']

function addElementToBeginningOfArray(array, newVal){
   var newArray = [newVal, ...array];
   return newArray;
}
function destructivelyAddElementToBeginningOfArray(array101, newVal){
   array101.unshift(newVal);
   return array101; 
}
function addElementToEndOfArray(array, newVal){
   var newArray = [...array, newVal];
   return newArray;
}
function destructivelyAddElementToEndOfArray(array404, newVal4){
  array404.push(newVal4);
  return array404; 
}
function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(-2);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
  //destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
   array.pop()
   return array;
}
function removeElementFromEndOfArray(array101){
  
  var newArray3 = array101.slice(0, array101.length - 1);
  return newArray3;
}
function  accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}