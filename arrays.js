
var ingredient1 = 'bread'
var ingredient2 = 'mild cheese'
var ingredient3 = 'sharp cheese'
var ingredient4 = 'butter'
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var superheroines = ['catwoman', 'she-hulk', 'mystique']
superheroines.push('wonder woman')

var cities = ['New York', 'San Francisco']
cities.unshift('Philadelphia')

var cities = ['New York', 'Miami']
function addElementToBeginningOfArray(){
  return ['Houston', ...cities]
}

var states = ['Texas', 'Florida']
function destructivelyAddElementToBeginningOfArray(){
  states.unshift('Florida')
  return states
}

var colors = ['red', 'green']
function addElementToEndOfArray(){
  return [...colors, 'blue']
}

var planets = ['Mercury', 'Venus']
function destructivelyAddElementToEndOfArray(){
  planets.push('Earth')
  return planets
}

var entrepreneurs = ['Oprah Winfrey', 'Laurene Powell Jobs', 'Arianna Huggington']
function accessElementInArray(){
  return entrepreneurs[1]
}

var days = ['Monday', 'Tuesday', 'Wednesday']
function destructivelyRemoveElementFromBeginningOfArray(){
  days.shift()
  return days
}

var cats = ['Milo', 'Garfield', 'Otis']
function removeElementFromBeginningOfArray(){
  return cats.slice(1)
}

var iceCreams ['chocolate', 'vanilla', 'raspberry']
function destructivelyRemoveElementFromEndOfArray(){
  return iceCreams.pop()
}

function removeElementFromEndOfArray(){
  return iceCreams.slice(0, .length - 1)
}
