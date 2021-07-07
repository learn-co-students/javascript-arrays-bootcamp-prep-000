 var chocolateBars = [ 'snicker','hundred gran','kitkat', 'skittles']

function addElementToBeginningOfArray(cities, Philadelphia){ 
  return [Philadelphia, ...cities]  
}
function destructivelyAddElementToBeginningOfArray(foo,t){
 foo.unshift(t) 
 return foo
}

function addElementToEndOfArray(foo,it) {
 return [...foo, it]
}
function destructivelyAddElementToEndOfArray(foo,o){
  foo.push(o)
  return foo
}

function accessElementInArray(arr1,index){
  return arr1[index] 
}  
function destructivelyRemoveElementFromBeginningOfArray(arr1){
   arr1.shift()
   return arr1
}
function removeElementFromBeginningOfArray(arr1){
  return arr1.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(arr1){
   arr1.pop()
   return arr1
}
function removeElementFromEndOfArray(arr1){
  return arr1.slice(0,arr1.slice.length)
}
 
