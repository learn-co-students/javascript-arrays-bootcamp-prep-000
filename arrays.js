var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, string)
{
  var newArray = [string, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, string)
{
  array.unshift(string)
  return array
}