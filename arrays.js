var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arry,elem){
    return [elem,...arry]
}
addElementToBeginningOfArray(chocolateBars,"Skor")

function destructivelyAddElementToBeginningOfArray(arry,elem){
  arry.unshift(elem)
  return arry
}
destructivelyAddElementToBeginningOfArray(chocolateBars,"Payday")

function addElementToEndOfArray(arry,elem){
  return [...arry,elem]
}
addElementToEndOfArray(chocolateBars,"Mr Goodbar")

function destructivelyAddElementToEndOfArray(arry,elem){
  arry.push(elem)
  return arry
}
destructivelyAddElementToEndOfArray(chocolateBars,"Mr Goodbar")

function accessElementInArray(arry,indx){
  return arry[indx]
}

function destructivelyRemoveElementFromBeginningOfArray(arry){
  arry.shift()
  return arry
}

function removeElementFromBeginningOfArray(arry){
  return arry.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arry){
  arry.pop()
  return arry
}

function removeElementFromEndOfArray(arry){
  return arry.slice(0, arry.length -1)
}


//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

//console.log(chocolateBars)
