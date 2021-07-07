var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(Array,foo){
  return ['foo',...Array]
}

function destructivelyAddElementToBeginningOfArray(Array,foo){
  Array.unshift('foo')
  return Array
}

function addElementToEndOfArray(Array,foo){
  return [...Array,'foo']
}

function destructivelyAddElementToEndOfArray(Array,foo){
  Array.push('foo')
  return Array
}

function accessElementInArray(Array,index){
  return Array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(Array){
  Array.shift()
  return Array
}

function removeElementFromBeginningOfArray(Array){
  return Array.slice(1)
  
}

function destructivelyRemoveElementFromEndOfArray(Array){
  Array.pop()
  return Array
}

function removeElementFromEndOfArray(Array){
  return Array.slice(0,Array.length-1)
}
