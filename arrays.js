var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
  ]
  
  var tomatoSauceIngredients = [
    'tomato',
    'garlic',
    'olive oil',
    'basil',
    'oregano'
    ]
    
    var chocolateBars = [
      'snickers',
      'hundred grand',
      'kitkat',
      'skittles'
      ]
      
      function addElementToBeginningOfArray(array, element) {
        var arrayNew = [element, ...array]
        return arrayNew
      }
      
      function destructivelyAddElementToBeginningOfArray(array, element) {
        array.unshift(element)
        return array
      }
      
      function addElementToEndOfArray(array, element) {
        var arrayNew = [...array, element]
        return arrayNew
      }
      
      function destructivelyAddElementToEndOfArray(array, element) {
        array.push(element)
        return array
      }
      
      function accessElementInArray(array, index) {
        return array[index]
      }
      
      function destructivelyRemoveElementFromBeginningOfArray(array) {
        array.shift()
        return array
      }
      
      function removeElementFromBeginningOfArray(array) {
        return array.slice(1)
      }
      
      function destructivelyRemoveElementFromEndOfArray(array) {
        array.pop()
        return array
      }
      
      function removeElementFromEndOfArray(array) {
        return array.slice(0, array.length-1)
      }
      
      