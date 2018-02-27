var chocolateBars = [
"grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) {
  const newChocolateBars = [element, ...chocolateBars]
  return newChocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element) {
  const newChocolateBars = [...chocolateBars, element]
  return newChocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  console.log("CHECK THIS OUT ",newArray)
  return newArray
}

function removeElementFromEndOfArray(chocolateBars){
  var chocolate = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolate
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

removeElementFromBeginningOfArray(chocolateBars)

