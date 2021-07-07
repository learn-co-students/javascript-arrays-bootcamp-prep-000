//TO REMEMBER//

// //*******************************************************//
// // //we can push elements onto the end of an array with .push

// // var superheroines = ["catwoman","she-hulk", "mystique"];

// // superheroines.push("wonderwoman");

// //not superheroines include wonredwoman as well


// var cities = ["New York", "San Francisco"]
 
// cities.unshift("Philadelphia")
 
// // cities is now ["Philadelphia", "New York", "San Francisco"]

// //**************************************************//

// //instead of modifying the array we can crrat a new one with all the elements of the existing one
// var cities = ["New York", "San Francisco"];
 
// ["Philadelphia", ...cities];  // ["Philadelphia", "New York", "San Francisco"]
 
// cities // ["New York", "San Francisco"]

// //*******************************************************//

// var cities = ["New York", "San Francisco"]
 
// // we can assign it to the existing `cities` variable
// cities = ["Philadelphia", ...cities]
 
// // but if we have a const
// const cats = ["Milo", "Garfield"]
 
// // we need a new variable:
// const moreCats = ["Felix", ...cats]

//TODO//

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray=[element, ...array];
  return newArray;
  
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
  
  
}

function addElementToEndOfArray(array, element){
 var newArray =[...array,element];
 return newArray;
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

//to remove an element from the beginning of an array, use .shift method//

// const days =["Monday","Tuesday", "Wednesday"];
// days.shift()
// //will return te removed element ("Monday")
// days //now there are only ["Tuesday", "Wednesday"];


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1); 
    return array;
    
  //need to assign the results to a new variable, so the original one wont mutate
  
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
  
}

function removeElementFromEndOfArray(array){
array = array.slice(0,array.length-1);
return array;
  
}
