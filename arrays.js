var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var begArray = array;
  var addArray = element;
  var finArray = [addArray, ...begArray];
  return finArray;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  var begArray = array;
  var addArray = element;
  begArray.unshift(element);
  return begArray;
}

function addElementToEndOfArray(array, element) {
    var begArray = array;
    var addArray = element;
    var finArray = [...begArray, element];
    return finArray;
}

  function destructivelyAddElementToEndOfArray(array, element) {
      var begArray = array;
      var addArray = element;
      begArray.push(element);
      return begArray;
  }

  function accessElementInArray(array, index) {
      return (array[index]);
}

  function destructivelyRemoveElementFromBeginningOfArray(array) {
      var begArray = array;
      begArray.shift();
      return begArray;
  }

  function removeElementFromBeginningOfArray(array) {
      var begArray = array;
      var finArray = begArray.slice(1);
      return finArray;
  }

  function destructivelyRemoveElementFromEndOfArray(array) {
      var begArray = array;
      begArray.pop();
      return begArray;
  }

  function removeElementFromEndOfArray(array) {
    begArray = array;
    return begArray.slice(0, begArray.length - 1);
    }
