function chocolateBars(){
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}
function addElementToBeginningOfArray(array,element){
    var aux = array.slice();
    aux.unshift(element);

    return aux;
}


function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element){
  var aux = array.slice();
  aux.push(element);
  return aux;
}

function destructivelyAddElementToEndOfArray(array, element){
  var aux = array;
  aux.push(element);
  return aux;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var aux = array.slice();
  aux.shift();
  return aux;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var aux = array.slice();
  aux.pop();
  return aux;
}

var array = [];
console.log(addElementToBeginningOfArray(array,'foo')[0]);
console.log(array);
