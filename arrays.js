var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
funtion addElementToBeginningOfArray() {
["garoto", ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(){
chocolateBars.unshift("garoto")
}
function addElementToEndOfArray(){
[chocolateBars, ..."garoto"]
}
function destructivelyAddElementToEndOfArray(){
chocolateBars.push("garoto")
}
function accessElementInArray(){
chocolateBars;
console.log(chocolateBars[1]);
}
function destructivelyRemoveElementFromBeginningOfArray() {
chocolateBars.shift()
}
function removeElementFromBeginningOfArray() {
chocolateBars.slice(0)
}
function destructivelyRemoveElementFromEndOfArray() {
chocolateBars.pop()
}
function removeElementFromEndOfArray() {
chocolateBars.slice(0, 
chocolateBars.lenght -1)
}