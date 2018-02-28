var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(arrayIt,element){
  arrayIt.unshift(element)
  return arrayIt
}

function addElementToEndOfArray(array,element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(arrayIt,element){
  arrayIt.push(element)
  return arrayIt
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayIt){
  arrayIt.shift()
  return arrayIt
}

function removeElementFromBeginningOfArray(array){
 return array.slice(1) 
}

function destructivelyRemoveElementFromEndOfArray(arrayIt){
  arrayIt.pop()
  return arrayIt
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1)
  
}


//destructivelyAddElementToBeginningOfArray(chocolateBars,"Hello")