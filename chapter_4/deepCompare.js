// Write a function deepEqual that takes two values and returns true only if they are the 
// same value or are objects with the same properties, where the values of the properties are 
// equal when compared with a recursive call to deepEqual.

function deepEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (typeof obj1 == "object" && typeof obj2 == "object"
        && obj1 != null && obj2 != null) {

        if (keys1.length != keys2.length) { return false; }

        for (let i = 0; i < keys1.length; i++) {

            if (keys1[i] != keys2[i] || obj1[keys1[i]].toString() != obj2[keys2[i]].toString()) {
                return false;
            }
        }

        return true;
    } else {
        return (obj1 === obj2);
    }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true