var chocolateBars = [
  'snickers',
   'hundred grand',
    'kitkat',
     'skittles'
]
chocolateBars;
foo = 0; myarray = ["entry0", "entry1"];
function addElementToBeginningOfArray(myarray, foo) { //  var foo; var myarray = ["entry0", "entry1"];
    myarray = [`foo`, ...myarray];
    var mynewarray = myarray;
    return myarray;
}
addElementToBeginningOfArray(myarray, 1);
function destructivelyAddElementToBeginningOfArray(myarray, foo) {
//  var holdfoo = foo;
  myarray.unshift(foo);
  return myarray;
 }
destructivelyAddElementToBeginningOfArray(myarray, 1);

function addElementToEndOfArray(myarray, foo) {
  var mynewarray = [...myarray, `foo`];
  return mynewarray;
}
addElementToEndOfArray(myarray, 1);
function destructivelyAddElementToEndOfArray(myarray, foo) {
  myarray.push(`foo`);
  return myarray;
}
destructivelyAddElementToEndOfArray(myarray, 1);
function accessElementInArray(myarray, myidx) {
  myidx = parseInt(myidx);
  var mytmparray = myarray[myidx];
  return mytmparray;
}
accessElementInArray(myarray, 1);
}
accessElementInArray(myarray, 1);
function removeElementFromBeginningOfArray(myarray) {

}
removeElementFromBeginningOfArray(myarray);
function removeElementFromEndOfArray(array) {

}
removeElementFromEndOfArray(myarray);
