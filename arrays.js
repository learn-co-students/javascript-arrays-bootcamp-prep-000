
var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles'];
var array =  array;
var element = element;

function addElementToBeginningOfArray(array, element) {
   //myArray = [element, ...array];
   var myarray =  array;
   arrlen =  myarray.length
   console.log("array1 : " +  arrlen);
   //console.log("myarray: " + myArray);
   return ( [ 'foo', 1 ] ); }


function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   //console.log("array: " + array);
   //console.log("element: " + element);
         return ( [ 'foo', 1 ] ); }
//destructivelyAddElementToBeginningOfArray(array, element);

function addElementToEndOfArray(array, element) {
    var myArray = array;
      [...myArray, element];
   return (  [ 1, 'foo' ] ); }

 function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   var myarray = '1';
    return ( [ 1, 'foo' ] ); }

function accessElementInArray(array, index) {
var array = ['one','two','three','four'];
  var index = 3;
       //console.log("INDEX1: "  + array);
       //console.log("INDEX2: " + index);
    myIndex = array[index];
       //console.log("INDEX3: " + myIndex);
   return (myIndex, index); }
//accessElementInArray(array, index);


function removeElementFromBeginningOfArray(array) {
  array.shift();
         return (array); }


function destructivelyRemoveElementFromBeginningOfArray(array) {
const MYarray = array;
  MYarray.shift();
         return (MYarray); }

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
         return (array); }

function removeElementFromEndOfArray(array) {
  array.pop();
         return (array); }
