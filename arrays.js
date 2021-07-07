var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function destructivelyAddElementToBeginningOfArray(arr, e){
  for(var i=arr.length; i>0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = e;
  return arr;
}

function addElementToBeginningOfArray(arr, e){
  var newArray = []
  for(var i=arr.length; i>0; i--){
    newArray[i] = arr[i-1];
  }
  newArray[0] = e;
  return newArray;
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  for(var i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1]
  }
  arr.pop()
  return arr;
  
}


function accessElementInArray(arr, i){
  return arr[i]
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length-1);
}