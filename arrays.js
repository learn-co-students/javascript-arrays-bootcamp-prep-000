var chocolateBars=[
  "snickers",
  "hundred grand",
   "kitkat",
   "skittles"]

   chocolateBars;
   element = 0; array = ["first", "second"];
   function addElementToBeginningOfArray(array, element) {
       array = [`foo`, ...array];
       var newarray = array;
       return array;
   }
   addElementToBeginningOfArray(array, 1);
   function destructivelyAddElementToBeginningOfArray(array, foo) {
       array.unshift(foo);
        return array

   }
   destructivelyAddElementToBeginningOfArray(array,1);


   function addElementToEndOfArray(array, element) {
       array = [...array,`foo`]
       var newarray = array
              return array
   }
   addElementToEndOfArray(array, 1);
   function destructivelyAddElementToEndOfArray(array,foo) {
     array.push(foo)
     return array

   }
   destructivelyAddElementToEndOfArray(array, 1);
function accessElementInArray(array,index){
  return array[index]
}
accessElementInArray(array,3)
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array=array.slice(1)
  return array

}
function removeElementFromEndOfArray(array){
  array=array.slice(0,array.length-1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
