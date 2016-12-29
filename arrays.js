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
function accessElementInArray(myarray, myindex) {
  myindex = parseInt(myindex);
  var mytmparray = myarray[myindex];
  return mytmparray;
}
accessElementInArray(myarray, 1);
function removeElementFromBeginningOfArray(myarray) {
  myarray.shift();
  return myarray;
}
removeElementFromBeginningOfArray(myarray);
function removeElementFromEndOfArray(myarray) {

}
removeElementFromEndOfArray(myarray);
function destructivelyRemoveElementFromBeginningOfArray(myarray){
  myarray.pop(`myarray.length`);
  return myarray;
}
destructivelyRemoveElementFromBeginningOfArray(myarray);
