var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(c, b){
  return c[b];
}

accessElementInArray();


function addElementToBeginningOfArray(a, b){
  return [b, ...a];
}
addElementToBeginningOfArray();



function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b);
  return a;

}
destructivelyAddElementToBeginningOfArray();



function addElementToEndOfArray(c, d) {
  return [...c, d];
}
addElementToEndOfArray();



function destructivelyAddElementToEndOfArray(c, d){
  c.push(d);
  return c;
}

destructivelyAddElementToEndOfArray();


function destructivelyRemoveElementFromBeginningOfArray(g){
  g.shift();
  return g;
}
destructivelyRemoveElementFromBeginningOfArray();


function removeElementFromBeginningOfArray(a){
  return a.slice(1);
}
removeElementFromBeginningOfArray();




function destructivelyRemoveElementFromEndOfArray(b){
  b.pop();
  return b;
}
destructivelyRemoveElementFromEndOfArray();




function removeElementFromEndOfArray(j) {
  return j.slice(0, j.length - 1);
}

removeElementFromEndOfArray();
