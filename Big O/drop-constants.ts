function printFirstItemThenFirstHalfThenSayHi100Times(items: number[]) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  // O(n/2)
  while (index < middleIndex) {
    console.log(items[index]);
    index++; // O(1)
  }

  // O(100);
  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

/////////////////////////////////////////
// Time Complexity
//
// O(1 + n/2 + 100)
// O(101 + n/2) --> Drop the constant O(n + 1) --> O(n)
//
// End of Time Complexity
/////////////////////////////////////////
