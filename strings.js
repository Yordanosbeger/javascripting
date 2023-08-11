// Example string
const myString = "Hello, World!";

// Length of the string
const lengthOfString = myString.length;
console.log("Length of the string: " + lengthOfString);

// Convert the string to uppercase
const upperCaseString = myString.toUpperCase();
console.log("Uppercase string: " + upperCaseString);

// Convert the string to lowercase
const lowerCaseString = myString.toLowerCase();
console.log("Lowercase string: " + lowerCaseString);

// Check if the string contains a specific substring
const searchSubstring = "World";
const containsSubstring = myString.includes(searchSubstring);
console.log("String contains 'World': " + containsSubstring);

// Get a specific character from the string
const charAtIndex = myString.charAt(4); // Zero-indexed, so 'o' at index 4
console.log("Character at index 4: " + charAtIndex);

// Extract a substring from the original string
const extractedSubstring = myString.slice(7, 12); // Starting index is inclusive, ending index is exclusive
console.log("Extracted substring: " + extractedSubstring);

// Split the string into an array using a delimiter
const splitString = myString.split(" ");
console.log("Split string: " + splitString);

// Join an array of strings into a single string
const joinedString = splitString.join("-");
console.log("Joined string: " + joinedString);

// Replace part of the string with a new substring
const replacedString = myString.replace("World", "Universe");
console.log("Replaced string: " + replacedString);
