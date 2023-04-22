/* Pseudocode

Define a function that takes an unsorted array as an argument.
Check if the length of the array is 0 or 1, which means it's already sorted. If so, return the array as is.
Divide the array into two halves using the middle index.
Recursively call the Merge Sort function on each half.
Define a helper function that takes two sorted arrays and merges them into a single sorted array using the merging technique described in the previous answer.
Call the helper function to merge the two sorted halves from step 4.
Return the merged array as the final sorted result.

 */
const testArr = [1, 4, 2, 5, 8, 6, 7];

function mergeSort(inputArr) {
    if (inputArr.length <= 1) {
        return inputArr;
    }
    let midIndex = Math.floor(inputArr.length / 2);
    let firstHalf = inputArr.slice(0, midIndex);
    let lastHalf = inputArr.slice(midIndex);

    let sortedFirstHalf = mergeSort(firstHalf);
    let sortedLastHalf = mergeSort(lastHalf);

    return merge(sortedFirstHalf, sortedLastHalf);
}

function merge(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i++]);
        } else {
            mergedArr.push(arr2[j++]);
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i++]);
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j++]);
    }

    return mergedArr;
}

let sortedArr = mergeSort(testArr);
console.log(sortedArr);
