// input an array and a sum and check in array if any two number adds up to the sum

const sum = 8;
const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];

// -----------------------------------------------------------------------------------------------------
// @ Brute Force Solution
// -----------------------------------------------------------------------------------------------------

// O(n*2) - slow solution
// O(1) - Space Complexity
function hasPairWithSum__bruteForce(arr: number[], sum: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

console.log(hasPairWithSum__bruteForce(array1, sum));
console.log(hasPairWithSum__bruteForce(array2, sum));

// -----------------------------------------------------------------------------------------------------
// @ Hash Map Approach
// -----------------------------------------------------------------------------------------------------

// O(n) - linear time complexity
// O(n) - Space Complexity - the set will store at max n number of elements
function hasPairWithSum__setApproach(arr: number[], sum: number): boolean {
  // create an empty set
  const complements = new Set();
  // loop through the array and
  for (let i = 0; i < arr.length; i++) {
    // check if the number I am looking at already exists in the set
    if (complements.has(arr[i])) {
      // if yes, the pair is found
      return true;
    }

    // if not, complement the number which is required to make it equal to sum and store it in the set
    complements.add(sum - arr[i]);
  }

  return false;
}

console.log(hasPairWithSum__setApproach(array1, sum));
console.log(hasPairWithSum__setApproach(array2, sum));
