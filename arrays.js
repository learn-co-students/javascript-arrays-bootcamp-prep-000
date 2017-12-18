var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var superheroines = ["catwoman", "she-hulk", "mystique"];
 
 
const cities = ["New York", "San francisco"];

function addElementToBeginningOfArray(a,b) { 
const c = [b, ...a]
return c;
}
addElementToBeginningOfArray(cities,"NJ")



function destructivelyAddElementToBeginningOfArray(a,b) { 
a.unshift (b)
return a;
}
destructivelyAddElementToBeginningOfArray(cities,"NJ")


function addElementToEndOfArray(a,b) { 
const c = [...a, b]
return c;
}
addElementToEndOfArray(cities,"NJ")



function destructivelyAddElementToEndOfArray(a,b) { 
a.push (b)
return a;
}
destructivelyAddElementToEndOfArray(cities,"NJ")

function accessElementInArray(a,b){
  return (a[b]);
}
accessElementInArray(cities,1)

const days= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

function destructivelyRemoveElementFromBeginningOfArray(a){ 
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a) {
  const c = a.slice(1); 
  return c;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a) {
  const c = a.slice(0, a.length - 1);
  return c;
}
removeElementFromEndOfArray(days)