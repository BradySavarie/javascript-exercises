/* Selection Sort

Iterate through input array comparing each pair of values and storing the index of the smallest value in a min variable
if min is not equal to the index of the current iteration (if the current element is not the smallest), swap leftmost value of unsorted array with value at the min index
repeat for each value in unsorted array

*/

const unsortedArray = [1, 5, 2, 7, 3, 8, 4, 9];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

const sortedArr = selectionSort(unsortedArray);
console.log(sortedArr);
