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
  chocolateBars.slice(2)
  return chocolateBars
}
