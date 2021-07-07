var chocolateBars = [ "snickers", "hundred grand", "kitkat", "Skittles"];

//begining of array
function addElementToBeginningOfArray (array, element){
  array.unshift (element)
    return array
}

//begining of array with a new variable
function addElementToBeginningOfArray (array, element){
  newArray = [element, ...array]
    return newArray
}

//begining of array with same variable
function addElementToBeginningOfArray (array, element){
  array = [element, ...array]
      return array
}

//des begining of array with new variable
function destructivelyAddElementToBeginningOfArray (array, element){
  newArray = [element, ...array]
   return newArray
}

//des begining of array with same variable
function destructivelyAddElementToBeginningOfArray (array, element){
  array = [element, ...array]
  return array
}

//des begining of array 
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift (element)
     return array
}

//end of array new variable
function addElementToEndOfArray (array, element){
  newArray = [...array, element]
     return newArray
}

//des end of array same variable
function destructivelyAddElementToEndOfArray (array, element){
  array.push (element)
     return array
}

//Acces example
function accessElementInArray (array, index){
  return array[index]
}

//removing begining of Array using shift
function destructivelyRemoveElementFromBeginningOfArray (array){
array.shift()
return array
}

//removing begining of Array using slice
function removeElementFromBeginningOfArray (array){
  return array.slice(1)
}

//removing using pop 
function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
  return array
}

//removing last using slice
function removeElementFromEndOfArray(array){
 return array.slice(0, array.length -1)
  }

