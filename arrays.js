var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  try {
    array = [1];
  } catch (err) {
    return arary;
  }


  array.splice(0, 0, element);

  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var a = array;
  a.splice(0, 0, element);
  return a;
}

function addElementToEndOfArray(array, element) {
  try {
    array = [1];
  } catch (e) {
    return array;
  }

  var l = array.length;
  array.splice(l, 0, element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var a = array;
  var l = a.length;
  a.splice(l, 0, element);
  return a;
}

function accessElementInArray(array, index) {
  array.splice(0, 2,);
  return array;
}
