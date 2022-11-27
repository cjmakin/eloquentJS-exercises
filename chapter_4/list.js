// Write a function arrayToList that builds up a list structure like the one shown when 
// given [1, 2, 3] as argument. Also write a listToArray function that produces an array 
// from a list. Then add a helper function prepend, which takes an element and a list and creates 
// a new list that adds the element to the front of the input list, and nth, which takes a list 
// and a number and returns the element at the given position in the list (with zero referring to 
// the first element) or undefined when there is no such element.
// 
// If you haven’t already, also write a recursive version of nth.

// LISTS

function print(out) { console.log(out); }

function arrayToList(arr) {
    let list = {
        value: null,
        rest: null
    };

    for (let i = arr.length - 1; i > -1; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr.slice(0, arr.length - 1);
}

function prepend(list, val) {
    let newList = {
        value: val,
        rest: list
    };
    return newList;
}

function nth(list, index) {

    if (index <= 1) {
        return list.value;
    } else {
        return nth(list.rest, index - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

let list1 = arrayToList([10, 20, 21, 22, 23, 25]);
let list2 = prepend(list1, -1);
print(list1);
print(list2);

print(nth(list1, 0));
