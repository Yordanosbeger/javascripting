
//function conditionalSum(numbers, condition) {
  // Filter the numbers based on the condition
  //const filteredNumbers = numbers.filter(number => {
    //if (condition === "odd") {
      //return number % 2 !== 0; // Return true for odd numbers
    //} else if (condition === "even") {
     // return number % 2 === 0; // Return true for even numbers
    //} else {
     // throw new Error("Invalid condition. Only 'odd' or 'even' is allowed.");
    //}
  //});

  // Calculate the sum of the filtered numbers
  //const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);

  //return sum;
//}


//console.log(conditionalSum([1,2,3,4,5], "odd")); // Output: 25 (1 + 3 + 5 + 7 //+ 9)

//console.log(conditionalSum([1,2,3,4,5], "even")); // Output: 20 (2 + 4 + 6 + 8)

//console.log(conditionalSum([13,88,12,44,99], "even")); 
//console.log(conditionalSum([], "odd")); 
function numberOfVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));