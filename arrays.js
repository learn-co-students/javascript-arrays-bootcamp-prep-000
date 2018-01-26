var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  var addElementToBeginningOfArray = function (array, element){
    var newArray = array.slice()
    newArray.unshift(element)
    return newArray
  }
  
  var destructivelyAddElementToBeginningOfArray = function(array, element){
    array.unshift(element)
    return array
  }
  
  var addElementToEndOfArray = function (array, element){
    var newArray = array.slice()
    newArray.push(element)
    return newArray
  }

var destructivelyAddElementToEndOfArray = function(array, element){
    array.push(element)
    return array
  }
  
  var accessElementInArray = function(array, index){
    return array[index]
  }

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift()
  return array
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop()
  return array
}

var removeElementFromEndOfArray = function(array){
  return array.slice(0, array.length - 1)
}

var removeElementFromBeginningOfArray = function(array){
  return array.slice(1)
}
