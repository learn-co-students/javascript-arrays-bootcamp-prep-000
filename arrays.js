var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];
//addElementToBeginningOfArray
function addElementToBeginningOfArray(Array, element){
     Array = [element, ...Array]
     return Array;
}
//destructivelyAddElementToBeginningOfArray
function destructivelyAddElementToBeginningOfArray(Array, element){
Array.unshift(element); 
return Array;
}
//addElementToEndOfArray
function addElementToEndOfArray(Array, element){
  Array = [...Array, element]
     return Array;
}
//destructivelyAddElementToEndOfArray
function destructivelyAddElementToEndOfArray(Array, element){
  Array.push(element); 
return Array;
}

//accessElementInArray
function accessElementInArray(Array, index){
    return Array[index];
}
//destructivelyRemoveElementFromBeginningOfArray
function destructivelyRemoveElementFromBeginningOfArray(Array){
    var b=Array
    b.shift()
    return b;
}
//removeElementFromBeginningOfArray
function removeElementFromBeginningOfArray(Array){
  Array=Array.slice(1)
  return Array;
}
//destructivelyRemoveElementFromEndOfArray
function destructivelyRemoveElementFromEndOfArray(Array) {
    Array.pop()
    return Array;
}
//removeElementFromEndOfArray
function removeElementFromEndOfArray(Array){
    return Array.slice(0, Array.length-1)
}
