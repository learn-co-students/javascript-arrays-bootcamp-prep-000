var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic',
  ]
  
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
  ]
  
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skitles'
  ]
  
function addElementToBeginningOfArray (x, y) {
  var a = x.unshift(y);
  return a;
  }

function destructivelyAddElementToBeginningOfArray (array1, element1) {
  array1 = array1.unshift(element1);
  return array1;
  } 
  
  function addElementToEndOfArray (endA, elA) {
    var newA = endA.push(elA);
    return newA;
  }
  
  function destructivelyAddElementToEndOfArray (endB, elB) {
    endB = endB.push(elB);
    return endB;
  }
  
  function accessElementInArray (ar, num) {
    return ar[num];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray (arry) {
    arry = arry.shift();
    return arry;
  }
  
  

