var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
    array.unshift(`${element}`)
    return chocolateBars
}

function descructivelyAddElementToBeginningOfArray(array, element){
  ["twix",...array]
  return chocolateBars
}

addElementToBeginningOfArray(chocolateBars, "twix")
