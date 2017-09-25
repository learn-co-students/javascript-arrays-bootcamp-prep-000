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
  'garlic'
]
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

var tvShows = ["game of thrones", "true detective", "the good wife", "empire"];

var weirdGreeting = [ "he", 110, "w", 0, "r", 1, "d" ];

var empty = [];
var evenNumbers = new Array();

var superheroines = ["catwoman", "she-hulk", "mystique"];

superheroines.push("wonder woman");
// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]

var cities = ["New York", "San Francisco"]

cities.unshift("Philadelphia")

// cities is now ["Philadelphia", "New York", "San Francisco"]

var cities = ["New York", "San Francisco"]

["Philadelphia", ...cities] // ["Philadelphia", "New York", "San Francisco"]

cities // ["New York", "San Francisco"]

var cities = ["New York", "San Francisco"]

[...cities, "Philadelphia"] // ["New York", "San Francisco", "Philadelphia"]
var cities = ["New York", "San Francisco"]

[...cities, "Philadelphia"] // ["New York", "San Francisco", "Philadelphia"]

var cities = ["New York", "San Francisco"]

[...cities, "Philadelphia"] // ["New York", "San Francisco", "Philadelphia"]

r cities = ["New York", "San Francisco"]

// we can assign it to the existing `cities` variable
cities = ["Philadelphia", ...cities]

// but if we have a const
const cats = ["Milo", "Garfield"]

// we need a new variable:
const moreCats = ["Felix", ...cats]

var myArray = [1, 2, 3]

myArray[5] = 5

myArray // [1, 2, 3, undefined, undefined, 5]

var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];

// the line below will print the string "Elizabeth Holmes"
console.log(entrepreneurs[0]);

// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);

// the line below will return undefined
entrepreneurs[9];

function accessElementInArray() {

}

const days = ["Monday", "Tuesday", "Wednesday"]

days.shift() // returns the removed element, in this case "Monday"

days // ["Tuesday", "Wednesday"]


var cats = ["Milo", "Garfield", "Otis"]

cats.slice(1) // ["Garfield", "Otis"]

cats // ["Milo", "Garfield", "Otis"]

var cats = ["Milo", "Garfield", "Otis"]

cats = cats.slice(1) // ["Garfield", "Otis"]

cats // ["Garfield", "Otis"]

var cats = ["Milo", "Garfield", "Otis"]

// get the last 2 cats
cats.slice(-2) // ["Garfield", "Otis"]

// get the last 1 cat
cats.slice(-1) // ["Otis"]

var iceCreams = ["chocolate", "vanilla", "raspberry"]

iceCreams.pop() // returns the removed element, in this case "raspberry"

iceCreams // ["chocolate", "vanilla"]

function destructivelyRemoveElementFromEndOfArray(){
}



ar iceCreams = ["chocolate", "vanilla", "raspberry"]

iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]

iceCreams // ["chocolate", "vanilla", "raspberry"]

items = [1, 2, 3, 4]

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

var arr = ["under", "the", "hood"];

arr[0];  // "under"
arr['0']; // "under"
arr[02]; // 02 the number *is* 2, so you get "hood"
arr['02']: // '02' the string is *not* 2, so you get undefined myArray['bonobo monkey'] = 27.

var myArray = [1, 2, 3]

myArray.length // 3

myArray.length = 1

myArray // [1] (!!!)

var array = [1, 2, 3];

array.myProperty = "I'm a property!";

array;
// [1, 2, 3];

// Where did our property go?
array.myProperty;
// "I'm a property!";

array.length;
// 3 - Would you have expected 3 or 4?
