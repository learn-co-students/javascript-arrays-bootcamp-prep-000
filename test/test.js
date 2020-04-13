const array = [1]

function addEll(arr, ell) {
  [ell, ...arr]
  return arr
}

var arr = addEll([1, 2],'foo');
console.log(arr)
addEll(array,'foo');
