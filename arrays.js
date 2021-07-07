var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(){
  var cities = ["New York", "San Francisco"]
  ["Philadelphia", ...cities]
  return cities
}

function destructivelyAddElementToBeginningOfArray(){
var cities = ["New York", "San Francisco"]
cities.unshift("Philadelphia")
return cities
}

function addElementToEndOfArray(){
  var cities = ["New York", "San Francisco"]
  [...cities, "Philadelphia"]
  return cities
}

function destructivelyAddElementToEndOfArray(){
  var cities = ["New York", "San Francisco"]
  cities.push("Philadelphia")
  return cities
}

function accessElementInArray(){
  var cities = ["New York", "San Francisco"]
  return cities[1]
}
