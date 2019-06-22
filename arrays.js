// SIMPLE ARRAY CREATION

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];




// ADD TO BEGINNING OF ARRAY
function addElementToBeginningOfArray(array, item){
  var newArray = [item, ...array]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(testArray, beginningElement){
  testArray.unshift(beginningElement);
  return testArray
}


// ADD ELEMENT TO THE END OF AN ARRAY

	function destructivelyAddElementToEndOfArray(array, item){
  array.push(item);
  return array;
}

	function addElementToEndOfArray(array, item){
  var newArray = [...array, item]
  return newArray;
}






// ACCESS ELEMENT IN AN ARRAY

function accessElementInArray(array, index){
  return array[index];
}









// REMOVE FROM THE BEGINNING OF AN ARRAY

function destructivelyRemoveElementFromBeginningOfArray(anArray){
  anArray.shift();
  return anArray;
}

function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}




// REMOVE FROM THE BEGINNING OF AN ARRAY



function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;
}





//REMOVE ELEMENT FROM END OF ARRAY
function destructivelyRemoveElementFromEndOfArray(thisArray){
  thisArray.pop()
  return thisArray
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}






// the length propery of arrays can help us define how far we want to slice (which parts do we want to use of the array?)
var iceCreams = ["chocolate", "vanilla", "raspberry"];
iceCreams.slice(0, iceCreams.length - 1);
iceCreams // slice method does not alter the original


  
// the splice method can return an element from the middle of an array, but it can be tricky. The splice method takes an index in the array as its first argument, the number of elements to remove as its second argument, and any number of elements to add as any arguments after the second. All arguments are optional. 

let items = [1, 2, 3, 4]

// this will remove everything after index 1 (inclusive)
// it returns the removed items: [2, 3, 4]

items.splice(1)
items 
// this will return 1 

items = [1, 2, 3, 4]

// "at index 1, remove 1 item"
// it returns the removed item(2): [2]

items.splice(1, 1)
items
items = [1, 2, 3, 4]

// "at index 1, remove 1 item and add 6 and 7"
// it returns the removed items: [2]
// and adds the items to add starting at the removal index

