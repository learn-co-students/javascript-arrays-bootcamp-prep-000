var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
 return [element,...array]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function addElementToEndOfArray(array, element){
  newarray =  [...array, element]
  return newarray
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
  return function callNewArray(){
    console.log(array)
  }
}
function removeElementFromBeginningOfArray(array){
  newarray = array.slice(1)
  return newarray
  return function callNewArray(){
    console.log(newarray)
  }
}

function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
  return function callNewArray(){
    console.log(array)
    }
}

function removeElementFromEndOfArray(array){
  newarray = array.slice(0, array.length - 1)
  return newarray
  return function callNewArray(){
    console.log(newarray)
  }
}
