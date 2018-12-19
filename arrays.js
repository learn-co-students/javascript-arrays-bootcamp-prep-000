var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  function addElementToBeginningOfArray(oldArray, newElement){
  return [newElement, ...oldArray]
  }
  
  function destructivelyAddElementToBeginningOfArray(oldArray, newElement){
    oldArray.unshift(newElement)
    return oldArray
  }
  
  
   function addElementToEndOfArray(oldArray, newElement){
  return [...oldArray, newElement]
  }
  
  function destructivelyAddElementToEndOfArray(oldArray, newElement){
    oldArray.push(newElement)
    return oldArray
  }
  
  function accessElementInArray(pineapple, cheese){
    return pineapple[cheese]
  }
  
  
  function destructivelyRemoveElementFromBeginningOfArray(mutate){
    mutate.shift()
    return mutate
  }
  
  function removeElementFromBeginningOfArray(pants){
    return pants.slice(1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(pomelo){
    pomelo.pop()
    return pomelo
  }

  function removeElementFromEndOfArray(grapes){
    return grapes.slice(0, grapes.length - 1)
  }
  
  
  
  
  
  
  
  
  
  
  
  