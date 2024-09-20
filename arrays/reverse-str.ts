// Create a function that reverse a string:
// 'Hi, My name is Sanyam' should be:
// 'maynaS si eman yM, iH'

/**
 * manually implementing the reverse method
 * @param str input to be reversed
 * @return reversed string
 */
function reverse(str: string) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid Input";
  }

  const backwardArr: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwardArr.push(str[i]);
  }

  return backwardArr.join("");
}

/**
 * using Js inbuilt methods
 * @param str input to be reversed
 * @return reversed string
 */
function reverse2(str: string) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid Input";
  }

  return str.split("").reverse().join("");
}

/**
 * using arrow function for one liner
 * @param str input to be reversed
 * @return reversed string
 */
const reverse3 = (str: string) => [...str].reverse().join("");

console.log(reverse("Hi, My name is Sanyam"));
console.log(reverse2("Hi, My name is Sanyam"));
console.log(reverse3("Hi, My name is Sanyam"));
