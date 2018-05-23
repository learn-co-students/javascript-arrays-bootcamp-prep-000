var chocolateBars = [
  "snicker",
  "hundred grand",
  "skittles"];
  
  function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
  
  function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element)
    return array
  }
  
  function addElementToEndOfArray(array, element) {
    array.push(element)
    return array
  }