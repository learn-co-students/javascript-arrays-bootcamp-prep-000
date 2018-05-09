var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(anArr, anEl){
  var newArr = [anEl,...anArr];
  
  return newArr;
}
function addElementToEndOfArray(anArr,anEl){
  var newArr = [...anArr, anEl];
  
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(anArr,anEl){
  anArr.unshift(anEl);
  return anArr;
}
function destructivelyAddElementToEndOfArray(anArr,anEl){
  anArr.push(anEl);
  return anArr;
}
function accessElementInArray(anArr, idx){
  var el = anArr[idx];
  
  return el;
}

function destructivelyRemoveElementFromBeginningOfArray(anArr){
  anArr.shift();
  
  return anArr;
}

function removeElementFromBeginningOfArray(anArr){
  var el = anArr.slice(1);
  
  return el;
}

function destructivelyRemoveElementFromEndOfArray(anArr){
  anArr.pop();
  
  return anArr;
}

function removeElementFromEndOfArray(anArr){
  var anEl = anArr.slice(0, anArr.length - 1);
  
  return anEl;
}







