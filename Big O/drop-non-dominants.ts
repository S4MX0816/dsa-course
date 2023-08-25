function printAllNumbersThenAllPairSums(numbers: number[]) {
  console.log("these are the numbers:");
  // O(n)
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  // O(n)
  numbers.forEach(function (firstNumber) {
    // O(n)
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

/////////////////////////////////////////
// Time Complexity
//
// O(n + n*n) --> O(n + n^2) --> Drop non dominants --> O(n^2)
//
// End of Time Complexity
/////////////////////////////////////////
