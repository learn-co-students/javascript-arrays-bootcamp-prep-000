var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
];
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
];

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  var superheroines = ["catwoman", "she-hulk", "mystique"];
 
superheroines.push("wonder woman");

var cities = ["New York", "San Francisco"];
 
cities.unshift("Philadelphia");

var cities = ["New York", "San Francisco"];
 
//["Philadelphia", ...cities]
//["Philadelphia", "New York", "San Francisco"]

var cities = ["New York", "San Francisco"];
 
//[...cities, "Philadelphia"] 
// ["New York", "San Francisco", "Philadelphia"]

var cities = ["New York", "San Francisco"]
 
// we can assign it to the existing `cities` variable
cities = ["Philadelphia", ...cities]
 
// but if we have a const
const cats = ["Milo", "Garfield"]
 
// we need a new variable:
const moreCats = ["Felix", ...cats]

var myArray = [1, 2, 3]
 
myArray[5] = 5
 
myArray // [1, 2, 3, undefined, undefined, 5]

function addElementToBeginningOfArray(array, element){
  //var pizzaJoints = ["Dominoes", "Little Ceasars"];
  var pizzaJoints = ['foo', 1 ]
  return pizzaJoints;
}
   addElementToBeginningOfArray();
   pizzaJoints = ["Papa Johns",...pizzaJoints];
  
function  destructivelyAddElementToBeginningOfArray(array, element){
  //var pizzaJoints = ["Dominoes", "Little Ceasars"];
  var pizzaJoints = [ 'foo',  1  ];
  return pizzaJoints;
} 

destructivelyAddElementToBeginningOfArray.unshift("foo");

function addElementToEndOfArray(array, element){
   //var pizzaJoints = ["Dominoes", "Little Ceasars"];
   var pizzaJoints = [ 1, 'foo' ];
   return pizzaJoints;
}
 
 pizzaJoints = [...pizzaJoints,"Papa Johns"];
  
function destructivelyAddElementToEndOfArray(array, elements){
   //var pizzaJoints = ["Dominoes", "Little Ceasars"];
   var pizzaJoints = [ 1, 'foo' ];
   return pizzaJoints;
}

destructivelyAddElementToEndOfArray.push("Papa Johns");

function accessElementInArray(array, index){
  var family = [
    0,1,2,3,];
    
    return family[3];
}

function destructivelyRemoveElementFromBeginningOfArray(array){ var family = [
  1, 2, 3 ];
  family.shift();
  
  return family;
}

var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
 
// the line below will print the string "Oprah Winfrey"
console.log(entrepreneurs[0]);
 
// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);
 
// the line below will return undefined
entrepreneurs[9];


function accessElementInArray(){
  var numbers = [ 1, 2, 3 ];
  
  return numbers[2];
}
  
const days = ["Monday", "Tuesday", "Wednesday"]
 
days.shift() // returns the removed element, in this case "Monday"
 
days // ["Tuesday", "Wednesday"]

function destructivelyRemoveElementFromBeginningOfArray(){
  const array = [ 1, 2, 3];
  array.shift();
  
  return array;
}


//var cats = ["Milo", "Garfield", "Otis"]
 
//cats.slice(1) // ["Garfield", "Otis"]
 
//cats // ["Milo", "Garfield", "Otis"]

//var cats = ["Milo", "Garfield", "Otis"]
 
//cats = cats.slice(1) // ["Garfield", "Otis"]
 
//cats // ["Garfield", "Otis"]



//var cats = ["Milo", "Garfield", "Otis"]
 
// get the last 2 cats
//cats.slice(-2) // ["Garfield", "Otis"]
 
// get the last 1 cat
//cats.slice(-1) // ["Otis"]

function removeElementFromBeginningOfArray(){
const array = [ 1, 2, 3];
array.slice(1);

return array;
}

var iceCreams = ["chocolate", "vanilla", "raspberry"]
 
iceCreams.pop() // returns the removed element, in this case "raspberry"
 
iceCreams // ["chocolate", "vanilla"]

function destructivelyRemoveElementFromEndOfArray(){
  const array = [ 1, 2, 3 ];
  array.pop();
  
  return array;
}

var iceCreams = ["chocolate", "vanilla", "raspberry"]
 
iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]
 
iceCreams // ["chocolate", "vanilla", "raspberry"]


function removeElementFromEndOfArray(){
  const array = [ 1, 2, 3 ];
  array.slice(0, array.length - 1);
  
  return array;
}


let items = [1, 2, 3, 4]
 
// this will remove everything after index 1 (inclusive)
// it returns the removed items: [2, 3, 4]
items.splice(1)
 
items // [1]
 
items = [1, 2, 3, 4]
 
 // "at index 1, remove 1 item"
 // it returns the removed item(s): [2]
items.splice(1, 1)
 
items // [1, 3, 4]
 
items = [1, 2, 3, 4]
 
// "at index 1, remove 1 item and add 6 and add 7"
// it returns the removed items: [2]
// and adds the items to add starting at the removal index
items.splice(1, 1, 6, 7)
 
items // [1, 6, 7, 3, 4]


var items = [1, 2, 3, 4, 5]
 
// let's remove the third element
 
// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]
