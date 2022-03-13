  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = []; // Create a new array with all nums multiplied by 2
for (let num of nums) {
  results.push(num * 2)
};

console.log(results)

// Using map()
const multiplyByTwo = function (num) {
  return num * 2
};

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults)


// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2}); // Place the function inside the parentheses
console.log(simplified)


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2); // Only one parameter in function so no parantheses needed, return value also simple so no parantheses or curly braces needed
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]); // For each student function returns student name and student id
console.log(studentsWithIds) // Shows an array of arrays containing student.name, student.id