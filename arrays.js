var chocolateBars=["snickers", "hundred grand"," kitkat", "skittles"];

function addElementToBeginningOfArray(x[],y){
  var array = x.push(y);
  return array;
}

function destructivelyAddElementToBeginningOfArray(a[],b){
  var array = a.push(b);
  return array;
}

function addElementToEndOfArray(arr[], element){
  return arr[].shift(element)
}

function destructivelyAddElementToEndOfArray(arr[], element){
  return arr.shift(element);
}

function removeElementFromBeginningOfArray(arr[]){
  var ar = arr.shift();

  return ar;
}

function removeElementFromEndOfArray(a[]){
  var array = a.pop();

  return array;
}
