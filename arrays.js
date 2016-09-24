
function addElementToBeginningOfArray(input, element){
   var result = [element, ...input];
   return result;
}

function destructivelyAddElementToBeginningOfArray(input, element){

   input.unshift(element);
   return input;
}

function addElementToEndOfArray(input , element){
   return [...input, element];
}
function destructivelyAddElementToEndOfArray(input , element){
   input.push(element);
   return input;
}
function accessElementInArray(input,index){
   return input[index];
}
function removeElementFromBeginningOfArray(input){
   input.shift();
   return input;
}
function removeElementFromEndOfArray(input){
   input.pop();
   return input;
}

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
