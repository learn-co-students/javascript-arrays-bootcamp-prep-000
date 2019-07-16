var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (arr,el){
  return [el,...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr,el){
  return [...arr,el]
}

function destructivelyAddElementToEndOfArray(arr,el){
  arr.push(el)
  return arr
}

function accessElementInArray(arr,i){
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var newArr=arr.slice(1);
  return newArr
}
 
 function destructivelyRemoveElementFromEndOfArray(arr){
   arr.pop()
   return arr
 }
 
 function removeElementFromEndOfArray(arr){
   var newArr=arr.slice(0,arr.length-1)
   return newArr
 }

//   describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
//     it('returns the array with the last element removed', () => {
//       expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
//     })
    
//     it('alters the original array', ()=>{
//       const array = [1, 2, 3];
//       destructivelyRemoveElementFromEndOfArray(array);
//       expect(array).to.eql([1, 2]);
//     })
//   })
  
//   describe('removeElementFromEndOfArray(array)', () => {
//     it('removes the last element from the array', () => {
//       expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
//     })
    
//     it('does not alter the original array', () => {
//       const array = [1, 2, 3];
//       removeElementFromEndOfArray(array);
//       expect(array).to.eql([1, 2, 3]);
//     })
//   })
// })