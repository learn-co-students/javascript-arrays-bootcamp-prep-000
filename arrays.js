var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(getA,addX){
  return  [addX, ...getA]
}

function destructivelyAddElementToBeginningOfArray(getA,addX){
  getA.unshift(addX);
  return getA
}

function addElementToEndOfArray(getA,addX){
  return  [...getA, addX]
}

function destructivelyAddElementToEndOfArray (getA,addX){
  getA.push(addX);
  return getA
}

function accessElementInArray (getA, getIndex) {
  return getA[getIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(getArray){
getArray.shift();
return getArray
}

function removeElementFromBeginningOfArray (getArray){
    return getArray.slice(1);

}

function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
}

function removeElementFromEndOfArray(array){
   return array.slice(0, array.length - 1)
 }
