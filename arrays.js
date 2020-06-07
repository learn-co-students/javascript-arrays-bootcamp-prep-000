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
  var pizzaJoints = ["Dominoes", "Little Ceasars"];
  
}
  addElementToBeginningOfArray.unshift("Papa Johns");
  
function  destructivelyAddElementToBeginningOfArray(array, element){
  var pizzaJoints = ["Dominoes", "Little Ceasars"];
} 

destructivelyAddElementToBeginningOfArray[0] = "Papa Johns";

function addElementToEndOfArray(array, element){
  var pizzaJoints = ["Dominoes", "Little Ceasars"];
}
  addElementToEndOfArray.push("Papa Johns");
  
function destructivelyAddElementToEndOfArray(array, elements){
  var pizzaJoints = ["Dominoes", "Little Ceasars"];
}
