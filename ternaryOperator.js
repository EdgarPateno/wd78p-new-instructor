// shortened version of if statements

// syntax is 
// condition ? trueExpression : falseExpression

// convert this if else statements to ternary operator
const grade = 73;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 75) {
    console.log("C");
} else if (grade <= 74) {
    console.log("F");
} else {
    console.log("G");
}

// ternary operator

const grade2 = 85;
const result = 
  grade2 >= 90 ? "A" :
  grade2 >= 80 ? "B" :
  grade2 >= 75 ? "C" :
  grade2 <= 74 ? "F" :
  "G";

console.log(result);