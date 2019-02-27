var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  
  
  function addElementToBeginningOfArray(chocolateBars, addBar) {
    return [addBar,...chocolateBars]
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, addBar) {
    chocolateBars.unshift(addBar)
    return chocolateBars
  }
  
    function addElementToEndOfArray(chocolateBars, addBar) {
    return [...chocolateBars,addBar]
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, addBar) {
    chocolateBars.push(addBar)
    return chocolateBars
  }
  
  function accessElementInArray(chocolateBars,index){
    return chocolateBars[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
    chocolateBars.shift()
    return chocolateBars
  }
  
  function removeElementFromBeginningOfArray(chocolateBars){
    return chocolateBars.slice(1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(chocolateBars){
      chocolateBars.pop()
      return chocolateBars
  }
  
  function removeElementFromEndOfArray(chocolateBars){
    return chocolateBars.slice(0,chocolateBars.length - 1)
  }