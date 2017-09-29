var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(arr,element){
  arr1=[...arr];
  arr1.unshift(element);
  return arr1;
};
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
};
function addElementToEndOfArray(array,element){
  arr1=[...array];
  arr1.push(element);
  return arr1;

};
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;

};
function accessElementInArray(array,index){
  return array[index];
};
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
};
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(array){
  var array1=array.slice(0,array.length - 1);
  return array1;
};
function removeElementFromBeginningOfArray(arr){
  var arr1=arr.slice(1);
  return arr1;
};
