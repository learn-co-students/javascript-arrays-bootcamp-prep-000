var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var ele = "foo"
const myOriginalArray = [1]
var fruitCandy = ["skittles", "starburst", "gumdrops", "twizzlers"]
var iceCreams = ["chocolate", "vanilla", "raspberry"]

function addElementToBeginningOfArray (myOriginalArray, ele) {

myNewArray = [ele, ...myOriginalArray ]

return myNewArray

}


function destructivelyAddElementToBeginningOfArray (myOriginalArray, ele) {

myOriginalArray.unshift(ele)

return myOriginalArray

}


function addElementToEndOfArray (myOriginalArray, ele) {
  myNewArray2 = [...myOriginalArray, ele]

return myNewArray2
  
}

function destructivelyAddElementToEndOfArray (myOriginalArray, ele) {
  
  myOriginalArray.push(ele)

return myOriginalArray
}


function accessElementInArray (fruitCandy) {
  
  return fruitCandy[2]
  
}


function destructivelyRemoveElementFromBeginningOfArray (fruitCandy) {

  fruitCandy.shift("skittles")

  return fruitCandy

}

function removeElementFromBeginningOfArray (fruitCandy) {
  
  return fruitCandy.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (fruitCandy) {
  fruitCandy.pop()
  
  return fruitCandy
}



function removeElementFromEndOfArray (iceCreams) {
  
 return iceCreams.slice(0, iceCreams.length - 1)
  
}
