// Nullish coalescing is a JavaScript operator that is used to assign a default value to a variable if the variable is undefined or null.

const defaultValue = 'Default Value';
const variable = null;

const result = variable ?? defaultValue;

console.log(result); // Output: 'Default Value'