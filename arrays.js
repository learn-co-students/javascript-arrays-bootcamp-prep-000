var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArr, myEle){
  return [myEle, ...myArr]
};

function destructivelyAddElementToBeginningOfArray(myArr, myEle){
  myArr.unshift(myEle)
  return myArr
};

function addElementToEndOfArray(myArr, myEle){
  return [...myArr, myEle]
};

function destructivelyAddElementToEndOfArray(myArr, myEle){
  myArr.push(myEle)
  return myArr
};

function accessElementInArray(myArr, myIndex){
  return myArr[myIndex]
};

function destructivelyRemoveElementFromBeginningOfArray(myArr){
  myArr.shift()
  return myArr
}

function removeElementFromBeginningOfArray(myArr){
  myArr = myArr.slice(1);
  return myArr;
}

function destructivelyRemoveElementFromEndOfArray(myArr){
  myArr.pop()
  return myArr
}

function removeElementFromEndOfArray(myArr){
  myArr = myArr.slice(0, myArr.length-1)
  return myArr
}
