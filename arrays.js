var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];              //create array and fill it with 4 items

function addElementToBeginningOfArray(array, element){                                //define function with 2 parameters
  const array1 = [element, ...array];                                                 //adding element to beginning of array without altering the original array by storing it in a new const
  return array1;                                                                      //return the contents of new const
}

function destructivelyAddElementToBeginningOfArray(array, element){                   //define function with 2 parameters
  array.unshift(element);                                                             //add element to the beginning of array
  return array;                                                                       //return the contents of array
}

function addElementToEndOfArray(array, element){                                      //define function with 2 parameters
  const array2 = [...array, element];                                                 //adding element to end of array without altering the original array by storing it in a new const
  return array2;                                                                      //return the contents of new const
}

function destructivelyAddElementToEndOfArray(array, element){                        //define function with 2 parameters
  array.push(element);                                                               //add element to the end of array
  return array;                                                                      //return the contents of array
}

function accessElementInArray(array, index){                                         //define function with 2 parameters
  return array[index];                                                               //return array value at index position 'index'
}

function removeElementFromBeginningOfArray(array){                                    //define function with 1 parameter
  array.shift();                                                                      //remove the first value in array
  return array;                                                                       //return the contents of array
}

function removeElementFromEndOfArray(array){                                          //define function with 1 parameter
  array.pop();                                                                        //remove the last value in array
  return array;                                                                       //return the contents of array
}
