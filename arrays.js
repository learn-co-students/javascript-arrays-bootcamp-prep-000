///*global describe, it */

//  'chocolateBars'
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  


//describe('addElementToBeginningOfArray(array, element)', () => {
function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
    
}

  //describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

//describe('addElementToEndOfArray(array, element)', () => {
function addElementToEndOfArray(array, element) {
     return [array, ...element]
    }

//describe('destructivelyAddElementToEndOfArray(array, element)', () => {
function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
    }

//describe('accessElementInArray(array, index)', () => {
function accessElementInArray(array, index) {
      return array[index]
    }
  
//describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
function destructivelyRemoveElementFromBeginningOfArray(array) {
      array.shift()
  }

//describe('removeElementFromBeginningOfArray(array)', () => {
function removeElementFromBeginningOfArray(array) {
  array.slice(0, array.length - 1 )
  return array
    }
    

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})
