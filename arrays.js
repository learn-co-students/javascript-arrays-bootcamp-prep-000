var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

var addElementToBeginningOfArray = function(array,value){
  array = [value,...array];
  return array;
};

var destructivelyAddElementToBeginningOfArray = function(array,value){
  if(!value){
    return;
  }
  else{
  array[0]=value;
  return array;
  }
};

var addElementToEndOfArray = function(array,value){
  array = [...array,value];
  return array;
};

var destructivelyaddElementToEndOfArray = function(array,value){
  array[array.length]=value;
  return array;
};