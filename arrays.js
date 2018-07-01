var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var cities = ["New York", "San Francisco"];
var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");
// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]

cities.unshift("Philadelphia")
// cities is now ["Philadelphia", "New York", "San Francisco"]

// but if we have a const
const cats = ["Milo", "Garfield"]
 
// we need a new variable:
const moreCats = ["Felix", ...cats]

var myArray = [1, 2, 3]
myArray[5] = 5
// myArray [1, 2, 3, undefined, undefined, 5]

var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
} 

// ok
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  console.log(array); // pour voir array - to be deleted
  return array;
}
// ok
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  console.log(array); // pour voir array - to be deleted
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function accessElementInArray(array,index) {
  return array[index]
}

const days = ["Monday", "Tuesday", "Wednesday"]
days.shift() // returns the removed element, in this case "Monday"
days // ["Tuesday", "Wednesday"]

// problem ok
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
// problem ok
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
//  return [...array.slice(-1), array.pop()]
}
catsList = ["Milo", "Garfield", "Otis"];
catslist.slice(1) // ["Garfield", "Otis"];
// get the last 1 cat
catslist.slice(-1) // ["Otis"]
catslist // ["Milo", "Garfield", "Otis"];

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
// problem 3
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
var iceCreams = ["chocolate", "vanilla", "raspberry"]
iceCreams.pop() // returns the removed element, in this case "raspberry"
iceCreams // ["chocolate", "vanilla"]


