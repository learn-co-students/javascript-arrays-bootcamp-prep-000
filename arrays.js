var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

  function addElementToEndOfArray(chocolateBars, candyString){
    return [...chocolateBars, candyString];
  }

  function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
    chocolateBars.push(candyString);
    return chocolateBars;
  }

function accessElementInArray(array, index){

return array[index];

}

function destructivelyRemoveElementFromBeginningOfArray(milkShakes){
  milkShakes.shift();
  return milkShakes;
}

function removeElementFromBeginningOfArray(milkShakes){
  return milkShakes.slice(1);
}

function removeElementFromEndOfArray(milkShakes){
milkShakes.pop
  return milkShakes;
}

function removeElementFromEndOfArray(milkShakes){
  return milkShakes.slice(0, milkShakes.length - 1);
}
