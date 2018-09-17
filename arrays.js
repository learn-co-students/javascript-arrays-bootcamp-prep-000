var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

var superheroines = ["catwoman", "she-hulk", "mystique"];
superheroines.push("wonderwoman");

const cats = ["Milo","Garfield"]
const moreCats = ["Felix",...cats]

function addElementToBeginningOfArray(array,element){
 return [element,...array];
}
  
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array
}

var entrepreneurs = ["Elizabeth Holmes","Laurene Powell Jobs", "Arianna Huffington"];
console.log(entrepreneurs[0]);
var bio = " is the co-founder and editree-in-chief of The Huffington Post";
console.log(entrepreneurs[2]+bio);
entrepreneurs[9]

function accessElementInArray(array, index){
  return array[index]
}

const days = ["Monday", "Tuesday", "Wednesday"]
days.shift //removes the element from the beginning of an arrray

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
 return array.slice(0,-1)
}