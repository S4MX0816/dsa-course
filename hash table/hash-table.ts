const user: Record<string, any> = {
  age: 26,
  name: "Sanyam Trehan",
  magic: true,
  scream: function () {
    console.log("ahhhhhhhh!");
  },
};

console.log(user.age); // O(1)
user.spell = "abra kadabra"; //O(1)
user.scream(); // O(1)
console.log(user);

// In case of Hash Collision,
// reading/writing operations are slowed down by
// O(n/k) -> O(n), where k(constant) is the size of the Hash Table
