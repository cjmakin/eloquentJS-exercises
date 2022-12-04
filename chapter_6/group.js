// Write a class called Group (since Set is already taken). Like Set, it has add, delete, 
// and has methods. Its constructor creates an empty group, add adds a item to the group 
// (but only if it isn’t already a member), delete removes its argument from the group 
// (if it was a member), and has returns a Boolean item indicating whether its argument is a member of the group.
// 
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
// 
// Give the class a static from method that takes an iterable object as argument and creates a group that contains 
// all the values produced by iterating over it.

class Group {
    constructor(item = null) {
        this.members = [];

        if (item != null && !this.has(item)) {
            this.add(item);
        }
    }

    add(item) {
        if (!this.has(item)) {
            this.members.push(item);
        }
    }

    delete(item) {
        let index = this.members.indexOf(item)

        if (index > -1) {
            this.members.splice(index, 1);
        } else {
            return false;
        }
    }

    has(item) {
        if (this.members.indexOf(item) == -1) {
            return false;
        } else {
            return true;
        }
    }

    static from(iter) {
        let group = new Group();

        for (let i = 0; i < iter.length; i++) {
            group.add(iter[i]);
        }
        return group;
    }
}

// Test cases
let group = Group.from([10, 20]);
console.log(group.members);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Make the Group class from the previous exercise iterable. Refer to the section about the iterator 
// interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
// 
// If you used an array to represent the group’s members, don’t just return the iterator created
// by calling the Symbol.iterator method on the array. That would work, 
// but it defeats the purpose of this exercise.

class GroupIterator {
    constructor(group) {
        this.iter = 0;
        this.group = group;
    }

    next() {
        if (this.iter == this.group.members.length) return { done: true };

        let value = this.group.members[this.iter];

        this.iter++;

        return { value, done: false };
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c



