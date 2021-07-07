var chocolateBars =  ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = "foo"
var own = [1]


function addElementToBeginningOfArray(element, array){
  return [candyString, ...own]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, candyString];
}


function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
   chocolateBars.push(candyString)
   return chocolateBars
}

function accessElementInArray(array, index){
  return array[index]
}




function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
   return chocolateBars
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}