function boooo(n: number[]) {
  // O(n)
  for (let i = 0; i < n.length; i++) {
    // O(1) - variable i
    console.log("booooo!"); // O(n)
  }
}

boooo([1, 2, 3, 4, 5]);

/////////////////////////////////////////
// Time Complexity
//
// O(n)
//
// End of Time Complexity
/////////////////////////////////////////

/////////////////////////////////////////
// Space Complexity
//
// O(1) - because we are creating only 1 variable i
//
// End of Space Complexity
/////////////////////////////////////////

function arrayOfHiNTimes(n: number) {
  let hiArray = [];
  // O(n)
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; // O(n) time as well as space
  }
  return hiArray;
}

arrayOfHiNTimes(6);

/////////////////////////////////////////
// Time Complexity
//
// O(n)
//
// End of Time Complexity
/////////////////////////////////////////

/////////////////////////////////////////
// Space Complexity
//
// O(n) - because we are creating a new
// data structure and adding memory n times
//
// End of Space Complexity
/////////////////////////////////////////
