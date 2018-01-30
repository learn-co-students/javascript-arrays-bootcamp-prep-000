var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var countries = ["France", "Canada", "Japan"];
var otherCountry = "Brazil"
function addElementToBeginningOfArray(countries, otherCountry) {
  var moreCountries = [otherCountry, ...countries]
  return moreCountries
}

function destructivelyAddElementToBeginningOfArray(countries, otherCountry) {
  countries.unshift(otherCountry)
  return countries
}

var cities = ["London", "Paris", "Tokyo"]
var otherCity = "Boston"
function addElementToEndOfArray(cities, otherCity) {
  var moreCities = [...cities, otherCity]
  return moreCities
}

function destructivelyAddElementToEndOfArray(cities, otherCity) {
  cities.push(otherCity)
  return cities
}

var numbers = ["1", "2", "3", "4"]
var index = 2
function accessElementInArray(numbers, index) {
  return numbers[index]
}

var days = ["Monday", "Tuesday", "Wednesday"]
function destructivelyRemoveElementFromBeginningOfArray(days) {
  days.shift()
  return days
}

function removeElementFromBeginningofArray(days) {
  return days.slice(1)
}

var iceCreams = ["chocolate", "vanilla", "raspberry"]
function destructivelyRemoveElementFromEndOfArray(iceCreams) {
  iceCreams.pop()
  return iceCreams
}

function removeElementFromEndOfArray(iceCreams) {
  return iceCreams.slice(0, iceCreams.length - 1)
}