var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  var bob = [arr]
  bob = [element, ...arr]
  return bob
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  var bob = arr
  bob.unshift(element)
  return bob
}

var iceCreams = ['chocolate', 'vanilla'];
function removeElementFromEndOfArray(arr){
  var ice = [arr];
  ice = ice.slice(-1)
}


function addElementToEndOfArray(arr, element){
  var bob = [arr]
  bob = [...arr, element]
  return bob;
}

function destructivelyAddElementToEndOfArray(arr, element){
  var bob = arr;
  bob.push(element); 
  return bob;
}

function accessElementInArray(array, index){
  var bob = array; 
  return bob[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  var bob = arr;
  bob.shift();
  return bob; 
}

function removeElementFromBeginningOfArray(arr){
  var bob = arr;
  bob = bob.slice(1);
  return bob; 
}

function removeElementFromEndOfArray(arr){
  var bob = arr;
  return bob.slice(0, bob.length-1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  var bob = arr;
  bob.pop(); 
  return bob;
}