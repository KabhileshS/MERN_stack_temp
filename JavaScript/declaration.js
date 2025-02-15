// //const
// const ar=2; //not changeable like let or var
// let b;
// var c=true;

// //array
// a=[1,6,"abc",true]

// console.log(typeof(a),a[3])

// // objects
// object1={
//     "firstname":"St.Joseph's",
//     "lastname":"Institute Of Technology",
//     "depts":["cse","it","ece","ads"],
//     "training":"mern"
// }
// console.log(object1["depts"])

// console.log(5||10)
// console.log(5&&10)
// console.log(5=='5')

// //shift - left operator
// console.log(55<<3) 

// //right -shift operator
// console.log(55>>4)


//bitwise operators
// a=20
// b=35
// console.log(a&b)
// console.log(a^b)

// c=1
// console.log(~c)

//conditional statement
// 1.if
// 2.if ... else
// 3. nested if
// 4. else if ladder
// 5. switch

// Looping Statements
/*
1. while 
2. do ... while
3. for(;;)
*/

array=[10,20,30,"abc",true,"hello",[10,20,30]]

object1={
    "firstname":"St.Joseph's",
    "lastname":"Institute Of Technology",
    "depts":["cse","it","ece","ads"],
    "training":"mern"
}

// for(i in array){
//     console.log(i);
// }
// for(i in object1){
//     console.log(i);
// }

// for(i of array){
//     console.log(i)
//}


// Object. entries/keys/values

for({key,value} of Object.entries(object1)){
    console.log(key,value);
}

// for(key of object.keys(object1)){
//     console.log(key,value);
// }

Object.entries(object1).forEach((ele)=>{
    console.log(key,ele);
})