var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";
var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
chocolateBars.push("Reese");
console.log(chocolateBars);


function addElementToBeginningOfArray(array,element) {
  array =[element,...array];
  return array;
 }
function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element);
return array;
 }
 function addElementToEndOfArray(array,element){
   array =[...array, element];
   return array;
 }
 function destructivelyAddElementToEndOfArray(array,element){
   array.push(element);
   return array;
   }
   function accessElementInArray(array, n){
     return array[n];
   }
   function destructivelyRemoveElementFromBeginningOfArray(array){
     array.shift();
     return array;
   }
   function removeElementFromBeginningOfArray(array){
     array = array.slice(1);
     return array;
      }
      function destructivelyRemoveElementFromEndOfArray(array){
        array.pop();
        return array;
      }
      function removeElementFromEndOfArray(array){
        myArray = array.slice(0, array.length - 1);
        console.log(myArray);
        return myArray;
      }
    