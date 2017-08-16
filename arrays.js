var chocolateBars = ["Snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array[],newEle) {
var oldArray = array
oldArray = [newEle, ...oldArray]
return oldArray[0]
}
