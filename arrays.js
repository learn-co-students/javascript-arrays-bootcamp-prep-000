var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(pArray,p2) {
  return [p2,...pArray]
}

function addElementToEndOfArray(pArray,p2){
  return[...pArray,p2];
}

function destructivelyAddElementToEndOfArray(pArray,p2){
 pArray.push(p2);
 return pArray
}

function destructivelyAddElementToBeginningOfArray(pArray,p2){
  pArray.unshift(p2);
  return pArray
}

function accessElementInArray(pArray,index){
  return pArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(pArray){
  pArray.shift();
  return pArray
}

function removeElementFromBeginningOfArray(pArray){
  return pArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (pArray){
 pArray.pop()
 return pArray;
  }
  
  function removeElementFromEndOfArray (pArray){
    return pArray.slice(0,pArray.length-1);
  }
    
    