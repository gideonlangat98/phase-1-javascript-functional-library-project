const myEach = function(array, alert) {
    Object.values(array).forEach(element => alert(element))
    return array
}

const myMap = function(theArray, callback) {
    let values = Object.values(theArray);
    callback = values.map(y => y * 3)

    return callback
}

const myReduce = function(theArray, callback, acc) {
    let values = Object.values(theArray);

    if(!acc) {
        acc = values [0];
        values = values.slice(1);
    }
let newArray = values.length;
for(let i=0; i < newArray; i ++) {
    acc = callback(acc, values[i], values);
    }
    return acc;
}

const myFind = function(theArray, target) {
    let values = Object.values(theArray)
    for (let num = 0; num < theArray.length; num ++){
        if (target(values[num])){
            return values[num]
        }
    }
}

const myFilter = function (theArray, empt) {
    let values = Object.values(theArray)
    return values.filter (number => number > 10)
}

const mySize = function (theArray) {
    let values = Object.values(theArray)
    let newArray = new Set(values)
    return newArray.size
}

const myFirst = function(theArray, n) {
    let values = Object.values(theArray)
    if (n) {
        return values.slice(0, n)
    }
    return values[0]
}

const myLast = function(theArray, start = false ) {
    return (start) ? theArray.slice(theArray.length-start, theArray.length) : theArray[theArray.length-1];
}

const myKeys = function (theArray) {
    return Object.keys(theArray)
}

const myValues = function(theArray) {
    return Object.values(theArray)
}