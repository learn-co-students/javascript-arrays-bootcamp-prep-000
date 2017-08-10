var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
	var arrayNewName = [element,...array];
	return arrayNewName;
	 }

//function destructivelyAddElementToBeginningOfArray(array, element){
//  return array.unshift(element)}
//function destructivelyAddElementToBeginningOfArray(array, element){
	//var newArray = array;
//return [element,...array];}
function destructivelyAddElementToEndOfArray(array,element){
		return [...array,element];}


function addElementToEndOfArray(array, element) {
		var arrayNewName =[...array,element];
                 return arrayNewName}

function destructivelyAddElementToEndOfArray(array, element){
					return array.push(element) }

function removeElementFromBeginningOfArray(array) {
						var arrayNewName = array.slice(1);
						return arrayNewName;
						}


function destructivelyRemoveElementFromEndOfArray(array){
		array.pop();
		return array;}

function removeElementFromEndOfArray(array){
	var arrayNewName = array.slice(0, array.length - 1);
									return arrayNewName;}

function accessElementInArray(array, element) {
									return array(element);}

function removeElementFromBeginningOfArray(array) {
		var arrayNewName = array.slice(1);
		return arrayNewName;
		}

//function destructivelyRemoveElementFromBeginningOfArray(array){
//			return array.slice(1, array.length);}
function destructivelyRemoveElementFromBeginningOfArray(array){
	var newArray = array
	return newArray.slice(1, newArray.length);}

function accessElementInArray(array, index){
 return array[index];}
