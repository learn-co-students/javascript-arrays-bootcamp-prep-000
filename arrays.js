function Mycholocatebars(){
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
}

function  addElementToBeginningOfArray(){
var cities = ["New York", "San Francisco"]
cities = ["Philadelphia", ...cities]
}


function destructivelyAddElementToBeginningOfArray(){
var cities = ["New York", "San Francisco"]
cities.unshift("Philadelphia")
}

function addElementToEndOfArray() {
var cities = ["New York", "San Francisco"]
cities = [...cities, "Philadelphia"]
}

function destructivelyAddElementToEndOfArray() {
var cities = ["New York", "San Francisco"];
cities.unshift("Philadelphia")
}

function accessElementInArray() {
var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"]
console.log(entrepreneurs[0]);
}

function destructivelyRemoveElementFromBeginningOfArray() {
const days = ["Monday", "Tuesday", "Wednesday"];
days = days.shift();
console.log(destructivelyRemoveElementFromBeginningOfArray);
}

function removeElementFromBeginningOfArray(){
var cats = ["Milo", "Garfield", "Otis"];
cats = cats.slice(1) 
}

function destructivelyRemoveElementFromEndOfArray() {
const iceCreams = ["chocolate", "vanilla", "raspberry"];
iceCreams = iceCreams.slice(-1);
return destructivelyRemoveElementFromEndOfArray
}

function removeElementFromEndOfArray()  {
var iceCreams = ["chocolate", "vanilla", "raspberry"]
iceCreams.slice(0, iceCreams.length - 1) 
}
