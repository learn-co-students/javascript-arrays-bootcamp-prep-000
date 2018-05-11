var chocolateBars =[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
 function 
   addElementToBeginningOfArray(array, element){
    var new_array = [element, array [0]]
 return new_array}
 function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
 }
 function addElementToEndOfArray(array, element){
 array = [...array, 'foo']
 return array}
 
 function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
   return array
 }
 function accessElementInArray(array, index){
   return (array[index]);
 }
 function destructivelyRemoveElementFromBeginningOfArray(array, element){
   array.shift()
   return array
  }
 function removeElementFromBeginningOfArray(array){
   return array.slice(-2)
 }
 
function destructivelyRemoveElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
}



 
 function removeElementFromEndOfArray(array){
   return array.slice(0, array.length - 1)
 }
 
 