// For loop


//initialization       //condition        //increment
// for (let variable_name = 0; variable_name < 10; variable_name++) {
//     console.log(variable_name);
// }

// for (let number = 1; number < 11; number++) {
//     console.log(number);
// }

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }

// console.log(sum);


// // While loop
// let variable = value;

// while (condition) {
//     // code to be executed
// }

// let sum2 = 0;
// let i = 1;

// while (i <= 5) {
//     sum2 += i;
//     i++;
// }

// console.log(sum2);


// Do while loop

// do {
//     // code to be executed
// } while (condition);

let sum3 = 0;
let a = 1;

do {
    sum3 += a;
    a++;
} while (a <= 5);

console.log(sum3);


// FOR EACH LOOP - loops through an array like this below

const forEachSample = ["edgar", "shella", "kelly", "kerry", "james", "david", "ray", "john", "michael"];

forEachSample.forEach(() => {
    console.log(forEachSample);
})