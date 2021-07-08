var ingredient1="bread"
var ingredient2="mild cheese"
var ingredient3="sharp cheese"
var ingredient4="butter"
var ingredient5="tomato"
var ingredient6="garlic"


var chocolateBars=['snickers','hundred grand','kitkat','skittles'];

var addElementToBeginningOfArray=function(array,newEl){
  return [newEl,...array];
};

var destructivelyAddElementToBeginningOfArray=function(array,newEl){
  array.unshift(newEl);
  return array;
};

var addElementToEndOfArray=function(array,newEl){
  return [...array,newEl];
};

var destructivelyAddElementToEndOfArray=function(array,newEl){
  array.push(newEl);
  return array
};

var accessElementInArray=function(array,ind){
  return array[ind];
}

var destructivelyRemoveElementFromBeginningOfArray=function(array,newEl){
  array.shift(newEl);
  return array;
}

var removeElementFromBeginningOfArray=function(array){
  return array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray=function(array){
  array.pop();
  return array;
}

var removeElementFromEndOfArray=function(array){
  return array.slice(0,array.length-1)
}