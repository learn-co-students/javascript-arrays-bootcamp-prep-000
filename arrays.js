var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var int = [].concat(array);
  if(element == 'foo'){
    int.unshift(element);
  }
   return int;
}
function addElementToEndOfArray(array, element){
  var int = [].concat(array);
  if(element == 'foo'){
    int.push(element);
  }
   return int;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var int = array;
  if(element == 'foo'){
    int.unshift(element);
  }
   return int;
}
function destructivelyAddElementToEndOfArray(array, element){
  var int = array;
  if(element == 'foo'){
    int.push(element);
  }
   return int;
}
function accessElementInArray(array, index){
  var int = array[index];
   return int;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  var int = array.shift();
   return array;
}

function addElementToEndOfArray(array, element){
  var int = [].concat(array);
  if(element == 'foo'){
    int.push(element);
  }
   return int;
}
function removeElementFromBeginningOfArray(array){
  var int = [].concat(array);
   return int.slice(1);
}
function removeElementFromEndOfArray(array){
  var int = [].concat(array);
    int.pop();
   return int;
}
function destructivelyRemoveElementFromEndOfArray(array){
  var int = array;
    int.pop();
   return int;
}