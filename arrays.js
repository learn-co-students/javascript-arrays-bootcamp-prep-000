var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
	var arrayNewName = [element,...array];
	return arrayNewName;
	 }

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)}

function addElementToEndOfArray(array, element) {
		var arrayNewName =[...array,element];
                 return arrayNewName}

function destructivelyAddElementToEndOfArray(array,element){
					return array.push(element) }

function removeElementFromBeginningOfArray(array) {
						var arrayNewName = array.slice(1);
						return arrayNewName;
						}

function destructivelyRemoveElementFromEndOfArray(array){
								return array.pop(); }

function removeElementFromEndOfArray(array){
	var arrayNewName = array.slice(0, array.length - 1);
									return arrayNewName;}
