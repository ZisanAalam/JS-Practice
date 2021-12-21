/*
1.  Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.

2.  Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
        Name: ABC School of Schoolery, Date: 2000
        Name: BCD School of Trickery, Date: 2006
*/


let info = {name : 'Sam',
            address: 'Kathmandu',
            email : 'sam@gmail.com',
            interests : ['snooker','travelling','singing'],
            education : [{name: 'ABC School of Schoolery',enrolledDate:'2000'},
                        {name: 'BCD School of Trickery', enrolledDate:'2006'}
                        ]
           };

function getEducationInfo(obj){
  
    info.education.forEach((value) =>{
       console.log('Name: '+ value['name'] +',' +' Date: '+value['enrolledDate']);
    })
}

getEducationInfo(info);