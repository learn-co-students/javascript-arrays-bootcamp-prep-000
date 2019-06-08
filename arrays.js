var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

    function addElementToBeginningOfArray(array, element) {
      var addElementToBeginningOfArray = []
        addElementToBeginningOfArray[1] = 'foo'
      return addElementToBeginningOfArray
    }
    
 function addElementToEndOfArray (array, element) {
   var addElementToEndOfArray = []
   addElementToEndOfArray[1] = 'foo'
   return addElementToEndOfArray
 }
 
   function accessElementInArray (array, index) {   
     var accessElementInArray = [1, 2, 3]
    return accessElementInArray[2] 
     }
      it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
 
    function destructivelyRemoveElementFromBeginningOfArray(array) {
      const destructivelyRemoveElementFromBeginningOfArray = [1,2,3]
       destructivelyRemoveElementFromBeginningOfArray.unshift()
      
    }
    
    
    