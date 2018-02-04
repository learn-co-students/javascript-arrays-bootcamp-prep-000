var chocolateBars = 
["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars.push("Butterfinger");
chocolateBars.unshift("Mounds");




var chocolateBarsYum = 
["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  
  return array.push(element);
}
addElementToBeginningOfArray(chocolateBarsYum,"Mounds");

