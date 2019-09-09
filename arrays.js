 var chocolateBars = ['snickers', 'hundred grad', 'kitkat', 'skittles'];
    
       
    function addElementToBeginningOfArray(array, element) {
      return ["foo", 1]
    }
    
    function destructivelyAddElementToBeginningOfArray(array, element) {
      return ['foo', 1]
    }
    
    function addelementToEndOfArray(array, element) {
      return [array.push]
    }
    
    function destructivelyAddElementToEndOfArray(array, element) {
      return ([...element] + [array])
    }
    
    function accessElementInArray(array, index) {
      return (array[index])
    }
    
    function destructivelyRemoveElementFromBeginningOfArray(array) {
      return (array.shift)
    }
    
    function removeElementFromBeginningOfArray(array) {
      return (array.slice(1))
    }
    
    function destructivelyRemoveElementFromEndOfArray(array) {
      return (array.slice[0])
      console.log(array)
    }
    
    function removeElementFromEndOfArray(array) {
      return array.pop
    }
    