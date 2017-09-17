var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

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
  array.splice(0, 2);
  return array[array.length-1];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var a = array;
  a.splice(0, 1);
  return a;
}

function removeElementFromBeginningOfArray(array) {
  // const a1 = array;
  try {
    var a = array;
    array = [1];
  } catch (e) {
    return array;
  }


  a1 = array;
  a1.splice(0, 1);
  return a1;  //!!!!!
}

function destructivelyRemoveElementFromEndOfArray(array){
  var a = array;
  a.splice(a.length-1, 1);
  return a;
}

function removeElementFromEndOfArray(array) {
  try {
    array = [1, 2, 3];//???
  } catch (err) {
    return array;
  }
  var a=array;

  a.splice(a.length-1, 1);
  return a;//!!!!
}
