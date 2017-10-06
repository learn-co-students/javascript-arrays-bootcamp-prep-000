
function destructivelyAddElementToBeginningOfArray(arry, elementN){

  arry.unshift(elementN)
  return arry
}
console.log(destructivelyAddElementToBeginningOfArray([8,9,8,0], 5))

function addElementToBeginningOfArray(arry,element){
  return arry
}
  console.log(addElementToBeginningOfArray([8,9,8,0],''))
function accessElementInArray(arr ,indx)
{

  return arr[indx]
}
console.log(accessElementInArray([8,9],1))
function removeElementFromEndOfArray(arry)
 {
    arry.shift()
   return arry
 }
 console.log(removeElementFromEndOfArray([1,2,3,4]))
function destructivelyAddElementToEndOfArray(arry){
  //arry.splice(1,1,6,5)
  [...arry.slice(0, 2), ...arry.slice(3)] 
  return arry
}

console.log(destructivelyAddElementToEndOfArray([9,8,7]))
