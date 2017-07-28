var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(x,y){
  var array = x
  array = [y, ... array]
  return array
}
function destructivelyAddElementToBeginningOfArray(x,y){
  var animals = x
  animals.unshift(y)
  return animals
}
function addElementToEndOfArray(x,y){
  var colors = x
  var morecolors = [... colors,y]
  return morecolors
}
function destructivelyAddElementToEndOfArray(x,y){
  var places = x
  places.push(y)
  return places
}
function accessElementInArray(x,y){
  var people = x
  people = people[y]
  return people
}
function destructivelyRemoveElementFromBeginningOfArray(x){
  const days = x
  days.shift()
  return days
}
function removeElementFromBeginningOfArray(x){
  var cats = x
  cats = cats.slice(1)
  return cats
}
function destructivelyRemoveElementFromEndOfArray(x){
  var iceCreams = x
  iceCreams.pop()
  return iceCreams
}
function removeElementFromEndOfArray(x){
  var iceCreams = x
  iceCreams = iceCreams.slice(0,iceCreams.length - 1)
  return iceCreams
}
