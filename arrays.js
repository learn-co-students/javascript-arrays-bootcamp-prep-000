var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
  ]
  
  function addElementToBeginningOfArray(arr, ele){
    let myArray = [ele,...arr];
    return myArray;
  }
  
  function destructivelyAddElementToBeginningOfArray(arr, ele){
    arr.unshift(ele);
    return arr;
  }
  
  function addElementToEndOfArray(arr, ele){
    let myArray = [...arr, ele];
    return myArray;
  }

 function destructivelyAddElementToEndOfArray(arr, ele){
    arr.push(ele);
    return arr;
  }
  
  
  function accessElementInArray(arr, ind){
    return arr[ind]
  }
  
function destructivelyRemoveElementFromBeginningOfArray (arr){
  arr.shift()
  return arr
}
  
function removeElementFromBeginningOfArray (arr){
  let newArr = arr.slice(1)
  return newArr
}  
  
function destructivelyRemoveElementFromEndOfArray (arr){
  arr.pop()
  return arr
}  
  
function removeElementFromEndOfArray (arr){
  let newArr = arr.slice (0, -1)
  return newArr
}  
  
  
  
  
  
  