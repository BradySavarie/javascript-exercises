/* Insertion Sort
Time Complexity: Big O(n^2)

Element at index 0 of input array is considered sorted
Starting at index 1, compare first element in the unsorted portion of the input array to the last element in the sorted portion of the input array
While current element is smaller, move last unsorted element 1 position to the right
If current element is larger, place it in open space to the right of the unsorted element
Repeat for each unsorted element in the input array

*/

const unsortedArray = [1, 5, 2, 7, 4, 9, 3, 10];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
