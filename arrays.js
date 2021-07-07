var ingredient1= "bread"
var ingredient2= "mild cheese"
var ingredient3= "sharp cheese"
var ingredient4= "butter"
var ingredient5= "tomato"
var ingredient6= "garlic"
var sauce= ["tomato", 'garlic', 'olive oil', 'basil', 'oregano' ];

var chocolateBars = ["snickers", 'hundred grand', 'kitkat', 'skittles'];
console.log(chocolateBars)

var cities = ["new york", "san francisco"];
var cities2=["philly", ... cities];

console.log(cities2)

function addElementToBeginningOfArray(array, element){
  var newfront=[element, ...array];
  return newfront;
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
  
}


function addElementToEndOfArray(array, element){
  var newend=[...array, element];
  return newend;
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
  
}

function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var newslice=array.slice(1);
  return newslice;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
  
}
function removeElementFromEndOfArray(array){
  var x=array.slice(0,array.length-1)
  return x;
  
}





