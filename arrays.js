var chocolateBars = ["snickers", "hundred gran", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, num) {
  array = ["foo"];
  num = 1;
  newarray = [...array, num]
  return newarray;
 
}

function destructivelyAddElementToBeginningOfArray(array, element ) {
  
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, n) {
  array = [1];
  n = "foo";
  narray = [...array, n]
  return narray;
  
}


function destructivelyAddElementToEndOfArray(array, k) {
  
  array.push(k);
  return array;
}



function accessElementInArray(array, i) {
  
  array = [ "Dave", "X", 3];
  i = 2
  return array[i];
  
  
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  
   
  array.shift()
  return array;
  
}



function removeElementFromBeginningOfArray(array) {
  array = [ 1, 2, 3];
  dArray = array.slice(1);
  return dArray;
  
}



function destructivelyRemoveElementFromEndOfArray(array) {
  
  array.pop();
  return array;
  
}


function removeElementFromEndOfArray(array) {
  
    Narray = array.slice(0, 2);
   return Narray;

}