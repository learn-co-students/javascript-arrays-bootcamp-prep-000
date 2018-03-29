chocolateBars=[ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  const moreAr = [element,...array];
  return moreAr;
}


function destructivelyAddElementToBeginningOfArray(xc, bv){
   
   xc.unshift(bv);
   return xc
}

function addElementToEndOfArray (array, element){
  const moreArr = [...array, element];
  return moreArr;

}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(lal){
  
  lal.pop();
  return lal;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}


