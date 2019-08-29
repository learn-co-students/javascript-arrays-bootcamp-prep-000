var chocolateBars=["snicker", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(name,element){
 return [element,...name];
}
function destructivelyAddElementToBeginningOfArray(name,element){
  name.unshift(element);
  return name;
}
function addElementToEndOfArray(name,element){
  return [...name,element];
}
function destructivelyAddElementToEndOfArray(name,element){
  name.push(element);
  return name;
}
function accessElementInArray(name,n){
  return name[n];
}
function destructivelyRemoveElementFromBeginningOfArray(name){
  name.shift();
  return name;
}
function removeElementFromBeginningOfArray(name){
  return name.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(name){
  name.pop();
  return name;
}
function removeElementFromEndOfArray(name){
  return name.slice(0,name.length-1);
}