var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var numArray = [1,2,3]

function addElementToBeginningOfArray(chocolateBars, temp){
  const ncb = ['foo', ...chocolateBars]
  return ncb
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, temp){
  chocolateBars.unshift(temp)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, temp){
  const ncb = [...chocolateBars, 'foo']
  return ncb
}

function destructivelyAddElementToEndOfArray(chocolateBars, temp){
  chocolateBars.push(temp)
  return chocolateBars
}
 function accessElementInArray(){
   var newArray = [1,2,3]
   return newArray[2]
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   array.shift()
   return array
 }
 
 function removeElementFromBeginningOfArray(){
   var newArray = [1,2,3]
   const mNewArray = newArray.slice(1)
   return mNewArray
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop()
   return array
 }
 
 function removeElementFromEndOfArray(){
   var newArray = [1,2,3]
   const mNewArray = newArray.slice(0, newArray.length - 1)
   return mNewArray
 }
 
 