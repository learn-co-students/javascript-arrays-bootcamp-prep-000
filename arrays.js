chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles']
addElementToBeginningOfArray=(arr,e)=>[e,...arr]
destructivelyAddElementToBeginningOfArray=(arr,e)=>{
  arr.unshift(e)
  return arr
}
addElementToEndOfArray=(arr,e)=>[...arr,e]
destructivelyAddElementToEndOfArray=(arr,e)=>{
  arr.push(e)
  return arr
}
accessElementInArray=(arr,n)=>arr[n]
removeElementFromBeginningOfArray=(arr)=>arr.slice(1)
removeElementFromEndOfArray=(arr)=>{arr.pop();return arr}
