// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairOfArray(array: number[]) {
  // O(n)
  for (let i = 0; i < boxes.length; i++) {
    // O(n)
    for (let j = 0; j < boxes.length; j++) {
      console.log(boxes[i], boxes[j]);
    }
  }
}

logAllPairOfArray(boxes);

/////////////////////////////////////////
// Time Complexity
//
// O(n * n) --> O(n^2)
//
// End of Time Complexity
/////////////////////////////////////////
