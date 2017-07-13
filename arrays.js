var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,element){
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
 array.unshift(element)
 return(array)
}
function addElementToEndOfArray(array,element){
  array.push(element)
  return(array)
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return(array)
}
function accessElementInArray(array,index){
  return(array[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return(array)
}
function removeElementFromBeginningOfArray(array){
return  array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return(array)
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

//function destructivelyAddElementToBeginningOfArray(element,array){

//}
//var arrayOfNames =
//addElementToBeginningOfArray(["steve", "Jimmy", "bob", "alice"], "billy")
//addElementToBeginningOfArray([7,6,5,4,3,2], 8)

//..., pop, push, shift, unshift, slice, splice, length

// function nameOfFunction(input1, input2){
//   //do some stuff
//   return
// }

//4 things you can do in programming:
//SET the value of a variable
//GET the value of a variable
//DEFINE the steps of a funciton
//EXECUTE the steps of a function
