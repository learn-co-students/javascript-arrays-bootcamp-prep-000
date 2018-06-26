var chocolateBars=['snickers','hundred grand', 'kitkat','skittles'];
q=destructivelyAddElementToEndOfArray(chocolateBars,1)



function addElementToBeginningOfArray(x,y){
  
  var z=[y,...x]
console.log(z)
  return z 
}
function destructivelyAddElementToBeginningOfArray(x,y){
   x.unshift(y)
   console.log(x)
  return x
}

function removeElementFromBeginningOfArray(x){
  z=x.slice(1)
   console.log(z)
   return z
}

function destructivelyRemoveElementFromBeginningOfArray(x){
x.shift()
return x
}


function removeElementFromEndOfArray(x){
  z=x.slice(0,x.length-1)
  console.log(z)
  return z
}

function destructivelyRemoveElementFromEndOfArray(x){
  x.pop()
   console.log(x)
   return x
}

function accessElementInArray(x,y){
z=x[y]
   return z
}


function addElementToEndOfArray(x,y){
z=[...x,y]
console.log(x)
  return z
}

function destructivelyAddElementToEndOfArray (x,y){
 x.push(y)
 return x 
}
