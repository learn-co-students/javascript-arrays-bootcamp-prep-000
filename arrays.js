var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars]
  //returns new array, doesn't modify original
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString)
  return chocolateBars
  //alters original array passed as parameter
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString)
  return chocolateBars
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
  //mutates underlying array
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
  //can be passed a negative index n for last n elements of array.
  //non-destructive, just returns array after slice index
  //can assign chocolateBars.slice(1) to a new var to save changes.
  //ex. chocolate = chocolateBars.slice(1), chocolate would be ["hundred grand", "kitkat", "skittles"]
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}

/* "at index 1, remove 1 item and add 6 and add 7"
 it returns the removed items: [2]
 and adds the items to add starting at the removal index
items.splice(1, 1, 6, 7)
[1,2,3,4] -> [1,6,7,3,4]*\

/*
var items = [1, 2, 3, 4, 5]

// let's remove the third element

// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]
*\
