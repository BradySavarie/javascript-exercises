/* Bubble Sort
Time Complexity: Big O(n^2)
Space Complexity: Big O(1)

compare first element with second element of input array
if first value is larger, swap values
iterate comparison process until the second last index is reached
repeat above steps over unsorted portion of array
*/

const testArray = [1, 6, 3, 8, 0, 3, 7, 4];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1 - i; i++)
        for (let j = 0; j <= arr.length - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
}

let sortArray = bubbleSort(testArray);

console.log(testArray);
