// ********************************************* Object ************************************************

let car = {
    brand : 'Toyota',
    model : 'Camry',
    year : 2023,
    start : function(){
        console.log("Engine Started")
    }
}
// Accessing object properties by dot notation
console.log(car.brand)
// Accessing object properties by bracket notation
console.log(car["model"])
// calling object method
car.start()

// ********************************************* for loop ************************************************

for(let i=1; i<=5; i++){
    console.log(i)
}
// ********************************************* for-in loop ************************************************

let rectangle = {
     length : 5,
     breath : 10,
}
for( let key in rectangle){
    console.log(key);
}
for (let key in rectangle) {
    console.log(key,rectangle[key])
}

// ********************************************* forEach loop in aaray doubt************************************************
// let num = [2,3,4,5,6]
// num.forEach((elememt)=>{
//     console.log(element * element)
// })
    
// ********************************************* while loop ************************************************
let j=6;
while(j<=10){
    console.log(j);
    j++;
}


// ********************************************* do while loop ************************************************

let k=11;
do {
    console.log(k);
    k+=2;
    // or k=k+2
}while(k<=20)

// ********************************************* Arrays ************************************************

let myArray = [1,2,3,4,5,"six","seven",true]
console.log(myArray[6])

// methods for adding elements
myArray.push("eight")
console.log(myArray)
myArray.unshift("zero")
console.log(myArray)
myArray.splice(1,0,"true","false")
console.log(myArray)

// methods for removing elements
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.splice(4,2)
console.log(myArray)

// combining arrays
let firstArray = [1,2,3,4,5]
let secondArray = [6,7,8,9,10]
let thirdArray = firstArray.concat(secondArray)
console.log(thirdArray)

//slicing array
let arr = [20,21,22,23,24,25,26,27,28,29,30]
let ar = arr.slice(5)
console.log(ar)

// ********************************************* Array.from method ************************************************

let a = "Bhuvneshwari"
let b = Array.from(a);
console.log(b)

// ********************************************* for-of loop using in array ************************************************

let number = [10,11,12,13,14,15]
for (let i of number) {
    console.log(i)
}

// ********************************************* for-in loop using in array ************************************************

let numb = [10,11,12,13,14,15]
for (let j in numb) {
    console.log(j)
}

// ********************************************* heigher order array methods************************************************

// 1. map() method
let first = [35,40,56]
console.log(first)
let second = first.map((value,index,array)=>{
    console.log(value,index,array)
    return value + 1
})
console.log(second)

// 1. filter() method
let third = [90,3,10,5,92,100]
let fourth = third.filter((z)=>{
    return z<10
})
console.log(fourth)

// 1. reduce() method
let fifth = [30,40,50,60,50]
let sixth = fifth.reduce((h1,h2)=>{
    return h1+h2
})
console.log(sixth)


// ********************************************* Functions************************************************

// 1. Named function Assignment
let w = function walk(){
    console.log("walking")
}
w()

// 2. Anonymous function Assignment
let r = function(){
    console.log("running")
}
r()

// functions with arguments
function sum(a,b){
   console.log(a+b) 
}
sum(3,6)

// functions without arguments
function greet(){
    console.log("hello!") 
 }
 greet()

//  default parameters
function intrest(p,r=5,y=6){
    return p*r*y/100
}
console.log(intrest(100))
console.log(intrest(100,200,300))

// Arrow function
 let multiply=(a,b)=> a*b
 let result = multiply(4,6)
 console.log(result)

// ********************************************* Closures  ************************************************

//  Ex.1 : 
function init(){
    var name = "Mozzila";
    function displayName(){
        console.log(name);
    }

    displayName();
}
init()

//  Ex.2 :
const x = ()=>{
    let a = 1
    console.log(a)
    const y = ()=>{
        let a = 2
        console.log(a)
        const z = ()=>{
            let a = 3
            console.log(a)
        }
        z()
    }
    y()
}
x()


// ********************************************* Immediately Invoked Function Expression (IIFE) ************************************************
// let fun = () =>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve(450)
//     },4000)
// })
// }
// (async () => {
// let fun2 = await fun()
// console.log(fun2)
// let fun3 = await fun()
// console.log(fun3)
// let fun4 = await fun()
// console.log(fun4)
// })()

// *********************************************alert , prompt and confirm  method************************************************

// alert("Hey guys")

// prompt("How I can help u?")

// const userConfirmed = confirm("Do you want to proceed?");
// if(userConfirmed){
//     console.log("User Clicked OK.");
// }
// else{
//     console.log("User Clicked Cancel.");
// }

// *********************************************setTimeout method************************************************
// let timeout =setTimeout(function(){
//     console.log("hello developer");
// },5000);
// console.log(timeout);

// *********************************************setInterval method************************************************
// let interval =setInterval(function(){
//     console.log("hello");
// },4000)
// console.log(inetrval);

// callback function
// function goodEvening(){
//     alert("Good Evening");
// }

// function goodMorning(){
//     alert("Good Morning");
// }

// ********************************************* promises ************************************************

let myPromise = new Promise(function(resolve,reject){
    alert("I am an alert in promise")
    resolve(56)
    
})
console.log("Hello one")
setTimeout(function(){
      console.log("Hello two in 4 seconds")
},2000)
console.log("My name is" + "Hello three")
console.log(myPromise)


// promise .then() , .catch() methods

let p1 = new Promise ((resolve,reject)=> {
   console.log("promise is pending")
   setTimeout(() => {
    // console.log("I am a promise and i m resolve")
    resolve(true)
   },1000)
})

let p2 = new Promise ((resolve,reject)=> {
    console.log("promise is pending")
    setTimeout(() => {
    //  console.log("I am a promise and i m rejected")
     reject(new Error("I am an error"))
    },1000)
 })

//  console.log(p1,p2)

p1.then((value) => {
    console.log(value)
})
p2.catch((error) => {
    console.log("some error occured in p2")
})


// Async/Await keywords

async function weather(){
    let delhiWeather = new Promise ((resolve,reject)=> {
        setTimeout(() => {
         resolve("27 degree")
       },1000)
    })
    let bangaloreWeather = new Promise ((resolve,reject)=> {
       setTimeout(() => {
        resolve("21 degree")
      },2000)
   })

    let delhi = await delhiWeather
    let bangalore = await bangaloreWeather
    return(delhi,bangalore)
}
console.log("Welcome to weather control room")
let we = weather()
console.log(we)

// ********************************************* Error Handling - try catch ************************************************

function h(){  setTimeout(() => {
    console.log(" Hacking wifi...Please wait...")
  },1000)

try{
    console.log(rahul)
}
catch(err){
    console.log("Balle balle")
}
setTimeout(() => {
    console.log(" Fetching username and password...Please wait...")
  },2000)

setTimeout(() => {
    console.log(" Hacking Rahul's facebook id...Please wait...")
  },3000)
setTimeout(() => {
    console.log(" Username and password of Rahul (+919784906***) fetched...Please wait...")
  },4000)  
}
h()

// finally clause

function errorone(){
    try{
        console.log("program ran successfully")
        return
    }
    catch(err){
        console.log("This is an error")
        console.log(p)
    }
    finally{
        console.log("I am finally")
    }
}
errorone()

// ********************************************* Oops concept ************************************************

