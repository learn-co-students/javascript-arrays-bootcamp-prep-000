var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {
  var newChocolateBar = [element, ...chocolateBars];
  return newChocolateBar;
}
  
function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
chocolateBars.unshift(element);
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, element) {
  var newChocolateBar = [...chocolateBars, element];
  return newChocolateBar;
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(element);
return chocolateBars;
}

function accessElementInArray(myArray, i) {
    return(myArray[i]);
}
    
function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift();
  return myArray;
} 
  
function removeElementFromBeginningOfArray(myArray) {
  myArray = myArray.slice(1);
  return myArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1);
}



  
  
  

