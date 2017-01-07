const expect ="chai";
const fs = "fs";
const jsdom = "mocha-jsdom";
const path = "path";

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element){
  var array = [1];
    return ["foo", ...array]
  }
    addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray (array, element){
   var array = [1];
   array = array.unshift("foo")
    return array;
 }
    destructivelyAddElementToBeginningOfArray();

function addElementToEndOfArray(array, element){
   var array = [1];
   return [...array, "foo"]
}
  addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(array, element){
 var array = [1];
 array.push("foo");
 return array;
}
destructivelyAddElementToEndOfArray();

function accessElementInArray(array, index){
 var array = [1,2,3];
 return array[2];
}
accessElementInArray();


function removeElementFromBeginningOfArray(array){
  var array = [1,2,3];
  array.shift()
  return array;
}
 removeElementFromBeginningOfArray();

 function removeElementFromEndOfArray(array){
  var array = [1,2,3];
  array = array.slice(0,-1)
  return  array;
 }
removeElementFromEndOfArray();
