const strings = ["a", "b", "c", "d"];
// in a 32 bit system, 4 bytes required for storing one element
// 4*4 =  16 bytes of storage

// push
strings.push("e"); // O(1)
console.log(strings);

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)
console.log(strings);

// unshift
strings.unshift("x"); // O(n)
console.log(strings);

// splice
strings.splice(2, 0, "alien"); // O(n/2) -< O(n)
console.log(strings);
