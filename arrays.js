var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, news){
   array = [news,...array]

  return array
}
function addElementToEndOfArray(array, news){
   array = [...array, news]

  return array
}
function destructivelyAddElementToBeginningOfArray(array, news){
  array.unshift(news)
  return array
}
function destructivelyAddElementToEndOfArray(array, news){
   array.push(news)
    return  array
}

function accessElementInArray(array, place){
  return array[place];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
   return array
}

function removeElementFromBeginningOfArray(array){
   return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  var end = array.length - 1;
  return array.slice (0,end)
}