var chocolateBars=['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(a,element){
      return  a=[element,...a];
}
function destructivelyAddElementToBeginningOfArray(a,element){
  a.unshift(element);
  return a;
}

function addElementToEndOfArray(a,element){
  //a.push(element);
  a=[...a,element];
  return a;
}
function destructivelyAddElementToEndOfArray(a,element){
 a.push(element);
  return a;
}

function accessElementInArray(a,index){
  return a[index];
  
}
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
  a=a.slice(1);
  return a;
}
function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a;
}
function removeElementFromEndOfArray(a){
 a= a.slice(0,a.length-1);
  return a;
}
addElementToEndOfArray(chocolateBars,"tob");
console.log(chocolateBars);
