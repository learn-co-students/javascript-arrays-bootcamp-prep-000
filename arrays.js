chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
	 nuArray = [element, ...array];
         return nuArray;
}



function destructivelyAddElementToBeginningOfArray(array, element){
        array.unshift(element);
 	return array;
}


function addElementToEndOfArray(array, element){
  	nuArray = [...array, element];
         return nuArray;

}


function destructivelyAddElementToEndOfArray(array, element){
	 array.push(element);
	 return array;
}


function accessElementInArray(array, index){

	 x = array[index];
   	 return x;

}

function destructivelyRemoveElementFromBeginningOfArray(array){
	
 	 array.shift();
	 return array;
 
}


function removeElementFromBeginningOfArray(array){
	
 	 newArray = array.slice(1);
	 return newArray;
 
}


function destructivelyRemoveElementFromEndOfArray(array){
	
	 array.pop();
	 return array;

}

function removeElementFromEndOfArray(array){
	
 	 newArray = array.slice(0, array.length - 1);
	 return newArray;

}










