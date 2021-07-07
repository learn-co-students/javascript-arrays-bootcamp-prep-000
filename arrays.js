var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,element){
  // return arr.unshift(element)
  return [element,...arr]
} //return new array not modify existing
function destructivelyAddElementToBeginningOfArray(arr,element){
  //*******
  // console.log("****************** ", + arr.unshift(element) +" *******************")
  // return arr.unshift(element)
  arr.unshift(element)
  return arr;
} //alter the original array that's passed in

function addElementToEndOfArray(arr,element){return [...arr,element]}
function destructivelyAddElementToEndOfArray(arr,element){arr.push(element); return arr}
function accessElementInArray(arr,index){return arr[index]}
function destructivelyRemoveElementFromBeginningOfArray(arr){arr.shift(); return arr}
function removeElementFromBeginningOfArray(arr){return arr.slice(1)}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop(); return arr;
}
function removeElementFromEndOfArray(arr){return arr.slice(0,arr.length-1)}
