const arrayExample = ["edgar", "shella", "kelly", "kerry", "james", "david", "ray", "john", "michael"];

// 1. LENGTH METHOD - returns the length of an array or how many elements/items inside the array

let arrayExampleLength = arrayExample.length;
console.log('This is length method: ' + arrayExampleLength);

// toString METHOD - converts an array into a string (comma separated) like this below:

let arrayExampleToString = arrayExample.toString();
console.log('This is toString method: ' + arrayExampleToString);

// POP METHOD - removes the last element from an array and returns the value that is removed: 

let arrayExamplePop = arrayExample.pop();
console.log('This is POP method: ' + arrayExamplePop);
console.log('This is the new array after popping: ' + arrayExample);

// PUSH METHOD - adds an element to the end of an array and returns the new length/new number of items inside the array

let arrayExamplePush = arrayExample.push("victor");
console.log('This is PUSH method: ' + arrayExamplePush);
console.log('This is the new array after pushing: ' + arrayExample);

// SHIFT METHOD - removes the first element from an array and returns the value that is removed:

let arrayExampleShift = arrayExample.shift();
console.log('This is SHIFT method: ' + arrayExampleShift);
console.log('This is the new array after shifting: ' + arrayExample);

// UNSHIFT METHOD - adds an element to the beginning of an array and returns the new length/new number of items inside the array:

let arrayExampleUnshift = arrayExample.unshift("edwin");
console.log('This is UNSHIFT method: ' + arrayExampleUnshift);
console.log('This is the new array after unshifting: ' + arrayExample);

//JOIN METHOD - converts an array into a string (comma separated)
// you can add a separator like comma, space, asterisk, etc.

let arrayExampleJoin = arrayExample.join(' | ');
console.log('This is JOIN method: ' + arrayExampleJoin);

// CONCAT METHOD - concatenates/joins two or more arrays together

const girls = ["aubrey", "Katie", "Maggie"];
const boys = ["greg", "onding", "nec", "teltel"];

let girlsBoys = girls.concat(boys);
console.log('This is CONCAT method: ' + girlsBoys)

// SPLICE METHOD - removes or replaces an element from an array or adds/removes elements from an array

const letters = ["a", "b", "c", "d", "e", "f", "g"];

let lettersSplice = letters.splice(1, 2); // this will remove letters b and c 
console.log('This is SPLICE method that removes only elements: ' + lettersSplice);
console.log('This is the new array after splicing: ' + letters);

// SPLICE can also remove and replace elements in an array

const letters2 = ["a", "b", "c", "d", "e", "f", "g"];

let lettersSplice2 = letters2.splice(1, 2, "x", "y");  // this will remove letters b and c and replace them with x and y
console.log('This is SPLICE method that removes and replaces elements: ' + lettersSplice2);
console.log('This is the new array after splicing: ' + letters2);

// SLICE METHOD - extracts a portion of an array and returns a new array containing the extracted elements. The original array is not modified. 
// takes in two parameters: the starting index (starting element to be removed) and the ending index (will not be removed) of the portion to be extracted. If no ending index is specified, the slice() method extracts all elements from the starting index to the end of the array.

const bibleCharacters = ["abel", "lot", "abraham", "enoch", "noe"];

let bibleCharactersSlice = bibleCharacters.slice(1, 3); // this will remove lot and abraham. Enoch is the last index specified but will not be removed

console.log('This is SLICE method: ' + bibleCharactersSlice); // this will not modify the original array
console.log('This is the new array after slicing: ' + bibleCharacters); // so the original array bibleCharacters still contains lot and abraham

// SORT METHOD - sorts an array in ascending order

const alphabets = ["d", "e", "f", "a", "b", "c"];

let alphabetsSort = alphabets.sort(); // this will sort in ascending order
console.log('This is SORT method: ' + alphabetsSort);

// SORT in descending order

let alphabetsSort2 = alphabets.reverse(); // this will sort in descending order
console.log('This is SORT method in descending order: ' + alphabetsSort2);

// SORTING numbers using compare function

const numbers = [132, 212, 143, 54, 65, 126, 347, 118, 259, 210];

let numbersSort = numbers.sort(SortNumbers1); // this will sort in ascending order

function SortNumbers1(a, b) {
    return a - b;
}

console.log('This is SORTING numbers using function: ' + numbersSort);

let numbersSort2 = numbers.sort(SortNumbers2); // this will sort in descending order

function SortNumbers2(a, b) {
    return b - a;
}

console.log('This is SORTING numbers using function in descending order: ' + numbersSort2);