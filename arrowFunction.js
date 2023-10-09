// Regular Function
function add(num1, num2) {
    return num1 + num2;
}

// Arrow Function
const add = (num1, num2) => num1 + num2;  // no more curly braces

// will only contain curly braces if you add if statement inside it like this
const add = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// In arrow function, there is no binding of this keyword.

// DEFAULT PARAMETERS in arrow function can be used as well like this
const calculateArea = (width = 1, height = 1) => width * height;
