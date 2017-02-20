var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(name,args){
  const name = [args];
  const name2 =[args,...name];
  return name2;

}

function destructivelyAddElementToBeginningOfArray(name,args){
  var nameArray = name.unshift(args);
  return nameArray;
}

function addElementToEndOfArray(name,args){
  const nameArray = [name];
  const name2 =[...name,args];
  return name2;
}

function destructivelyAddElementToEndOfArray(name,args){
  var nameArray = name.push(args);//push elements onto the end of an array:
  return nameArray;
}

function destructivelyRemoveElementFromBeginningOfArray(name,args){
var nameArray = name.shift();
return array;
}

function accessElementInArray(name,index){
  var nameArray = name;
  return nameArray[index];
  }

function removeElementFromBeginningOfArray(name){
  var nameArray = name;
  name.slice(1);
  return name
}

function destructivelyRemoveElementFromEndOfArray(name){
  var nameArray = name;
  name.slice(0, name.length - 1);
  return nameArray;
}
