var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = function (myArray, element){
  return [element, ...myArray];
};

var destructivelyAddElementtoBeginningOfArray = function (myArray, element){
  myArray.unshift(element)
  return myArray;
};

var addElementToEndOfArray = function(myArray, element){
  return [...myArray, element];
}

var destructivelyAddElementToEndOfArray(myArray, element){
  myArray.push(element);
  return myArray;
}

var accessElementInArray = function(myArray, index){
  return = myArray[index];
};

var destructivelyRemoveElementFromBeginningOfArray = function(myArray){
  myArray.shift();
  return myArray;
};

var removeElementFromBeginningofArray = function(myArray){
  return myArray.slice(1);
};
var destructivelyRemoveElementFromEndOfArray = function (myArray){
  myArray.pop();
  return myArray;
};

function removeElementFromEndofArray(myArray){
  return myArray.slice(0, myArray.length -1);
}
