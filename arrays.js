var ingredient1 = "bread";
var ingredient22 = "mild cheese";
var ingredient3 = 'sharp cheese';
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";
var grilledCheeseIngredients = ['bread', 'mild cheese', ' sharp cheese', 'butter', 'tomato', 'garlic'];
var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano'];

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
const element = 'foo';

function addElementToBeginningOfArray(array) {return [element, ...array]}

function destructivelyAddElementToBeginningOfArray(array) {array.unshift(element); return array}

function addElementToEndOfArray(array) {return [...array, element]}
function destructivelyAddElementToEndOfArray(array) {array.push(element); return array}
var index = 2;
function accessElementInArray(array) {return array[index]}
function destructivelyRemoveElementFromBeginningOfArray(array) { array.shift(); return array}
function removeElementFromBeginningOfArray(array) {return array.slice(1)}
function destructivelyRemoveElementFromEndOfArray(array) {array.pop(); return array}
function removeElementFromEndOfArray(array) {return array.slice(0,array.length -1)}



