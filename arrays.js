var chocolateBars=["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element){
  array.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(array,element){
  chocolateBarsNew=array.unshift(element)
}
function addElementToEndOfArray(array,element){
  chocolateBarsNew=array.push(element)
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
}
function accessElementInArray(array,index){
  array[index]
}
