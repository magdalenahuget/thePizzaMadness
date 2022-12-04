// YOUR CODE COMES HERE

// String repeat version 1 - for..i

function stringRepeat(number, str) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += str;
    }
    return result;
}

console.log(stringRepeat(2, "HawaiiPizza"));

// String repeat version 2 - .repeat()

function stringRepeat2(number, str) {
    return str.repeat(number);
}

console.log(stringRepeat2(2, "HawaiiPizza"));

// No whitespaces - .split().join()

function noSpace(str) {
    let result = "";
    result = str.split(" ").join("");
    return result;
}

console.log(noSpace("Pizza Pasta Italiano"));

// Number to string - .toString()

function numberToString(integer) {
    return integer.toString();
}

console.log(numberToString(1000500100900));

// Boolean to string

function booleanToString(boolean) {
    return boolean.toString();
}

console.log(booleanToString(true));

// Abbreviate a Pizza name - split().join()

function abbrevName(string) {
    let name = [];
    let abbrev = [];
    name = string.split(" ");
    for (let i = 0; i < name.length; i++) {
        abbrev += [name[i][0]]
    }
    return abbrev.split("").join(".");
}

console.log(abbrevName("Hawaii Pizza"));

// Pizza length - add length number to string

function nameLength(string) {
    let array = [];
    array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + " " + array[i].length
    }
    return array;
}

console.log(nameLength("hawaii pizza"));

// Remove the first and last element - attention "coma inside"

function removeOrders(string) {
    string = string.slice(2, -2);
    return string;
}

console.log(removeOrders("1,2,3,4"));

// The menu - add number to list of items

function foodMenu(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = (i + 1) + ". " + array[i]
    }
    return array
}

console.log(foodMenu(["Hawaii Pizza", "Diablo Pizza"]));

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        { name: "stringRepeat", content: stringRepeat, type: "function" },
        { name: "noSpace", content: noSpace, type: "function" },
        { name: "numberToString", content: numberToString, type: "function" },
        { name: "booleanToString", content: booleanToString, type: "function" },
        { name: "abbrevName", content: abbrevName, type: "function" },
        { name: "nameLength", content: nameLength, type: "function" },
        { name: "removeOrders", content: removeOrders, type: "function" },
        { name: "foodMenu", content: foodMenu, type: "function" }
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };