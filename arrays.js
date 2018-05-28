var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element){

    var array = [element, ...chocolateBars]
    return array
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){

    chocolateBars.unshift(element)


  return chocolateBars
}


function addElementToEndOfArray(chocolateBars, element){


    var array =  [...chocolateBars, element]

    return array
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

function removeElementFromBeginningOfArray(chocolateBars){
  array = chocolateBars.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  var array = chocolateBars.slice(0, chocolateBars.length - 1)
  return array
}
