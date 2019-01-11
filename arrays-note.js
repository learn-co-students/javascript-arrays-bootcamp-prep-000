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

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

var superheroines = ["catwoman", "she-hulk", "mystique"];
 
superheroines.push("wonder woman");
// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]

var cities = ["New York", "San Francisco"]
 
cities.unshift("Philadelphia")
 
// cities is now ["Philadelphia", "New York", "San Francisco"]

var cities = ["New York", "San Francisco"]
 
["Philadelphia", ...cities] 
// ["Philadelphia", "New York", "San Francisco"]
 
cities // ["New York", "San Francisco"]

var cities = ["New York", "San Francisco"]
 
// we can assign it to the existing `cities` variable
cities = ["Philadelphia", ...cities]
 
// but if we have a const
const cats = ["Milo", "Garfield"]
 
// we need a new variable:
const moreCats = ["Felix", ...cats]