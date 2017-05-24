var chocolateBars = ["snickers",
"hundred grand",
"kitkat",
"skittles"];

//add element to the beginning,return a new array *not modified original*
function addElementToBeginningOfArray(array, element){
  array1 = [element,...array];
  return array1;
}

//should alter the original array it's passed in
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  console.log(array);
}

//**should not** alter the original array
function addElementToEndOfArray(array, element){
  array2 = [...array, element];
  console.log(array2);

}
//should alter the origianl array
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  console.log(array);
}

//return element at the index
function accessElementInArray(array,index){
  console.log(array[index]);
}

//return entire array and **should** mutate the array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  console.log(array);
}

//removes first element,and **should not** mutate the underlying array
function removeElementFromBeginningOfArray(array){
  array3 = array.slice(1);
  console.log(array3);
}

//remove last element,**should** mutate the array
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  console.log(array);
}
