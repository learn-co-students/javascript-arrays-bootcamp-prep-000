var chocolateBars =["snickers", 
                    "hundred grand", 
                    "kitkat",
                    "skittles"
                   ];
                   
                   
 function addElementToBeginningOfArray(array, element){
   var newArray = [element, ...array];
   return newArray;
 }
 
 function destructivelyAddElementToBeginningOfArray(array, element){
     //console.log("DAEBOA="+array);
     //console.log("DAEBOA e="+element);
     let newArray = array;
     newArray.unshift(element);
     //console.log("DAEBOA="+newArray);
     return newArray;
 }
 
 function addElementToEndOfArray(array, element){
   return [...array, element];
 }
 
 
 function destructivelyAddElementToEndOfArray(array, element){
   //console.log("DAEEOA="+array);
   let newArray =array;
   newArray.push(element);
  // console.log("DAEEOA="+newArray);
   return newArray;
 }
 
 function accessElementInArray(array, index){
   return array[index];
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   let newArray = array;
   newArray.shift();
   return newArray;
 }
 
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   var newArray=array;
   newArray.pop();
   return newArray;
 }
 
 function removeElementFromEndOfArray(array){
   return array.slice(0,array.length -1);
 }
 