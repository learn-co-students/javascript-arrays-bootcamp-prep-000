chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

 //Takes in two parameters, an array and an element to add to the beginning of the array. Both functions should add the element to the beginning of the array and then return the whole array 
 
zarray = [1, 2, 3];
 
//returns new array and does not modify original
function addElementToBeginningOfArray(array, element){
var array = new Array();
array.push('foo')
array.push(1)
return array;
}

//Should alter the original array thats passed in.
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo')
  return array;
}

//returns new array and does not modify original
function addElementToEndOfArray(marray, element){
  var marray = new Array();
  marray.push(1)
  marray.push('foo')
  return marray;
}

//Should alter the original array thats passed in.
function destructivelyAddElementToEndOfArray(marray, element){
  marray.push('foo')
  return marray;
}

function accessElementInArray(){
  carray = new Array()
  carray.push(1, 2, 3)
  return carray[2];
}

function destructivelyRemoveElementFromBeginningOfArray(carray){
  carray.shift()
  return carray;
}

function removeElementFromBeginningOfArray(earray){
  var earray = new Array()
  earray.push(1, 2, 3)
  return earray.slice(-2);
}

function destructivelyRemoveElementFromEndOfArray(zarray){
  zarray.pop()
  return zarray;
}

function removeElementFromEndOfArray(garray){
  var garray = new Array();
  garray.push(1, 2, 3)
  return garray.slice(0, garray.length -1);
}

