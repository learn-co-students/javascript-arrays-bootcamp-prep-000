var chocolateBars = ["snickers", "hundered grand", "kitkat", "skittles"]

chocolateBars = [...chocolateBars, "crunch"]

var cities = ["Orlando", "Miami", "Chicago"];

function addElementToBeginningOfArray(cities, states) {
  cities = ["foo", ...cities]
  return cities
}

function destructivelyAddElementToBeginningOfArray(cities, chips){
  cities.unshift("foo")
  return cities
}

var fruits = ["banana", "blueberry", "kiwi"]

function addElementToEndOfArray(fruits, vegetables) {
  fruits = [...fruits, "foo"]
  return fruits
}

function destructivelyAddElementToEndOfArray(fruits, condiments) {
  fruits.push("foo")
  return fruits
}

var paper = ["construction", "line", "printer", 3]

function accessElementInArray() {
  return paper[3]
}

var days = [1, 2, 3]

function destructivelyRemoveElementFromBeginningOfArray(days) {
  days.shift()
  return days
}

var night = [1, 2, 3]

function removeElementFromBeginningOfArray() {
  night = night.slice(1)
  return night
}

var table = [1, 2, 3]

function destructivelyRemoveElementFromEndOfArray(table) {
  table.pop()
  return table
}

var chairs = [1, 2, 3]

function removeElementFromEndOfArray() {
  chairs = chairs.slice(0, chairs.length -1)
  return chairs
}