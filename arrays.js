var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];




function addElementToBeginningOfArray(array, element){
  [element, ...array];
  return array;
  
}

addElementToBeginningOfArray(chocloateBars, reeses);



function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return chocolateBars;
  
}

destructivelyAddElementToBeginningOfArray(chocolateBars, reeses);



function addElementToEndOfArray(array, element){
  return [element, ...array];
  
}

addElementToEndOfArray(chocolateBars, reeses);



function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
  
}

destructivelyAddElementToEndOfArray(chocolateBars, reeses);



function accessElementInArray(array, index){
 
  return array[index];
  
}

accessElementInArray(chocolateBars, 1);



function destructivelyRemoveElementFromBeginningOfArray(array){
  chocolateBars.shift();
  return chocolateBars;
  
}


function removeElementFromBeginningOfArray(array){
  chocolateBars.slice(1);
  return chocolateBars;
  
}


function destructivelyRemoveElementFromEndOfArray(array){
  chocolateBars.pop();
  return chocolateBars;
  
}


function removeElementFromEndOfArray(array){
  newChocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return newChocolateBars;
  
}


