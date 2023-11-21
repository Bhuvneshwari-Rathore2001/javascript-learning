// ********************************************* Object ************************************************



// let car = {
//     brand : 'Toyota',
//     model : 'Camry',
//     year : 2023,
//     start : function(){
//         console.log("Engine Started")
//     }
// }
// Accessing object properties by dot notation
// console.log(car.brand)
// Accessing object properties by bracket notation
// console.log(car["model"])
// calling object method
// car.start()



// ********************************************* for loop ************************************************



// for(let i=1; i<=5; i++){
//     console.log(i)
// }


// ******************************************* for-in loop ************************************************



// let rectangle = {
//      length : 5,
//      breath : 10,
// }
// for( let key in rectangle){
//     console.log(key);
// }
// for (let key in rectangle) {
//     console.log(key,rectangle[key])
// }



// ***************************************** forEach loop in aaray doubt************************************************



// let num = [2,3,4,5,6]
// num.forEach((elememt)=>{
//     console.log(element * element)
// })


    
// ******************************************* while loop ************************************************



// let j=6;
// while(j<=10){
//     console.log(j);
//     j++;
// }



// ******************************************** do while loop ************************************************



// let k=11;
// do {
//     console.log(k);
//     k+=2;
//     // or k=k+2
// }while(k<=20)



// ******************************************** Arrays ************************************************



// let myArray = [1,2,3,4,5,"six","seven",true]
// console.log(myArray[6])

// // methods for adding elements
// myArray.push("eight")
// console.log(myArray)
// myArray.unshift("zero")
// console.log(myArray)
// myArray.splice(1,0,"true","false")
// console.log(myArray)

// // methods for removing elements
// myArray.pop()
// console.log(myArray)
// myArray.shift()
// console.log(myArray)
// myArray.splice(4,2)
// console.log(myArray)

// // combining arrays
// let firstArray = [1,2,3,4,5]
// let secondArray = [6,7,8,9,10]
// let thirdArray = firstArray.concat(secondArray)
// console.log(thirdArray)

// //slicing array
// let arr = [20,21,22,23,24,25,26,27,28,29,30]
// let ar = arr.slice(5)
// console.log(ar)



// ******************************************* Array.from method ************************************************



// let a = "Bhuvneshwari"
// let b = Array.from(a);
// console.log(b)



// ***************************************** for-of loop using in array ************************************************



// let number = [10,11,12,13,14,15]
// for (let i of number) {
//     console.log(i)
// }



// ***************************************** for-in loop using in array ************************************************



// let numb = [10,11,12,13,14,15]
// for (let j in numb) {
//     console.log(j)
// }



// **************************************** heigher order array methods************************************************



// // 1. map() method
// let first = [35,40,56]
// console.log(first)
// let second = first.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value + 1
// })
// console.log(second)

// // 1. filter() method
// let third = [90,3,10,5,92,100]
// let fourth = third.filter((z)=>{
//     return z<10
// })
// console.log(fourth)

// // 1. reduce() method
// let fifth = [30,40,50,60,50]
// let sixth = fifth.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(sixth)



// *********************************  Destructuring assignment and Spread Operator ************************************************



// let arr = [3,5,8,9,12,14]

//             // Destructuring syntax


// // let [a,b,c,d] = arr
// // console.log(a,b,c,d)

// // let [a,b,c,d,...rest] = arr
// // console.log(a,b,c,d,rest)

// let [a, , , ...rest] = arr
// console.log(a,rest)

//            // spread operator


// // Ex-1

// let arr1 = [3,5,8]
// let obj1 = { ...arr1 }
// console.log(obj1)

// function sum(v1,v2,v3){
//     return v1+v2+v3
// }

// console.log(sum(...arr1))

// // Ex-2

// let obj2 = {
//     name : "Bhuvi",
//     company : "company xyz",
//     address : "xyz"
// }

// console.log( {...obj2, name: "John", company: "ABC"})

// console.log( { name: "John", company: "ABC" ,...obj2})




// ********************************************* Functions ************************************************




//                                      // 1. Named function Assignment
// let w = function walk(){
//     console.log("walking")
// }
// w()



//                                      // 2. Anonymous function Assignment
// let r = function(){
//     console.log("running")
// }
// r()


// // functions with arguments
// function sum(a,b){
//    console.log(a+b) 
// }
// sum(3,6)


// // functions without arguments
// function greet(){
//     console.log("hello!") 
//  }
//  greet()


// //  default parameters
// function intrest(p,r=5,y=6){
//     return p*r*y/100
// }
// console.log(intrest(100))
// console.log(intrest(100,200,300))



//                                         // 3.  Arrow function
//  let multiply=(a,b)=> a*b
//  let result = multiply(4,6)
//  console.log(result)




//                          // 4. Immediately Invoked Function Expression (IIFE)



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
//  })()



//                                        // 5. callback function  



// function doSomethingAsync(callback){
//     setTimeout(function(){
//          console.log("Operation completed")
//          callback();
//     },2000)
// }

// function myCallback(){
//     console.log("Callback function executed")
// }

// doSomethingAsync(myCallback)



// ********************************************* Closures  ************************************************



//  Ex.1 : 
// function init(){
//     var name = "Mozzila";
//     function displayName(){
//         console.log(name);
//     }

//     displayName();
// }
// init()


//  Ex.2 :
// const x = ()=>{
//     let a = 1
//     console.log(a)
//     const y = ()=>{
//         let a = 2
//         console.log(a)
//         const z = ()=>{
//             let a = 3
//             console.log(a)
//         }
//         z()
//     }
//     y()
// }
// x()




// **************************** Constructor function *****************************



// function Car(brand,model){
//     this.brand = brand;
//     this.model = model;
//     }

// // Adding a method to the Car prototype
// Car.prototype.start= function(){
//      console.log("Engine started")
// }

// //  Creating an instance of Car  
// let myCar = new Car("Toyota","Camry")

// // Assessing properties
// console.log(myCar.brand)
// console.log(myCar.model)
 
// // Assessing a method from the prototype
// myCar.start()




// *************************************** alert , prompt and confirm  method **************************************



// alert("Hey guys")

// prompt("How I can help u?")

// const userConfirmed = confirm("Do you want to proceed?");
// if(userConfirmed){
//     console.log("User Clicked OK.");
// }
// else{
//     console.log("User Clicked Cancel.");
// }



// ********************************************* setTimeout method ************************************************



// let timeout =setTimeout(function(){
//     console.log("hello developer");
// },5000);
// console.log(timeout);



// ********************************************* setInterval method ************************************************



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




// let myPromise = new Promise(function(resolve,reject){
//     alert("I am an alert in promise")
//     resolve(56)
    
// })
// console.log("Hello one")
// setTimeout(function(){
//       console.log("Hello two in 4 seconds")
// },2000)
// console.log("My name is" + "Hello three")
// console.log(myPromise)


// promise .then() , .catch() methods

// let p1 = new Promise ((resolve,reject)=> {
//    console.log("promise is pending")
//    setTimeout(() => {
//     // console.log("I am a promise and i m resolve")
//     resolve(true)
//    },1000)
// })

// let p2 = new Promise ((resolve,reject)=> {
//     console.log("promise is pending")
//     setTimeout(() => {
//     //  console.log("I am a promise and i m rejected")
//      reject(new Error("I am an error"))
//     },1000)
//  })

//  console.log(p1,p2)

// p1.then((value) => {
//     console.log(value)
// })
// p2.catch((error) => {
//     console.log("some error occured in p2")
// })


// Async/Await keywords

// async function weather(){
//     let delhiWeather = new Promise ((resolve,reject)=> {
//         setTimeout(() => {
//          resolve("27 degree")
//        },1000)
//     })
//     let bangaloreWeather = new Promise ((resolve,reject)=> {
//        setTimeout(() => {
//         resolve("21 degree")
//       },2000)
//    })

//     let delhi = await delhiWeather
//     let bangalore = await bangaloreWeather
//     return(delhi,bangalore)
// }
// console.log("Welcome to weather control room")
// let we = weather()
// console.log(we)




// ********************************************* promise API doubt ************************************************



// let p1 = new Promise((resolve,reject)=>{
//     setTimeout (()=>{
//          resolve("value 1")
//     })
// },1000)

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout (()=>{
//          resolve("value 2")
//     })
// },3000)

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout (()=>{
//          resolve("value 3")
//     })
// },5000)

// let p4 = new Promise((resolve,reject)=>{
//     setTimeout (()=>{
//         //  resolve("value 4")
        
//     })
// },7000)

// // p1.then((value)=>{
// //     console.log(value)
// // })
// // p2.then((value)=>{
// //     console.log(value)
// // })

// // p3.then((value)=>{
// //     console.log(value)
// // })

// // p4.then((value)=>{
// //     console.log(value)
// // })

// let promise_all = Promise.all([p1,p2,p3,p4])
// promise_all.then((value)=>{
//     console.log(value)
// })



// // ********************************************* fetch API doubt output ni aara ************************************************



   //fetch API returns a promise    




// ********************************************* sending post request with fetch API  ************************************************


//                                       //  1.POST request using fetch()

// //  Ex-1:                                               

// const CreateTodo = async (todo)=>{
//        let options = {
//               method: "POST",
//               headers:{
//                     "Content-type": "application/json"
//               },
//               body: JSON.stringify(todo),
        
//         }
//        let p = await fetch("https://jsonplaceholder.typicode.com/posts",options)
//        let response = await p.json()
//        return response

// }

// const mainFunc = async () => {
// 	let todo = {
// 		title: "bhuvi",
//         body:"singh",
// 		userId:1100
// 	}
//     let todor = await CreateTodo(todo)
//     console.log(todor)
// }

// mainFunc()


// Ex - 2: Easy to understand



// fetch("https://jsonplaceholder.typicode.com/posts", {
	
// 	// Adding method type
// 	method: "POST",
	
// 	// Adding body or contents to send
// 	body: JSON.stringify({
// 		title: "foo",
// 		body: "bar",
// 		userId: 1
// 	}),
	
// 	// Adding headers to the request
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8"
// 	}
// })

// // Converting to JSON
// .then(response => response.json())

// // Displaying results to console
// .then(json => console.log(json));




//                                    //  2. GET request using fetch()


// fetch("https://jsonplaceholder.typicode.com/posts", {
	
// 	// Adding method type
// 	method: "GET",

// 	// Adding headers to the request
// 	headers: {
// 		"Content-type": "application/json;"
// 	}
// })

// // Printing response data
// .then(response => console.log(response.json()))




// ********************************************* cookies ************************************************



// console.log(document.cookie)
// document.cookie = "name = Bhuvi1122334400"
// document.cookie = "name 2 = Bhuvi1122334455"
// document.cookie = "name = Bhuvi"
// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}={encodeURIComponent(value)}`
// console.log(document.cookie)




// ********************************************* localStorage and related methods ************************************************



// let key = prompt("Enter key you want to set")
// let value = prompt("Enter value you want to set")

// localStorage.setItem(key,value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// if(key == "red" || key == "blue"){
//    localStorage.removeItem(key)
// }

// if(key == 0){
//    localStorage.clear()
// }




// ********************************************* sessionStorage and related methods ************************************************



// // sessionStorage.getItem("name")
// // sessionStorage.clear()
// // sessionStorage.removeItem("name")
// // sessionStorage.setItem("name","bhuvi")
// // sessionStorage.removeItem("name")

// window.onstorage = (e) => {
//    alert("changrd")
//    console.log(e)
// }



// ****************************************** Error Handling - try catch ************************************************



// function h(){  setTimeout(() => {
//     console.log(" Hacking wifi...Please wait...")
//   },1000)

// try{
//     console.log(rahul)
// }
// catch(err){
//     console.log("Balle balle")
// }
// setTimeout(() => {
//     console.log(" Fetching username and password...Please wait...")
//   },2000)

// setTimeout(() => {
//     console.log(" Hacking Rahul's facebook id...Please wait...")
//   },3000)
// setTimeout(() => {
//     console.log(" Username and password of Rahul (+919784906***) fetched...Please wait...")
//   },4000)  
// }
// h()

// finally clause

// function errorone(){
//     try{
//         console.log("program ran successfully")
//         return
//     }
//     catch(err){
//         console.log("This is an error")
//         console.log(p)
//     }
//     finally{
//         console.log("I am finally")
//     }
// }
// errorone()



// ******************************************* Oops concept *********************************************



// **************************** Classes and Objects*****************************



// class RailwayForm{
//     submit(){
//         alert("form submitted")
//     }
//     cancel(){
//         alert("This form is cancelled")
//     }
// }

//  //creating instance of the class
// let bhuvi = new RailwayForm()
// let jodha = new RailwayForm()

// bhuvi.submit()
// jodha.submit()
// jodha.cancel()




// **************************** static method doubt error *****************************



// class MathOperations{
//     static add(x,y){
//         return x+y;
//     }

//     subtract(x,y){
//         return x-y;
//     }

//     static multiply(x,y){
//         return x*y;
//     }
    
//     divison(x,y){
//         return x/y;
//     }
// }

// //  Accessing static methods by dot
// console.log(MathOperations.add(5,6));
// console.log(MathOperations.multiply(5,6));

// //  creating an instance of the class
// let op1 = new MathOperations()
// console.log(op1.subtract(8,6));
// console.log(op1.divison(6,6));




// **************************** Constructor *****************************



// class RailwayForm2{
//     constructor(){
//         console.log("Constructor called...");
//     }
//     submit2(){
//         alert("form submitted")
//     }
//     cancel2(){
//         alert("This form is cancelled")
//     }
// }
// let bhuvi2 = new RailwayForm2()
// let jodha2 = new RailwayForm2()

// bhuvi2.submit2()
// jodha2.submit2()
// jodha2.cancel2()



// **************************** Inheritance *****************************



// class Animal{
//     constructor(name,color){
//         this.name = name
//         this.color = color

//     }
//     run(){
//         console.log(this.name + "is running")
//     }
//     shout(){
//         console.log(this.name + "is shouting")
//     }
// }
// class Monkey extends Animal{
    
//     eatBanana(){
//         console.log(this.name + "is running")
//     }
    
// }

// // obj create
// let ani = new Animal("Bruno","white")
// let mon = new Monkey ("Chimpu","orange")

// ani.shout()
// mon.shout()



// ************************* Inheritance - method overriding and super keyword*************************



// class Employee{
//     login(){
//         console.log("Employee has logged in")
//     }
//     logout(){
//         console.log("Employee has logged out")
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`)
//     }
// }
// class Programmer extends Employee{
//     requestCoffee(coffee){
//         console.log(`Employee has requested ${coffee} coffee`)
//     }
//     requestLeaves(leaves){
//               // super keyword
//                super.requestLeaves(5)
//         console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
//     }

// }

// // create obj
// let e = new Employee()
// let p = new Programmer()

// e.login()
// e.requestLeaves(3)
// p.requestLeaves(3)



// **************************** Inheritance - constructor overriding *****************************



// class Employee{
//     constructor(){
//          console.log("Employee constructor is here")
//     }
//     login(){
//         console.log("Employee has logged in")
//     }
//     logout(){
//         console.log("Employee has logged out")
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} leaves`)
//     }
// }
// class Programmer extends Employee{
//     requestCoffee(coffee){
//         console.log(`Employee has requested ${coffee} coffee`)
//     }
//     requestLeaves(leaves){
//               // super keyword
//                super.requestLeaves(5)
//         console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
//     }

//     // for constructor overriding must use super keyword
//     constructor(){
//         super()
//         console.log("Employee new constructor is here")
//    }

// }

// // create obj
// let e = new Employee()
// let p = new Programmer()

// e.login()
// e.requestLeaves(3)
// p.requestLeaves(3)




// **************************** getters, setters and intenceof operator ******************************



// class Animal {
//     constructor(name){
//         this._name = name
//     }
//     fly(){
//         alert("I am flying")
//     }
//     get name(){
//         return this._name
//     }
//     set name(newName){
//         this._name = newName
//     }
// }

// class Rabbit extends Animal{
//     eatCarrot(){
//         console.log("Eating Carrot")
//     }
// }

// let an = new Rabbit("white Rabbit")

// an.fly()
// console.log(an.name)
// an.name = "Jack"
// console.log(an.name)

// // instanceof
// console.log(an instanceof Animal)
// console.log(an instanceof Rabbit)




// **************************** Regular Expressions ******************************



// // relace very globally by using expression
// // relace very to good - change multiple occurance
// const regex = /very/g  
// const text = "Bhuvi is a very very nice  awesome nice very girl"

// // relace very to good - change single occurance
// console.log(text.replace("very","good"))

// // relace very to good - change multiple occurance
// console.log(text.replace(regex,"good"))
