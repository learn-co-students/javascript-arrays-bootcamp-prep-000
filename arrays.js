var ingredient1 = "bread",
  ingredient2 = "mild cheese",
  ingredient3 = "sharp cheese",
  ingredient4 = "butter",
  ingredient5 = "tomato",
  ingredient6 = "garlic";
  
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndofArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}