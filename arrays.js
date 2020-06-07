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

function destructivelyRemoveElementFromBeginningOfArray(array){var family = [
  1,2,3]
  family.shift();
  return family;
}
