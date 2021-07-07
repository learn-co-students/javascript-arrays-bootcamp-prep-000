// array: an ordered list of elements
// array literals: var myArray = [e1, e2,...,eN]
// array constructor var myArray = new Array();
// array indexes are strings that can be accessed by array-style
// notation using brackets, and the numbers will be coerced into
// strings 


var ingedrient1 = "bread";
var ingedrient2 = "mild cheese";
var ingedrient3 = "sharp cheese";
var ingedrient4 = "butter";
var ingedrient5 = "tomato";
var ingedrient6 = "garlic";

var grilledCheeseIngredients = 
[
   ingedrient1,
   ingedrient2,
   ingedrient3,
   ingedrient4,
   ingedrient5,
   ingedrient6
];

var tomatoSauceIngredients =
[
  ingedrient5,
  ingedrient6,
  'olive oil',
  'basil',
  'oregano'
];

var chocolateBars =
[
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

var superheroines =
[
  "catwoman",
  "she-hulk",
  "mystique"
];

// add wonder woman to end of array
superheroines.push("wonder woman");

// add element to begin of array
superheroines.unshift ("shawna");

// spread operator: create new array by adding to start of 
// existing array -> use ... to add element anywhere in array
var cities = ["New York", "San Francisco"];
["Philadelphia",...cities];

// can add element to array at any position. This could cause some positions to be undefined
var myArray=[1,2,3];
myArrray[5]= 5;   // position 3 and 4 are undefined 
                  // -> array start at 0

function accessElementInArray(anArray, index)
{
    // return element at anArry[index]
    return anArray[index];
}

function addElementToBeginningOfArray(anArray, anElement)
{
    // return a new array with anElement inserted at position 0
    return [anElement, ...anArray];
}

function addElementToEndOfArray(anArray, anElement)
{
    // return a new array with anElement inserted at end of array
    return [...anArray,anElement];
}

// Destructive methods return value is the removed item
function destructivelyAddElementToBeginningOfArray(anArray, anElement)
{
  // return a anArray with anElement inserted at position 0
  anArray.unshift(anElement);
  return anArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement)
{
    // return a new array with anElement 
    // inserted at end of array
    anArray.push(anElement);
    return anArray
}

function destructivelyRemoveElementFromBeginningOfArray(anArray)
{
  // return anArray with first element removed
  anArray.shift();
  return anArray; 
}
  
function destructivelyRemoveElementFromEndOfArray(anArray)
{
  anArray.pop();
  return anArray;
}

function  removeElementFromBeginningOfArray(anArray)
{
  // return an array without the first element of anArray
  // notice to remove first element, the index begins at 1 not 0
  // because we want all the array except anArray[0] so slice
  // the array beginning at anArray[1] to anArray[n]/
  // also can pass -1,-2,...,x and it would return all elements n, n-1, ..., n+x from anArray[], where x=-1=n
   return anArray.slice(1);
}

function removeElementFromEndOfArray(anArray)
{
    // NOTE: slice can take two arguements, S.T.
    // it can literally remove a slice from arg1 to arg2
    // anArray.slice(0, 5) returns elements anArray[0] to
    // anArray[4]
    // return an array with the last element of anArray removed
    // 
    return anArray.slice(0,anArray.length - 1);
}


// Methods to manipulate middle of array
// A. splice:
//  1. anArray.splice(1) -> remove everything after anArray[1]
// inclusive -> only one element (anArray[0]) will remain
// the removed elements are returned and the array is mutated
// 2. anArray().splaice(1,1) -> at index 1, remove 1 item
//   returns anArray[1] and removes anArray[1] from anArray[]
// 3. anArray.splice(1,1,6,7) -> at index 1 remove 1 item and
// add 6 and 7 . 6 and 7 are insert at position 1 and anArray[1]
// is returned
// B. anArray.slice combined with ... (spread operator)
// 1. a slice from the start upto but not including index 2 
// (the third element) and a slice from index 3 to the end

var items = [1,2,3,4,5];
[...items.slice(0,2), ...items.slice(3)]; // [1,2,4,5];