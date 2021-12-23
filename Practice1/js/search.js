/*
Write a function that searches for an object by a specific key value in an array of objects:
var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

searchByName(fruits, 'apple');
Should return: {id: 2, name: 'Apple', color: 'Red'}

Also try searchByKey(fruits, 'name', 'apple');
*/

var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(obj, name){
    let matchedItems = [];
    obj.forEach(element => {
        if(element['name'].toLowerCase()==name.toLowerCase()){
            matchedItems.push(element);
        }
    });
    return matchedItems;
}

var matchedElments = searchByName(fruits, 'Apple')
matchedElments.forEach((value) =>{
    console.log(value);
});


/*------------------- Seach By Key ---------------------- */

// function searchByKey(obj, searchKey){
//     let matchedItems = [];

//     obj.forEach(element =>{
//         for(var key of Object.keys(element)){
//             if(key == searchKey.toLowerCase){
//                 matchedItems = element;
//                 break;
//             }
//         }
      
//     })
// }

// var matchedElments = searchByName(fruits, 'id')
// matchedElments.forEach((value) =>{
//     console.log(value);
// });