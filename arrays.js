
const chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(para1, para2){
  const arr = [para2,...para1];
  return arr;
}

function destructivelyAddElementToBeginningOfArray(para1, para2){
  para1.unshift("para2");
  return para1
}

function addElementToEndOfArray(para1, para2){
  const arr = [...para1, para2];
  return arr;
}

function destructivelyAddElementToEndOfArray(){
  para1.push("para2");
  return para1
}

function accessElementInArray(para1, para2){
  return para1[para2];
}

function destructivelyRemoveElementFromBeginningOfArray(para1){
  para1.shift();
  return para1;
}

function removeElementFromBeginningOfArray(para1){
  para1 = para1.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(para1){
  para1.pop();
  return para1;
}

function removeElementFromEndOfArray(para1){
  para1.slice(para1.length-1);
  return para1;
}