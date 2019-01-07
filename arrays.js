    var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];
    function addElementToBeginningOfArray(array, element) {
      const one = [element, ...array]
      return one
    }
    function destructivelyAddElementToBeginningOfArray (array, element) {
      array.unshift(element)
      return array
    }
    function addElementToEndOfArray(array, element){
      const newArray = [...array, element]
      return newArray
    }
    function destructivelyAddElementToEndOfArray(array, element){
      array.push(element)
      return array
    }
    function accessElementInArray(array, index){
      return array[index]
    }
    function destructivelyRemoveElementFromBeginningOfArray(array){
      array.shift()
      return array
    }
    function removeElementFromBeginningOfArray(array){
      const newArray=array.slice(1)
      return newArray
    }
    function destructivelyRemoveElementFromEndOfArray(array) {
      array.pop()
      return array
    }
    function removeElementFromEndOfArray(array){
      const newArray = array.slice(0, array.length-1)
      return newArray
    }