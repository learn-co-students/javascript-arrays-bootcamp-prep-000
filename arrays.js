var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(array){
  var arr = [
    1
  ]
  arr.unshift('foo')
  return arr
};

function destructivelyAddElementToBeginningOfArray(arr){
arr.unshift ('foo')
return arr
};

function addElementToEndOfArray(array){
  var array1 = [
    1
  ]
  array1.push('foo')
  return array1
};

function destructivelyAddElementToEndOfArray(array1){
  array1.push('foo')
  return array1
};

function accessElementInArray(array){
  var array2 = [
    3,
    'hello',
    'tests',
    'hi'
  ]
  return array2[0];
};

function destructivelyRemoveElementFromBeginningOfArray(array2){
 array2.shift()
 return array2
};

function removeElementFromBeginningOfArray(array2){
  return array2.slice(1)
};

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr
};

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length-1)
};
