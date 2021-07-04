  /** chocolateBars defined as a var and assigned an array containing strings of candy bar names **/
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

  /**
  * addElementToBeginningOfArray takes in an array and an element as an argument and returns a new array
  * with the element appended to the behinning of it
  **/
  function addElementToBeginningOfArray(array, element){
    return [element, ...array];
  }

  /**
  * destructivelyAddElementToBeginningOfArray takes in an array and an element and returns the same array
  * with the new element appended to the beginning of it
  **/
  function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
  }

  /**
  * addElementToEndOfArray takes in an array and an element and returns a new array with the element appended
  * to the end of the original array
  **/
  function addElementToEndOfArray(array, element){
    return [...array, element];
  }

  /**
  * destructivelyAddElementToEndOfArray takes in an array and an element and returns the same array with the
  * element appended to the end of the array
  **/
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
  }

  /**
  * accessElementInArray takes in an array and an index as arguments and returns the element located at the given index
  **/
  function accessElementInArray(array, index){
    return array[index];
  }

/**
 * destructivelyRemoveElementFromBeginningOfArray takes in an array argument and returns the same array without the first element
 **/
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }

  /**
   * removeElementFromBeginningOfArray takes in an array argument and returns a new array with the first element removed
   **/
  function removeElementFromBeginningOfArray(array){
    return array.slice(1);
  }

  /**
   * destructivelyRemoveElementFromEndOfArray takes in an array argument and returns the same array with the last element removed
   **/
  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
  }

/**
 * removeElementFromEndOfArray takes in an array and returns a new array with the last element removed
 **/
  function removeElementFromEndOfArray(array){
    return array.slice(0, array.length - 1);
  }
