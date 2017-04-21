var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(arr,el){
 var newArr = [el, ...arr];
 return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  arr.unshift(el);
  return arr;
}

function addElementToEndOfArray(arr,el){
 var newArr = [...arr, el];
 return newArr;
}

function destructivelyAddElementToEndOfArray(arr,el){
  arr.push(el);
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
  var newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  var newArr = arr.slice(0, arr.length - 1);
  return newArr;
}
