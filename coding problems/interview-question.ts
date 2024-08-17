// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

// -----------------------------------------------------------------------------------------------------
// @ Brute Force Solution
// -----------------------------------------------------------------------------------------------------

// O(a^b) - slow solution
// O(1) - Space Complexity
function containsCommonItem__bruteForce(arr1: string[], arr2: string[]) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem__bruteForce(array1, array2));
console.log(containsCommonItem__bruteForce(array3, array4));

// -----------------------------------------------------------------------------------------------------
// @ Hash Map Approach
// -----------------------------------------------------------------------------------------------------

// array1 => obj {
// a: true
// b: true
// c: true
// x: true
// }
//
// array[index] === obj.properties

// O(a+b) - Better Time Complexity
// O(a) - Space Complexity
function containsCommonItem__objectApproach(arr1: string[], arr2: string[]) {
  // loop through first array and create object where properties === items in array
  // mapArrayToObject() - modular approach
  const map: Record<string, boolean> = {};
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (!map[item]) {
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exist on created object
  // compareArrayToObject() - modular approach
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem__objectApproach(array1, array2));
console.log(containsCommonItem__objectApproach(array3, array4));

// -----------------------------------------------------------------------------------------------------
// @ Better Readibility
// -----------------------------------------------------------------------------------------------------

// O(a*b) - Better Readibility
function containsCommonItem__objectApproach__readablitiyImproved(
  arr1: string[],
  arr2: string[]
) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(
  containsCommonItem__objectApproach__readablitiyImproved(array1, array2)
);
console.log(
  containsCommonItem__objectApproach__readablitiyImproved(array3, array4)
);
