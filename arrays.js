// each element has numeric position called index/indices
// index starts from zero
// should be inside a square bracket []
// can be number, string, object

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array);

// // to declare/initialize an array, we use square bracket [] or the word new
// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(numbers2);

// // or we can use array constructor to declare an array like this below 

// const brothers = ["edgar", "shella", "kelly", "kerry", "james", "david", "ray", "john", "michael"];

// console.log(brothers);

// // how to access the elements inside the array through for loops?

// for (let i = 0; i < brothers.length; i++) {
//     console.log(brothers[i]);
// }

// array is heterogenous, it can contain different data types.. bisag unsay sulod sa array pwede...

const mixedArray = [1, "edgar", 2, "shella", 3, "kelly", 4, "kerry", 5, "james", 6, "david", 7, "ray", 8, "john", 9, "michael"];

// console.log(mixedArray);

for (let i in mixedArray) {  // simpler way to access the elements inside the array 
    console.log(mixedArray[i]);  // instead of let i = 0; i > bla bla bla
}