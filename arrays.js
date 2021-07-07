var chocolateBars = ["snicker","hundred grand","kitkat","skittles"]



function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
  return chocolateBars
}

function addElementToBeginningOfArray(chocolateBars, element){

return [element, ...chocolateBars]
}

function addElementToEndOfArray(chocolateBars, element){

  return [...chocolateBars, element]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element){
  chocolateBars.shift(element)
  return  chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0,chocolateBars.length-1)
  return chocolateBars
}