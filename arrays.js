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
  myarray = ["foo", ...myarray];
  return myarray;
}
destructivelyAddElementToBeginningOfArray("testarray", 1);
/*
function destructivelyAddElementToEndOfArray(myarray, foo) {
  myarray.push(`foo`);
  myarray.unshift(`foo`);
  myarray;
  }
destructivelyAddElementToEndOfArray(myarray, 1);
function addElementToEndOfArray(myarray, foo) {
  myarray = [...myarray, `foo`];
  var mynewarray = myarray;
  mynewarray;
}
addElementToEndOfArray(myarray, 1);
function accessElementInArray() {

}
accessElementInArray();
*/
