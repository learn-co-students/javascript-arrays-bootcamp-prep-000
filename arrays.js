var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
    newArray = array.slice();
    newArray.unshift(element);
   return newArray
}

function destructivelyAddElementToBeginningOfArray(xRay, newEl) {
  xRay.unshift(newEl)
 return xRay

}

function addElementToEndOfArray(xRay, element){
  newArray = xRay.slice();
  newArray.push(element);
  return newArray
  
}
function accessElementInArray(xRay, index) {
  return xRay[index]
}

function destructivelyRemoveElementToBeginningOfArray (xRay) {
  xRay.shift();
  return xRay;
}

function destructivelyAddElementToEndOfArray(xRay, element){
  xRay.push(element);
  return xRay
}

function removeElementFromBeginningOfArray (xRay){
  return xRay.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(xRay) {
  xRay.pop()
  return xRay;
}

function destructivelyRemoveElementFromBeginningOfArray(xRay, element){
  xRay.shift()
  return xRay
}

function removeElementFromEndOfArray(xRay){
  return xRay.slice(0, xRay.length - 1);
}

