var chocolateBars =["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(a,elem){
    var newArray =[elem,...a];
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr,elem){
   arr.unshift(elem);
   return arr;
}


function addElementToEndOfArray(arr,elem){
 var newArray =arr;
 newArray.push(elem)
 return newArray;
}

function destructivelyAddElementToEndOfArray(arr,elem){
arr.push(elem);
   return arr;
}


function accessElementInArray(arr,index){
   return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
   return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
   return arr.pop();
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0,arr.length-1);
}
