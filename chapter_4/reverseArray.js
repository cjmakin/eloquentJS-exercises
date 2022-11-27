// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as argument and produces a new array that has 
// the same elements in the inverse order. The second, reverseArrayInPlace, does what the 
// reverse method does: it modifies the array given as argument by reversing its elements. 
// Neither may use the standard reverse method.

function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i > -1; i--) {
        result.push(arr[i]);
    }
    return result;
}

function reverseArrayInPlace(arr) {
    let temp;
    let j = arr.length - 1;

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
}

let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(reverseArray(["A", "B", "C"]));
console.log(arrayValue);