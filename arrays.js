var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array, element)
  { return [element,...array]
}
addElementToBeginningOfArray(chocolateBars,"payday");

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
destructivelyAddElementToBeginning(chocolateBars,"baby ruth")

function addElementToEndOfArray(array,element){
  return [...array, element]
  
}
addElementToEndOfArray(chocolateBars,"payday")

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
destructivelyAddElementToEndOfArray(chcolateBars, "payday")

function accessElementInArray(array,index){
  return array[index]
}
accessElementInArray(chocolateBars,0);

const carModels = ["Honda","Toyota","Lexus","BMW"]
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
destructivelyRemoveElementFromBeginningOfArray(carModels); 
var cats = ["Mia", "Tulip","Harry"]
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
removeElementFromBeginningOfArray(cats);

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
var iceCream = ["chocolate","vanilla","strawberry"]
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
  
}
removeElementFromEndOfArray(iceCream);
