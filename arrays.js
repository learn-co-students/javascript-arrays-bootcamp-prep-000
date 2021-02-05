var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
addElementToBeginningOfArray = (arr, element) => {
  return newArray = [element, ...arr];
}

destructivelyAddElementToBeginningOfArray = (arr, element) => {
  arr.unshift(element);
  return arr;
}

addElementToEndOfArray = (arr, element) => {
  return newArray = [...arr, element];
  
}

  
  destructivelyAddElementToEndOfArray = (arr, element) => {
    arr.push(element);
    return arr;
  }
  
  accessElementInArray = (arr, index) => {
    return arr[index];
  }
  
  destructivelyRemoveElementFromBeginningOfArray = (array) => {
    array.shift();
    return array;
  }
  
  removeElementFromBeginningOfArray = (array) => {
  return newArray =  array.slice(1);
  }
  
  destructivelyRemoveElementFromEndOfArray = (array) => {
    array.pop();
    return array;
  }
  
  removeElementFromEndOfArray = (arr) => {
    return newArray = arr.slice(0, arr.length - 1);
  }