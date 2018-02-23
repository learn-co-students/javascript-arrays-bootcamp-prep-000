var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array,element) {
  [(element),...(array)]
  const arrayPlus = [(element),...(array)]
  return (arrayPlus)
  return(array)
}

function destructivelyAddElementToBeginningOfArray (array,element) {
  (array).unshift(element)
  return(array)
} 

function addElementToEndOfArray (array,element) {
  const arrayPlus = [...(array),(element)]
  return arrayPlus
}

function destructivelyAddElementToEndOfArray (array,element) {
  (array).push(element);
  return array
}

describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  var sliceArray = array.slice(1)
  return sliceArray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  var endSliceArray = array.slice(0,array.length -1)
  return endSliceArray
}

