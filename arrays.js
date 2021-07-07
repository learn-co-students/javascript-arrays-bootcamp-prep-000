var chocolateBars = ["snickers", "hundred grand",'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element){
  let copyArray = [element,...array]
  return copyArray
}
function destructivelyAddElementToBeginningOfArray(array,element){
   array.unshift(element)
   return array
}

function addElementToEndOfArray (array, element){
  let newArray = array.slice()
  newArray.push(element)
  return newArray
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray (array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
   let newArr = array.slice(0,array.length-1)
   return newArr

}
