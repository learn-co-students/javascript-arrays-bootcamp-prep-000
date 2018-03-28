function addElementToBeginningOfArray(array, element){
  const moreAr = [element,...array];
  return moreAr;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray (array, element){
  return array.push(element)
}

function destructivelyAddElementToEndOfArray(array, element){
  const moreArr = [...array, element]
  return moreArr
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(array.length(-1));
}


