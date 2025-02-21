// 1) .arrow function

// var testArrowFunction = () => {
//     console.log("This is test arrow function")
// }
// testArrowFunction()

// 1. variables refer to variables
// 2. arrow function => 
    // var functionName=()=>{}

// var arrowfuntion = () => {
//     console.log("this is testing arrow function")
// }
// arrowfuntion()



// 2) Scoping

// types of scope :
// 1. global -var  2. local - let  
// const

// var a=10;
// console.log(a);
// var f;
// //scoping starts
// {
//     let a=20;
//     console.log(a);
//     let b=30;
//     console.log(b);
//     let c=40;
//     console.log(c);
//     var e=50;
//     console.log(e);
//     a=30;
//     console.log(a);
//     const g=20
//     // let a=30;
//     // console.log(a)  // gives error because 'a' already declared
//     f=30;
// }
// console.log(a);
// console.log(e);
// console.log(c) // ans : Reference error
// console.log(g) // ans : Reference error

// var is something of global while let is off local
// var can declared again as let but not vice versa

// var a=10
// while( a<12){
//     console.log(a)
//     a++
// }
// console.log(a)



// 3) Ternary Operator

// a=10
// console.log(a%2==1 ? "odd":"even")


// 4) spread operator(...)

// stud1year=["user1","user2","user3"]
// stud2year=["user4","user5","user6"]
// stud3year=["user7","user8","user9"]
// stud4year=["user10","user11","user12"]
// // studDB=[stud1year,stud2year,stud3year,stud4year]
// studDB=[...stud1year,stud2year,...stud3year,stud4year]
// console.log(studDB)
// // aluminiDB=stud4year
// // console.log(aluminiDB)



// 5) Rest operator

// function studentDB(...studDataBase){
//     console.log(studDataBase);
// }
// studentDB(studDB)


// 6) Destructing Operator

// var array=[10,20,30,40,50,60]
// // var [a,b]=array
// var [a,b,c,d,e,f]=array
// console.log(a,b,f)


// 7) Hosting

// var x = 5; // Initialize x
// var y;     // Declare y
// console.log(x,y)          // Display x and y  O/P: 5 undefined

// y = 7;


// 8)  Class and Objects

// class ClassEg {
//     classFun(){
//         console.log("Hello function from class")
//         return 1.5
//     }
// }
// obj=new ClassEg()
// console.log(obj.classFun)

