var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element1){
  return [element1,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element2){
  chocolateBars.unshift(element2)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element3){
  return [...chocolateBars,element3]
}

function destructivelyAddElementToEndOfArray(chocolateBars, element4){
  chocolateBars.push(element4)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length-1)
}
