chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
const array = chocolateBars
var element = "Milky Way"

function addElementToBeginningOfArray(array, element) {

  const moreChocolateBars = [element, ...array]
  return moreChocolateBars

}



function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array

}

function addElementToEndOfArray(array, element) {

  const moreChocolateBars = [...array, element]
  return moreChocolateBars

}



function destructivelyAddElementToEndOfArray(array, item) {

  array.push(item)
  return array

}

function accessElementInArray(array, i){
  i = 2
  return array[i]

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  fewerChocolateBars = array.slice(1)
  return fewerChocolateBars
}



function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return array
}

function removeElementFromEndOfArray(array) {
fewerChocolateBars = array.slice(0, array.length-1)
return fewerChocolateBars
}
