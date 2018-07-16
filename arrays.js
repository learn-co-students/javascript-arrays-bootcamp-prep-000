var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var arraytest1 = [1];
var arraytest2 = [1];
var arraytest3 = [1];


function addElementToBeginningOfArray(array, element){
  return ["foo",...arraytest1];
}

function destructivelyAddElementToBeginningOfArray(arraytest2, unshift){
 arraytest2.unshift("foo");
 return arraytest2;
}

function addElementToEndOfArray(array, element){
  return [...arraytest1, "foo"];
}

function destructivelyAddElementToEndOfArray(arraytest3, push){
  arraytest3.push("foo");
  return arraytest3;
}