var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(ary, ele){

  return [...ary, ele]
}

function destructivelyAddElementToEndOfArray(ary, ele){
  ary.push(ele)
  return ary
}

function addElementToBeginningOfArray(ary, ele){
return [ele, ...ary]
}

function destructivelyAddElementToBeginningOfArray(ary, ele){
  ary.unshift(ele)
  return ary
}

function accessElementInArray(ary, index){
  return ary[index]
}

function destructivelyRemoveElementFromBeginningOfArray(ary){
  ary.shift()
  return ary
}

function removeElementFromBeginningOfArray(ary){
  return ary.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(ary){
  ary.pop()
  return ary
}

function removeElementFromEndOfArray(ary){
  return ary.slice(0, ary.length-1)
}
