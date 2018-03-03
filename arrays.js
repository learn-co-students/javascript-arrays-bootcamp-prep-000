var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'];

passArray = [];
var forgotOne = 'Hampton';
function addElementToBeginningOfArray(passArray, string){
  
 
  return [string, ...passArray];
}

function destructivelyAddElementToBeginningOfArray(passArray, string){
  
  passArray.unshift(string);
  return passArray;
}

function addElementToEndOfArray(passArray, string){
  
 
  return [...passArray, string ];
}

function destructivelyAddElementToEndOfArray(passArray, string){
  
  passArray.push(string);
  return passArray;
}

function accessElementInArray(passArray,index){
  
  return passArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(passArray){
  
  passArray.shift();
  return passArray;
}

function removeElementFromBeginningOfArray(passArray){
  
  var passArray1 = passArray.slice(1);
  
  return passArray1;
}

function destructivelyRemoveElementFromEndOfArray(passArray){
  
  passArray.pop();
  return passArray;
}

function removeElementFromEndOfArray(passArray){
  
  var passArray1 = passArray.slice(0,passArray.length -1);
  return passArray1;
}