var chocolateBars= ['snickers', 'hundred grand ', 'kitkat', 'skittles'];


//Adding an element to the beginning of an array______________
function addElementToBeginningOfArray(array, element) {
  
  var newArray = [ element, ...array]

  return( newArray)

}

function destructivelyAddElementToBeginningOfArray(array, element) {

 array.unshift(element)
 
 return array
}


//Adding an element at the end of an array____________________
function addElementToEndOfArray(array, element) {
  
  var newArray = [ ...array, element]

  return( newArray)

}

function destructivelyAddElementToEndOfArray(array, element) {

 array.push(element)
 
 return array
}


//Accessing an array__________________________________________
function accessElementInArray(array, index){
  
  return array[index]
}


//Removing an element at the beginning of an array____________
function destructivelyRemoveElementFromBeginningOfArray(array){
  
  array.shift()
  
  return array
}

function removeElementFromBeginningOfArray(array){
  
  array = array.slice(1)
  
  return array
}


//Removing an element at the end of an array___________________
function destructivelyRemoveElementFromEndOfArray(array){
  
  array.pop()
  
  return array
}

function removeElementFromEndOfArray(array){
  
  array = array.slice(0, array.length - 1)
  
  return array
}