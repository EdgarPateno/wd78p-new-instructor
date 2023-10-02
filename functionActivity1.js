//1

function ADD(num1, num2) {
    return num1 + num2;
}
console.log(ADD(50, 80));

function SUB(num1, num2) {
    return num1 - num2;
}
console.log(SUB(50, 80));

function MULT(num1, num2) {
    return num1 * num2;
}
console.log(MULT(50, 80));

function DIVIDE(num1, num2) {
    return num1 / num2;
}
console.log(DIVIDE(50, 80));

function MOD(num1, num2) {
    return num1 % num2;
}
console.log(MOD(50, 80));

// //2

// function COMPUTE() {
//     let a = 10, b = 5, c = 2;
//     return (a * b + b * c) / (a + b) - (c * a) / (a - b)

// };

// console.log(COMPUTE());


const num1 = 50;
const num2 = 80;

function performOperations(num1, num2) {

    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    const modulo = num1 % num2;

    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);
    console.log("Multiplication:", multiplication);
    console.log("Division:", division);
    console.log("Modulo:", modulo);
}

performOperations(num1, num2);