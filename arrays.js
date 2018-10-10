var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];
function chocolateBars(snickers, hundred grand, kitkat, skittles) {
return console.log(chocolateBars)
}
function addElementToBeginningOfArray(array, element) {
  addElementToBeginningOfArray.unshift([1],'foo')
  return 
  const array = [1]
  addElementToBeginningOfArray(array, 'foo')
  return array
}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
    destructivelyAddElementToBeginningOfArray([1], 'foo')
    return destructivelyAddElementToBeginningOfArray.unshift(element)
      const array = [1]
      
      destructivelyAddElementToBeginningOfArray(array, 'foo')
return expect(array).to.eql(['foo', 1])
    })
  })

  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  
  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the array with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

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