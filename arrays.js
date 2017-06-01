var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element){
  array = [element,...array]
  //console.log(array)
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  //console.log(arrayVar2)
  return array
}

function addElementToEndOfArray(array,element){
  //const array1 = ["New York", "San Francisco"]
  array = [...array,element]
  //console.log(array)
  return array
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  //console.log(arrayVar4)
  return array
}

function accessElementInArray(array,varIndex){
  //array = ['Gato','Perro','Vaca','Cerdo','Pato']
  //console.log(array[varIndex])
  varIndex = parseInt(varIndex);
  return array[varIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  //array = ['Gato','Perro','Vaca','Cerdo','Pato']
  array.shift();
  //console.log(array)
  return array
}

function removeElementFromBeginningOfArray(array){
  //array = ["Milo", "Garfield", "Otis"]
  array = array.slice(1);
  //console.log(arrayVar7.slice(1))
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  //arrayVar7 = ['Cat','Dog','Duck','Cow']
  array.pop();
  return array
}

function removeElementFromEndOfArray(array){
  //array = ['Cat','Dog','Duck','Cow']
  //console.log(arrayVar7.slice(0,arrayVar7.length-1))
  array = array.slice(0,array.length-1);
  return array
}
