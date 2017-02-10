var chocolateBars = ['snickers','hundred grand','kitkay','skittles'];

function addElementToBeginningOfArray(chocolateBars,element) {
    chocolateBars = [element,...chocolateBars]
    return chocolateBars
}
addElementToBeginningOfArray(chocolateBars,'foo');

var name = ['alex','tom'];
function destructivelyAddElementToBeginningOfArray (name,element) {
    name.unshift(element);
    return name;
 }
 //destructivelyAddElementToBeginningOfArray(name,'Peter');

 function addElementToEndOfArray(name,element) {
   name = [...name,element];
   return name;
 }
addElementToEndOfArray(name, 'tracy');

function destructivelyAddElementToEndOfArray(name,element) {
  name.push(element);
  return name;
}
addElementToEndOfArray(name, 'ciak');

function accessElementInArray (name,index) {
  return(name[index])
}
accessElementInArray(name,0);

function destructivelyRemoveElementFromBeginningOfArray(array) {
 name.shift();
 return name;
}
destructivelyRemoveElementFromBeginningOfArray(name);

function removeElementFromBeginningOfArray(name) {
  name = name.slice(1);
  return name;                  
}

function removeElementFromEndOfArray(name) {
  name.pop();
  return name;
}

 