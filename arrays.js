+
 +var chocolateBars = [
 +  'snickers',
 +  'hundred grand',
 +  'kitkat',
 +  'skittles'
 +]
 +
 +function addElementToBeginningOfArray(x, y) {
 +      return [y, ...x];
 +
 +}
 +
 +function destructivelyAddElementToBeginningOfArray(x, y) {
 +      x.unshift(y);
 +      return x;
 +}
 +
 +function addElementToEndOfArray(x, y){
 +      return [...x, y];
 +}
 +
 +function destructivelyAddElementToEndOfArray(x, y){
 +      x.push(y);
 +      return x;
 +}
 +
 +function accessElementInArray (array, index) {
 +      return array[index];
 +}
 +
 +function destructivelyRemoveElementFromBeginningOfArray(array) {
 +      array.shift();
 +      return array;
 +}
 +
 +function removeElementFromBeginningOfArray(array){
 +      newarray = array.slice(1);
 +      return newarray;
 +}
 +
 +function destructivelyRemoveElementFromEndOfArray(array){
 +      array.pop();
 +      return array;
 +}
 +
 +function removeElementFromEndOfArray(array){
 +      newarray = array.slice(0, array.length - 1);
 +      return newarray;
 +}
