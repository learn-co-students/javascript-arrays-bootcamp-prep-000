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
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
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

  
function  destructivelyAddElementToBeginningOfArray(){
   array = [1];
   array.unshift("foo");
   return array;
} 



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



function accessElementInArray(){
  var numbers = [ 1, 2, 3 ];
  
  return numbers[2];
}
  


function destructivelyRemoveElementFromBeginningOfArray(){
  const array = [ 1, 2, 3];
  array.shift();
  
  return array;
}



function removeElementFromBeginningOfArray(){
 array = [ 1, 2, 3];
 return array.slice(1);

} 



 function destructivelyRemoveElementFromEndOfArray(){
   
  array = [1, 2, 3];
  array.pop();

 return array;
  }



function removeElementFromEndOfArray(){
   array = [ 1, 2, 3 ];
   return array.slice(0, array.length - 1);
  
  
}
