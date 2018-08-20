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
  array.shift();
  return chocolateBars;
  
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars);



function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array;
  
}

removeElementFromBeginningOfArray(chocolateBars);


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
  
}

destructivelyRemoveElementFromEndOfArray(chocolateBars);




function removeElementFromEndOfArray(array){
  newChocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return newChocolateBars;
  
}


