/**
 * ------------------------------------------------------
 * Task 4
 * Generate a random password using
 * generate-password package.
 * ------------------------------------------------------
 */

const generator = require("generate-password");

// Generate password
const password = generator.generate({

    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
    strict: true

});

// Display password
console.log("Generated Password:");
console.log(password);