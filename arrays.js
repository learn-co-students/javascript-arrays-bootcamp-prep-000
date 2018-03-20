var chocolateBars = ['snikers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element){
   var  fruit = [element,...array]
   return fruit
}
function destructivelyAddElementToBeginningOfArray(array,element){
    var bread = array.unshift(element)
    return bread
}

function addElementToBeginningOfArray(array, element){
  var cities=['NY','NJ','MA']
    cities=[...cities,'CT']
}
function destructivelyAddElementToBeginningOfArray(array,element){
  var countries =['USA','Mexico','Canada']
  countries.push('Brasil')
}
function accessElementInArray(array, index){
  return array[index]
  }
  function destructiveRemoveElementFromBeginningOfArray(array){
      array.shift()
    return array
  }