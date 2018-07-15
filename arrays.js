var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var arraytest1 = [1];
var arraytest2 = [1];


function addElementToBeginningOfArray(array, element){
  return ["foo",...arraytest1]
}

function destructivelyAddElementToBeginningOfArray(array, element){
 arraytest2.unshift("foo");
 return arraytest2;
}