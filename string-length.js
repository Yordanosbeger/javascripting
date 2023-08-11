// Define a function to calculate and return the length of a given string
//function getStringLength(inputString) {
  //return inputString.length;
//}

// Example usage:
//const myString = "Hello, World!";
//const lengthOfString = getStringLength(myString);
//console.log("The length of the string is: " + lengthOfString);
//const instructorWithLongestName = function (instructors) {
  //let longestNameInstructor = instructors[0];

  //for (let i = 1; i < instructors.length; i++) {
    //if (instructors[i].name.length > longestNameInstructor.name.length) {
     // longestNameInstructor = instructors[i];
   // }
  //}

  //return longestNameInstructor;
//};

//console.log(
  //instructorWithLongestName([
    //{ name: "Samuel", course: "iOS" },
    //{ name: "Jeremiah", course: "Web" },
    //{ name: "Ophilia", course: "Web" },
   // { name: "Donald", course: "Web" },
 // ])
//);
//console.log(
  //instructorWithLongestName([
   // { name: "Matthew", course: "Web" },
    //{ name: "David", course: "iOS" },
   // { name: "Domascus", course: "Web" },
 // ])
//);
/*const urlEncode = function(text) {
  // Trim the input string to remove outer whitespace
  const trimmedText = text.trim();

  // Split the trimmed string by spaces and join with %20
  const encodedText = trimmedText.split(' ').join('%20');

  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/
/*const whereCanIPark = (spots, vehicle) => {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      if (vehicle === 'regular') {
        if (spots[y][x] === 'R') {
          return [x, y]
        }
      } else if (vehicle === 'small') {
        if (spots[y][x] === 'R' || spots[y][x] === 'S') {
          return [x, y]
        }
      } else if (vehicle === 'motorcycle') {
        if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M') {
          return [x, y]
        }
      }
    }
  }

  return false
}
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))*/
/*const checkAir = function(samples, threshold) {
  let dirtyCount = 0;

  for (let sample of samples) {
    if (sample === 'dirty') {
      dirtyCount++;
    }
  }

  const pollutionRatio = dirtyCount / samples.length;

  if (pollutionRatio > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));*/
/*const repeatNumbers = function(data) {
  let result = '';

  for (let i = 0; i < data.length; i++) {
    const [value, times] = data[i];

    for (let j = 0; j < times; j++) {
      result += value.toString();
    }

    if (i !== data.length - 1) {
      result += ', ';
    }
  }

  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);*/
/*const camelCase = function(input) {
  const words = input.split(' ');

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/
/*const multiplicationTable = function(maxValue) {
  let table = '';

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      const product = i * j;
      table += product + ' ';
    }
    table += '\n';
  }

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));*/

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  return (1 / 3) * PI * Math.pow(radius, 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let total = 0;
  for (const solid of solids) {
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height);
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

