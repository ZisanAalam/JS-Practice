/*Write a program to sort an array of object by a target key. The original array should remain unchanged.*/

var arr = [{
        id: 1,
        name: 'John',
    }, {
        id: 2,
        name: 'Mary',   
    }, {
        id: 3,
        name: 'Andrew',
    }];

function sortBy(array, key) {
    const tempArray = Object.assign({},array);
    var tempObject = {};

    for(let i=0; i<(array.length-1); i++){
        for(let j=(i+1); j<array.length; j++){
            if(tempArray[i][key] > tempArray[j][key]){

                tempObject = tempArray[i];
                tempArray[i] = tempArray[j];
                tempArray[j]= tempObject;
                
            }
        }
    }

    return tempArray;
}

var sortedArray = sortBy(arr, 'name');
console.log(sortedArray);
