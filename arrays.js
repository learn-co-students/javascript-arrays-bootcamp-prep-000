var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(arr, element){
   let newArr = [...arr];
   newArr.unshift(element);
   return newArr;
 }

function destructivelyAddElementToBeginningOfArray(arr, element){
   arr.unshift(element);
   return arr;
}



function addElementToEndOfArray(arr, element){
   let newArr = [...arr];
   newArr.push(element);
   return newArr;
 }

function destructivelyAddElementToEndOfArray(arr, element){
   arr.push(element);
   return arr;
}


function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  let newArr = arr.slice(1);
  return newArr;
}


function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}


function removeElementFromEndOfArray (arr){
  let newArr = arr.slice(0, arr.length - 1);
  return newArr;
}
