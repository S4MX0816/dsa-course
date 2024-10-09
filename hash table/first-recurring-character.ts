//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

/**
 * returns the first recurring character in an array
 * @param input array of integers
 * @returns first recurring character
 * Time Complexity - O(n)
 */
function firstRecurringCharacter(input: number[]): number | undefined {
  const hashTable: Record<number, boolean> = {};
  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    if (hashTable[num]) return num;
    hashTable[num] = true;
  }
}

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];
const arr4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(arr1));
console.log(firstRecurringCharacter(arr2));
console.log(firstRecurringCharacter(arr3));
console.log(firstRecurringCharacter(arr4));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
