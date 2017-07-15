var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = (array, element) => { // non destructive - essentially we'll be using a new array
  return [element, ...array] // array = [0,1,2], element = 'foo', ['foo', 0, 1, 2]
   //return(addElementToBeginningOfArray)
}
//Use the spread operator somewhere in here to modify without mutating.
var destructivelyAddElementToBeginningOfArray = (array,element) => {
  //return(destructivelyAddElementToBeginningOfArray)
  array.unshift(element) // when you destructively add an element, it does the logic, and returns the length of the array
  return array
}

var addElementToEndOfArray=(array, element)=>{
  return [...array, element]
}
var destructivelyAddElementToEndOfArray=(array,element)=>{
  array.push(element)
  return array
}
var accessElementInArray=(array,index)=>{
  return array[index]
}
var removeElementFromBeginningOfArray=(array)=>{
  array.shift()
  return array
}
var removeElementFromEndOfArray=(array)=>{
  array.pop()
  return array
}
