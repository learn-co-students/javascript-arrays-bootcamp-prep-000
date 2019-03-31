var chocolateBars = ["snickers", "hundrad grand", "kitkat", "skittles"]
chocolateBars.unshift("hersheys")
console.log(chocolateBars[0])

function addElementToBeginningOfArray(arrayA,ElementA){
  return [ElementA,...arrayA]
  
}

function destructivelyAddElementToBeginningOfArray(arrayA,ElementA){
  arrayA.unshift(ElementA)
  return arrayA
}

function addElementToEndOfArray(arrayA,ElementA){
  return [...arrayA, ElementA]
}

function destructivelyAddElementToEndOfArray(arrayA,ElementA){
  arrayA.push(ElementA)
  return arrayA
}

function accessElementInArray(arrayA,pos){
  return arrayA[pos]
}

function destructivelyRemoveElementFromBeginningOfArray(arrayA){
  arrayA.shift()
  return arrayA
}

function removeElementFromBeginningOfArray(arrayA){
  return arrayA.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arrayA){
  arrayA.pop()
  return arrayA
}

function removeElementFromEndOfArray(arrayA){
  return arrayA.slice(0,arrayA.length - 1)
}