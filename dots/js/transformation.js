/*
Write a function that transforms an array of inputs into a new array based on a provided transformation function.
var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) { …TODO }

var output = transform(numbers, function(num) {
    return num * 2;
});
// output should be [2, 4, 6, 8]
*/


function transform(collection, transFunc){
    let transformed_collection = [];

    collection.forEach((val) => {
        transformed_collection.push(transFunc(val))
    })

    return transformed_collection;
}


let numbers = [1, 2, 3, 4]
let output1 = transform(numbers, function(num) {
    return num * 2;
});

console.log('Doubled '+output1)

let output2 = transform(numbers, function(num) {
    return num ** 2;
});

console.log('Squared '+output2)