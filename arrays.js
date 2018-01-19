var ingredient1 = 'bread';
var ingredient2 = 'mild cheese';
var ingredient3 = 'sharp cheese';
var ingredient4 = 'butter';
var ingredient5 = 'tomato';
var ingredient6 = 'garlic';

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
//  ['butterfinger', ...chocolateBars];
  
  function addElementToBeginningOfArray(arr, element){
    var newArr = [element,...arr]
    return newArr;
    
  }

  function destructivelyAddElementToBeginningOfArray(arr,x){
    arr.unshift(x);
    return arr;
  }
  
  function addElementToEndOfArray(arr,x){
    var newArr = [...arr,x];
    return newArr;
  }
  
  function destructivelyAddElementToEndOfArray(arr,x){
    arr.push(x);
    return arr;
  }
  
  function accessElementInArray(arr,element){
    return arr[element];
    
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(arr){
     arr.shift();
     return arr;
  }
    
  function removeElementFromBeginningOfArray(arr){
    return arr.slice(1);
  }  
  
  function destructivelyRemoveElementFromEndOfArray(arr){
     arr.pop();
     return arr;
  }
  
  function removeElementFromEndOfArray(arr){
    return arr.slice(0, arr.length -1);
  }
  