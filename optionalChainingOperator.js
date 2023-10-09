// What is optional chaining operator? It is used to access properties of an object that may or may not exist. 
// syntax is ?. (question mark and dot)

// Example object
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};

// Accessing properties without optional chaining
const city = user.address.city; // "New York"
const state = user.address.state; // TypeError: Cannot read property 'state' of undefined

// Accessing properties with optional chaining
const cityWithOptionalChaining = user.address?.city; // "New York"
const stateWithOptionalChaining = user.address?.state; // undefined