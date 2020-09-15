var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray, element){
 var newArray =  [element,...myArray] 
  return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray, element){
  
  myArray.unshift(element)
  return myArray
}

function addElementToEndOfArray(myArray, element){
  var newArray = [...myArray,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, element) {
  myArray.push(element)
  return myArray
}

function accessElementInArray(myArray, index){
  var element = myArray[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
    myArray.shift()
    
    return myArray
}

function removeElementFromBeginningOfArray(myArray){
  var newArray = myArray.slice(1)
  return newArray
}




