var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];




function addElementToBeginningOfArray(myArray, foo) {
  
  var myNewArray = ['foo', ...myArray];
  
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray (myDestructiveArray, foo) {
  
  myDestructiveArray.unshift('foo');
  
  return myDestructiveArray;
}



function addElementToEndOfArray(arr, foo) {
  
  var newArr = [...arr, 'foo'];
  
  return newArr;
}

function destructivelyAddElementToEndOfArray(desAddElemEndArr, foo) {
  
  desAddElemEndArr.push('foo');
  
  return desAddElemEndArr;
}



function accessElementInArray(myArr, index) {
  return myArr[index];
}



function destructivelyRemoveElementFromBeginningOfArray(arr) {
  
  arr.shift();
  
  return arr;
}



function removeElementFromBeginningOfArray(arr) {
  
  arr = arr.slice(1);
  
  return arr;
}




function destructivelyRemoveElementFromEndOfArray(desArr) {
  
  desArr.pop();
  
  return desArr;
}



function removeElementFromEndOfArray(removeEndArr) {
  
  return removeEndArr.slice(0, removeEndArr.length-1);
  
}



