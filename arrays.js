var chocolateBars = [ "snickers", "hundred grand","kitkat", "skittles"];


function addElementToBeginningOfArray (array, element) {
  return array = [element,...array]
};

function destructivelyAddElementToBeginningOfArray (array, element) {
     array.unshift(element)
     return array
};

function addElementToEndOfArray (array, element) {
      return array = [...array, element]

};
function destructivelyAddElementToEndOfArray (array,element){
     array.push(element)
     return array
};

function accessElementInArray (array,index) {
    array["arrar","element"]
    return array[2]
};

function removeElementFromBeginningOfArray(array){
  array.shift("array")
  return array
};
function removeElementFromEndOfArray(array){
  array.pop()
  return array
};
