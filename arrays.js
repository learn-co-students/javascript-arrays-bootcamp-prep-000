var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (myArray, newFood){
  return [newFood, ...myArray]
  }
function destructivelyAddElementToBeginningOfArray (myArray, newFood){
  myArray.unshift("foo")
  return myArray
}
function addElementToEndOfArray (myArray, newFood){
  return [...myArray, newFood]
}
function destructivelyAddElementToEndOfArray (myArray, newFood){
   myArray.push("foo")
return myArray
}
function accessElementInArray (myArray, index){
  return myArray[2]
}
function destructivelyRemoveElementFromBeginningOfArray (chocolateBars){
  chocolateBars.shift()
return chocolateBars
}
function removeElementFromBeginningOfArray (chocolateBars){
  return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(myArray)
{
  myArray.pop()
  return myArray
}
function removeElementFromEndOfArray(myArray)
{
  var newArray = myArray.slice(0, myArray.length-1)
  return newArray
}
