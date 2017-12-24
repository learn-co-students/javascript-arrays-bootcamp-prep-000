var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var cities = ["New York", "San Francisco"]
  cities = ["Philadelphia", ...cities]
  return cities
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  cities.unshift("Brooklyn")
  return cities
} 
function addElementEndOfArray(array, element) {
  var cities = ["New York", "San Francisco", "Philadelphia" ]
  cities = [...cities, "Houston"]
  return cities
}
function destructivelyAddElementToEndOfArray(array, element) {
  cities.push("Los Angeles")
  return cities
}
function accessElementInArray(array, element) {
  console.log(chocolateBars[1]);
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
   var cities = ["New York", "Denver", "Philadelphia"]
   cities.lshift("New York")
   return cities
}
function removeElementFromBeginningOfArray(array, element) { 
  var cats = ["Milo", "Garfield", "Otis"]
  cats.slice(-2)
  return cats
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  var iceCreams = ["Chocolate", "Vanilla", "Raspberry"]
  iceCreams.push("Raspberry")
  return iceCreams
}
function removeElementFromEndOfArray(array, element) {
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  iceCreams.slice(2)
  return iceCreams
}