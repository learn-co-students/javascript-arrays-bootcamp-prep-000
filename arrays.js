var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//--------------------//

/* var superheroines = ["catwoman", "she-hulk", "mystique"];
 
superheroines.push("wonder woman");

// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]

var cities = ["New York", "San Francisco"]
 
var secondCityArray = ["Philadelphia", ...cities] // ["Philadelphia", "New York", "San Francisco"]
 
console.log(cities); // ["New York", "San Francisco"]
console.log(secondCityArray);
*/

function addElementToBeginningOfArray(newArray, extraItem){
  var array = newArray; // array = "newArray items";
  var array2 = [extraItem, ...array];
  console.log(array);
  console.log(array2);
  return array2;
}

function addElementToEndOfArray(addArray, element){
  var array = addArray;
  var array2 = [...array, element];
  return array2;
}

function destructivelyAddElementToBeginningOfArray (addArray, element){
addArray.unshift(element);
  return addArray;
}

function destructivelyAddElementToEndOfArray(addArray, element){
  addArray.push(element);
  return addArray;
}

function accessElementInArray(sampleArray, index){
  return sampleArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(sampleArray, element){
  sampleArray.shift(element);
  return sampleArray;
}

function removeElementFromBeginningOfArray(array){
 var array2 = array.slice(1);
  return array2;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var array2 = array.slice(0,length-1);
  return array2;
}

