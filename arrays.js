/*

describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })
  
*/
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


/*

  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })
*/


function addElementToBeginningOfArray(array, element) {
  
  var outputArray = array.slice(0, array.length);
  outputArray.unshift(element);
  return outputArray;
}
var array = [1,2,3,4,5]
console.log(addElementToBeginningOfArray(array, 118))

/*
  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })
*/
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

var array = [1];
var newArray = destructivelyAddElementToBeginningOfArray(array, "foo");
console.log(array)
console.log(newArray)
/*
  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })
*/
function addElementToEndOfArray(array, element) {
  var outputArray = array.slice(0, array.length);
  outputArray.push(element);
  console.log(outputArray)
  return outputArray;
}

var array = [1];
var newArray = addElementToEndOfArray(array, "foo");

console.log(newArray)
/*

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
*/
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  
  return array;
}
console.log(destructivelyAddElementToEndOfArray([1],"foo"))
/*
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
  
*/
function accessElementInArray(array, index) {
  var i = 0;
  for (i = 0; i < array.length; i++) {
    if (i == index) {
      return array[i];
    }
  }
}

console.log(accessElementInArray([1,2,3], 2) + "current")
/*

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  
*/
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
/*
  
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
*/
function removeElementFromBeginningOfArray(array) {
  var outputArray = array.slice(1, array.length);
  
  return outputArray;
}
/*
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
  
*/
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

/*

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
*/
function removeElementFromEndOfArray(array) {
  var outputArray = array.slice(0, array.length - 1);
  return outputArray;
}
var newArray = [1,2,3]
console.log(removeElementFromEndOfArray(newArray))
console.log(newArray)
/*
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
*/