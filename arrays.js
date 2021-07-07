var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(chocolateBars, mars) {
         return [mars, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) {
        chocolateBars.unshift(mars);
        return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,finalelement) {
  return [...chocolateBars,finalelement]
}


function destructivelyAddElementToEndOfArray(chocolateBars,element) {
   chocolateBars.push(element);
   return chocolateBars;
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
chocolateBars.shift();
  return chocolateBars;
}
 function removeElementFromBeginningOfArray(chocolateBars) {
 return chocolateBars.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
   chocolateBars.pop();
   return chocolateBars;
 }
 
 function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
 }
