var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(arraya,elementa) {
  var moddeda  = [elementa,...arraya];
  return moddeda;
}

function destructivelyAddElementToBeginningOfArray(arrayb,elementb) {
  arrayb.unshift(elementb);
  return arrayb;
}

function addElementToEndOfArray(arrayc,elementc) {
  var moddedb = [...arrayc, elementc];
  return moddedb;
}

function destructivelyAddElementToEndOfArray(arrayd, elementd) {
  arrayd.push(elementd); //you cannot write return arrayd.push(elementd) on one line; this line on its own returns something
  //so you need to return the input array on separate line like below//
  return arrayd;
}

function accessElementInArray(arraye,indexe) {
  return arraye[indexe];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayf,elementf) {
  arrayf.shift();
  return arrayf;
}
function destructivelyRemoveElementFromEndOfArray(arrayx) {
  arrayx.pop();
  return arrayx;
}

function removeElementFromBeginningOfArray(arrayg) {
  var moddedc = arrayg.slice(1);//this will return back the array "array" starting from index 1 to its tail.//
  return moddedc;
}

function removeElementFromEndOfArray(array) {
  var moddedd = array.slice(0, array.length-1);
  return moddedd;
}
