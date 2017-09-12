var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {

  a.unshift(b);

  return a;
}

function destructivelyAddElementToBeginningOfArray(a, b) {

  a[0]=b;

  return a;
}

function addElementToEndOfArray(a, b) {


  return a.push(b)

}

function destructivelyAddElementToEndOfArray(a, b) {

  a[1] = b;

  return a;


}

function accessElementInArray(a, b) {

  return a[b];
}

function destructivelyRemoveElementFromBeginningOfArray (a) {

  return a.shift();
}

function removeElementFromBeginningOfArray(a) {

  var removedElement = a.slice(0);

  return a;
}

function accessElementInArray(a, b) {

  return a[b-1];
}

function removeElementFromBeginningOfArray (a) {

  var removed = a.slice(1)

  return a;
}


function destructivelyRemoveElementFromEndOfArray (a) {

  a.pop();

  return a;
}

function removeElementFromEndOfArray (a) {
  var remainderArray = a.slice(-2)

  return remainderArray
}
