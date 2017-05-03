var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray=function(anArray,anElementTotheBeginning){
  return [anElementTotheBeginning,...anArray];
}
var destructivelyAddElementToBeginningOfArray = function(anArray,anElementTotheBeginning){
  anArray.unshift(anElementTotheBeginning);
  return anArray;
}

var addElementToEndOfArray = function(anArray,anElementTotheEnd){
  return [...anArray,anElementTotheEnd];
}

var destructivelyAddElementToEndOfArray=function(anArray,anElementTotheEnd){
  anArray.push(anElementTotheEnd);
  return anArray;
}

var accessElementInArray=function(anArray, index){
  return anArray[index];
}

var destructivelyRemoveElementFromBeginningOfArray=function(anArray){
  anArray.shift();
  return anArray;
}

var removeElementFromBeginningOfArray=function(anArray){
  var result=anArray.slice(1);//It should be slice(int, int) starting position (index) and endind position. If only first int exists, it means slice to the end (or only remove everything before the first int). If int is negative, it means slice from end and only keep a number of |end int| elements. This slice create a new array. The original array preserves.
  return result;
}

var destructivelyRemoveElementFromEndOfArray=function(anArray){
  anArray.pop();
  return anArray;
}

var removeElementFromEndOfArray=function(anArray){
  var result=anArray.slice(0,anArray.length-1);
  return result;
}


// let items = [1, 2, 3, 4]
//
// // this will remove everything after index 1 (inclusive)
// // it returns the removed items: [2, 3, 4]
// items.splice(1)
//
// items // [1]
//
// items = [1, 2, 3, 4]
//
//  // "at index 1, remove 1 item"
//  // it returns the removed item(s): [2]
// items.splice(1, 1)
//
// items // [1, 3, 4]
//
// items = [1, 2, 3, 4]
//
// // "at index 1, remove 1 item and add 6 and add 7"
// // it returns the removed items: [2]
// // and adds the items to add starting at the removal index
// items.splice(1, 1, 6, 7)
//
// items // [1, 6, 7, 3, 4]
