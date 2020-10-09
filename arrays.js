function addElementToBeginningOfArray(arr,element){
  var a = [element,...arr];
  return a;
}
function destructivelyAddElementToBeginningOfArray(arr,element){
  arr.unshift(element);
  return arr;
}
var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
function addElementToEndOfArray(arr,element){
  newArray = [...arr,element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(arr,element){
  arr.push(element);
  return arr;
}
function accessElementInArray(arr,index){
  return arr[index];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  newArray = arr.slice(1);
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  newArray = arr.slice(0,arr.length-1);
  return newArray;
}
var poo = ["candy","cookies","ice cream"];
var poo2= removeElementFromBeginningOfArray(poo);
console.log(poo2.length);
