var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
addElementToBeginningOfArray = function(arrayList,item){
  return [item,...arrayList];
}
destructivelyAddElementToBeginningOfArray = function(arrayList, item){
  arrayList.unshift(item);
  return arrayList;
}

addElementToEndOfArray = function(arrayList,item){
  return [...arrayList,item];
}

destructivelyAddElementToEndOfArray = function(arrayList,item){
  arrayList.push(item);
  return arrayList;
}

accessElementInArray = function(arrayList,arrayIndex) {
  return arrayList[arrayIndex];
}

destructivelyRemoveElementFromBeginningOfArray = function(arrayList){
  arrayList.shift();
  return arrayList;
}

removeElementFromBeginningOfArray = function(arrayList) {
  return arrayList.slice(1);
}

destructivelyRemoveElementFromEndOfArray = function(arrayList) {
  arrayList.pop();
  return arrayList;
}

removeElementFromEndOfArray = function(arrayList) {
  return arrayList.slice(0,arrayList.length - 1);
}
