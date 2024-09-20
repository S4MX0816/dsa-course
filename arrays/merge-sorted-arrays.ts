// Merge two sorted arrays
// arr1: [0, 3, 4, 31]
// arr2: [4, 6, 30]
// res: [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1: number[], arr2: number[]) {
  const mergedArr: number[] = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 0;

  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
