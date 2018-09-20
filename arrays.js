let items = [1, 2, 3, 4]

// this will remove everything after index 1 (inclusive)
// it returns the removed items: [2, 3, 4]
items.splice(1)

items // [1]

items = [1, 2, 3, 4]

 // "at index 1, remove 1 item"
 // it returns the removed item(s): [2]
items.splice(1, 1)

items // [1, 3, 4]

items = [1, 2, 3, 4]

// "at index 1, remove 1 item and add 6 and add 7"
// it returns the removed items: [2]
// and adds the items to add starting at the removal index
items.splice(1, 1, 6, 7)

items // [1, 6, 7, 3, 4]
