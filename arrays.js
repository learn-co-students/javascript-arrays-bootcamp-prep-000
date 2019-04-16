var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(ary, ele){
  ary2=ary
  ary2.push(ele)
  return ary2
}

function destructivelyAddElementToEndOfArray(ary, ele){
  ary.push(ele)
  return ary
}

function addElementToBeginningOfArray(ary, ele){
  ary2=ary
  ary2.unshift(ele)
  return ary2
}

function destructivelyAddElementToBeginningOfArray(ary, ele){
  ary.unshift(ele)
  return ary
}
