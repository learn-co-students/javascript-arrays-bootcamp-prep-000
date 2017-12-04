var ingredient1 = 'bread'
var ingredietn2 = 'mild cheese'
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = 'tomato'
var ingredient6 = 'garlic'

var chocolateBars = ['snickers','hundred grands','kitkat', 'skittles']

function addElementToBeginningOfArray(a, b){
  var x = [b,...a];
  return x;
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a,b){
  var x = [...a,b];
  return x;
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b);
  return a;
}

function accessElementInArray(a,i){
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
  var x = a.slice(1);
  return x;
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a;
}

function removeElementFromEndOfArray(a){
  return a.slice(0, a.length - 1);
}
