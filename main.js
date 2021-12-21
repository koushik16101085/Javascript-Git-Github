console.log('connected!!!');
console.log('Adding Comment Featured');



//Exercise 1.
// let num = 1 ;
// while(num <= 10){
//     console.log(num);
//     num += 2;
// }

// Explain : now the number value num = 1 and num<=10 and per step 2 addition system.

//Exercise 2.
// let num1 = 1;
// while(num1 <= 20){
//     if(num1 % 4 === 0 ){
//         console.log(num1);
//     }
//     num1++;

// }

// Explain : now the number value num1 = 1; and num <=10 and modules operator % use remainder value 0 so that that 1 to 20 print system.
//Ans:(4,8,12,16,20);
//Done.

// Exercise 3.

// let num = 100;
// while(num < 150){
//     console.log(num + 1);
//     num--;
// }

// Explain : This Is Number same number came back and and is infinite go.

// Exercise 4.
// For Loop.
// let num = 1;
// for(let num = 1; num <= 100; num++){
//     if(num % 2 ===0){
//         console.log( "This Is Number Is Even" +' '+ num);
//     }
     
// }

//While Loop.
// let num = 2;
// while(num <=100){
//     {
//         console.log(num);
//         num+=2;
//     }
// }

//Exercise 5.
// for(let i=0; i<=6; i++){
//     if(i ===1){
//         console.log("$");
//     }
//     else if(i === 2){
//         console.log("$$");
//     }
//     else if(i === 3){
//         console.log("$$$");
//     }
//     else if(i === 4){
//         console.log("$$$$");
//     }
//     else if(i === 5){
//         console.log("$$$$$");
//     }
//     else if(i=== 6){
//         console.log("$$$$$$");
//     }
// };

// Exercise 6.

// let i = 1;
// for (let i=1; i<=100; i++){
//     if (i%3 === 0 && i%5===0){
//         console.log("FizzBuzz");
//     }
//     else if (i%3===0){
//         console.log("Buzz");
//     }
//     else if (i%5===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }





// const product = {
//     name: 'print T-shirt',
//     price: 10,
//     'is availability': true,
//     productDecs : function(){
//         return `${this.name}-$${this.price}`;
        
        
//     }
// }
// console.log(product.productDecs());


// Dynamically access properties.
// const available = 'is available';
// console.log(product.name);
// console.log(product['name']);
// console.log(product['is availability']);
// console.log(product[available]);

// Factory Function.
// function product (name, price, availability){
//     return{
//         name,
//         price,
//         "is available": availability,
//         productDesc(){
//             return `${this.name}-$${this.price}`
//         }
//     }
// }
// console.log(product('print T-shirt', 10, true));
// console.log(product('sneaker', 10, true));

// Constructor Function.

// function Product (name,price){
//     this.name = name;
//     this.price = price;
//     this.productDesc = function(){
//         return `${this.name}-$${this.price}`;
//     }
// }
// const product1 = new Product('Sneaker', 60);
// console.log(product1);
// console.log(product1.name);
// console.log(product1.productDesc());



// Function Review.
//1st.
// function greet(name){
//     return 'hi'+' '+ name;
// }
// console.log (greet("samim"));

//Function Review
// const greet = function (name){
//     return`hi ${name}`;


// }
// greet.lastName = "Hasan";////
// console.log(greet('samim'));////
// console.log(greet.lastName);/////


// function greet(name){
// return ('Hi' +' '+ name);

// }


// Arguments.

// function product(name,price,discount,shipping){
  //return (arguments);
//  let info=' ';
//   for (const property of arguments){
//       info += property + ' ';
      //console.log(property);
//   }
//   return info
  //return `${name}-$${price}`;    
// }
// const shirt = product('Prints T-Shirt', 30, 0, true);
// console.log(shirt);


// Rest operator.

// function product (name,...property){
//     console.log(name);
//     console.log(property); 
// }

// const shirt = product ('Prints T-Shirt', 30, 0, true, 'T-Shirt category');
// console.log(shirt);

// Default parameter.
// console.log(false || 'Value');
// function product (name, price, discount, shipping=0.1, category='T-Shirt category' ){
//     discount = discount || 0.5;
//     console.log (name ,price ,discount ,shipping ,category);
// }
// const shirt = product ('T-Shirt', 30, undefined, undefined);
// console.log(shirt);


// Evolution of function.
/////////////////
// Function 1.
// function add(num1, num2){
//     console.log(num1 + num2);
// }
// const result = add(3,2);
// console.log(result);
////////////////////
// Function 2.
// function add(num1, num2){
//     return num1 + num2;
// }
// const result = add(3,2);
// console.log(result);
///////////////////
// Function3.
// const add = function(num1, num2){
//     return num1 + num2;
    // }
// const result = add(3,2);
// console.log(result);
/////////////////////////
// Function 4.
// const add = (num1,num2)=>{
//     return num1 + num2;
// }
// const result = add(3,2);
// console.log(result);
//////////////////////////////////
// const add = (num1,num2)=>num1 + num2;
// const result = add(3,2);
// console.log(result);
////////////////////////////////////
// Function 5.
// const multiply = num => num * num;
// const result = multiply(3);
// console.log(result);


// Arrow function and "this"

// const product = {

    // name: 'T-shirt',
    // price: "$10",
    // Explain: Arrow function er time e this er kono value thekhe na.  
    // showInfo:()=>{
    //   console.log(this);
    //   return `${this.name}-$${this.price}`;
    // }

//     showInfo(){
//         console.log(this);
//         return(`${this.name}-$${this.price}`);
//     }

// }
// const info = product.showInfo();
// console.log(info);


// Array and object destructuring.

// const product = ['T-shirt', 10, 0, true];
// const name = product[0];
// const price = product[1];
// const discount = product[2];
// Array destructuring.
// const [name,price,discount,shipping] = product;
// console.log(name, price, discount, shipping);
//Rest Operator.
// const product = {
//     name: ' T-shirt ', 
//     price: '$10',
//     showInfo(){
//         console.log(this);
//         return `${this.name}-$${this.price}`;
//     }
// }
// const product = ['T-shirt', 10, 0, true];
// const [name,price,...others] = product;
// console.log(name, price, others);

//  function productOut(product){
    // function productOut({name,price, showInfo}){
    // console.log(name, price, discount, shipping, category); 
    // console.log(product.name);
    //  console.log(name,price);
//  }

// console.log(product);
//  productOut(product);


// const name = product.name;
// const price = product.price;
// console.log(name,price);

// const {name,price,...others} = product;
// console.log(name,price,others);

// function productOut({name,price, showInfo}){
//     console.log(name, price); 
// }
// console.log(product);
//  productOut(product);
// First Class Function.
// const product = {
//     name: ' T-shirt ', 
//     price: '$10',
//     showInfo(){
//         return {
//           name:  this.name,
//         price: this.price
//         };
// }
// }
// function greet (){
//     console.log('Hi');
// }
// greet();

// const greet = () => {
//     console.log('Hi');
// }
// const greet = () => { //Higher Order Function or Call back Function
//     return function(){  // Lower Order Function.
//         return 'Hi';
//     }
// }
// console.log(greet()());

// const greet = (fn) => { // call back function k parameter accept korar porhe j activities gullha kaj korhe.
//     console.log(fn());
// }
// greet(function(){
//   console.log('Hi');
// });




// Difference between function statement and expression.
//Statement Function.
//greet();
// function greet () {
//   console.log("Hi");
// }
//greet();

// rules statement er somoy upor e or niche any jaigai function call korlr output dibhe.

// expression Function.
// greet();
// const greet = () => {
//   console.log("Hi");
// }
//greet();

// rules expression Function er so,oy shudhu matro function call korthe hobe ta hole output pabho er upore call korle error dekhebhe.




// Hoisting.

// const firstName = "samim";
// const lastName = "Hasan";
// console.log(firstName);
// console.log(lastName);
// function greetS () {
//   console.log ("Hi");
// }

// greetS();


// greetE()
// const greetE = () => {
//   console.log("Hi");
// }
//greetE();


// Scope Function.
// var firstName = "samim";
// function logger(){
  //console.log(lastName);
  // return function loggerInner(){
  //   const firstName = "Anis";
    //const lastName = "Hassan";
//     console.log(firstName);
//   }
//   console.log(firstName); 
// }
// logger()();
// console.log(firstName);



//var vs let vs const.

// for (i=0; i<=10; i++){
//   console.log(i);
// }
// console.log(i);

// var someVar = 'blabla';
// var someVar = 'bla';
// console.log(someVar);

// let someVar = 'blabla';
// let someVar = 'bla';
// console.log(someVar);

// const someVar = 'blabla';
// const someVar = 'bla';
// console.log(someVar);


// Rest and spread operator.
// Rest operator.
// function product (name, ...property){
//   console.log(name);
//   console.log(property);
//   return `
//   ${name}-$${property[0]}
//   `
// }
// product("printed T-shirt", 30, undefined, true);

// spread operator.
// const profile = ['samim','Hasan', 25, 'web developer'];
// const copyProfile = [...profile];
// console.log(copyProfile);

// const product = {
//   name: 'T-Shirt', 
//   price: '$10',
//   showInfo(){
//     console.log(this);
//     return `${this.name}-${this.price}`;
//   }
// }
// function productOut(product){
//   console.log(product);
//   console.log(name, price);
  //console.log(name, price, discount, shipping, category);
// }
// productOut(...product)


// const array = [1, 2, 3, 0, null, 2, 4, 5];

// console.log(countTruthy(array));


//Exercise 1.
// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));
// function countTruthy(array){
//   let count = 0;
//   for(elements of array)
//   if(elements) count++;
//   return count;
// }


//Exercise 2.
//Spread Operator.
// function sum(a,b,c,d){
//   return a+b+c+d;
// }
// let numbers = [1, 2, 3, 4];
// console.log(sum(...numbers));

// Array Review.
// Array Exercise.
// const arr = [1, 3, 5, 8, 10];
// console.log(arr);
// getting elements.
// console.log(arr[1]);

// arr[1]=5;
// console.log(arr);

// for (let num of arr){
//   console.log(num);
// }

// Adding Elements into array.

//const numbers = [1, 3, 5, 7, 10];
//console.log(numbers);

// Ending
//numbers.push(12);

// Beginning.
//numbers.unshift(-3);

// Middle.
//numbers.splice(2,0,4,7,9);


//console.log(numbers);
//console.log(numbers);
//console.log(numbers);

//Removing elements from array.

// const numbers = [1, 3, 5, 7, 10];
// console.log(numbers);
// Ending Remove.
// numbers.pop(10);
// console.log(numbers);

// Beginning.
// numbers.shift();
// console.log(numbers);

// Middle 
// numbers.splice (2,2);
// console.log(numbers);

// Finding Elements (primitive);
// const numbers = [1, 3, 5, 7, 10];

// const includeNumbers = numbers.indexOf(3);
// console.log(includeNumbers);

// const incluNumbers = numbers.indexOf('3');
// console.log(incluNumbers);

//ternary operator.
// const num = numbers.indexOf('3');
// const result = (num === -1)? 'Not included' : 'included'
// console.log(result);

// const resultInclude = numbers.includes('3');
// console.log(resultInclude);

// // Finding Element (Reference).
// const products = [
//  { 
//    id: 1,
//    name: 'T-Shirt',
//    price: 10
//  },
//  {
//    id: 2,
//    name: 'shoes',
//    price: 60
//  }
// ]
// const result = products.find(function(productInfo){
//   console.log(productInfo);
//   return productInfo.name === 'T-Shirt';
// });
// console.log(result);

// const result1 = products.findIndex(function(productInfo){
//   return productInfo.name === 'T-Shirt';
// });
// console.log(result1);


// Find vs Filter (Reference).
// const products = [
//   { 
//     id: 1,
//     name: 'T-Shirt',
//     price: 10
//   },
//   { 
//     id: 3,
//     name: 'T-Shirt',
//     price: 10
//   },
//   {
//     id: 2,
//     name: 'shoes',
//     price: 60
//   }
//  ]

 
//  const result = products.filter(productInfo=>productInfo.name === 'T-Shirt'
//  );
//  console.log(result);

// Combining Array.

// const num1 = [2, 3, 4, 5];
// const num2 = [6, 7, 8, 9, 10];
// const result = num1.concat(num2);
// console.log(result);
// Es6.
// const combined = [...num1, ...num2];
// console.log(combined);

// Split and join.
// const num1 = [2, 3, 4, 5];
// const num2 = [6, 7, 8, 9, 10]; 
// const result = num1.join('.');
// console.log(typeof result);
// console.log(result);
//  const str = 'I am samim';
//  const result1 = str.split(' ');
//  console.log(result1);

// Book  Prectrice
// console.log(this);
// console.log(this === window);
// function helloThis(){
//   console.log(this);
// }
// helloThis();

// function helloThis(){
//   'use strict';
//    console.log(this);
// }

// helloThis();

// function unNamed() {
//   this.name = 'Zonayed Ahmed';
// }

// unNamed();

// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student'
// }

// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   msg: function() {
//        console.log('My name is '+ this.name);
//   }
// }
// myCustomObj.msg();

// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   isTrue: function() {
//        console.log(this === myCustomObj);
//   }
// }

// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   anotherObj: {
//      name: 'Ahmed Zonayed',
//      msg: function() {
//         console.log('My name is: ' + this.name);
//      }
//   }
// }

// myCustomObj.anotherObj.msg();

// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   anotherObj: {
//      name: 'Ahmed Zonayed',
//      value: function() {
//         console.log(this);
//      }
//   }
// }

// myCustomObj.anotherObj.value();

//call()
// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   anotherObj: {
//      name: 'Ahmed Zonayed',
//      value: function() {
//         console.log('My name is ' + this.name);
//      }
//   }
// }
// myCustomObj.anotherObj.value();
// myCustomObj.anotherObj.value.call(myCustomObj);

// Bind.
// var myCustomObj = {
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Student',
//   anotherObj: {
//      name: 'Ahmed Zonayed',
//      value: function() {
//         console.log('My name is ' + this.name);
//      }
//   }
// }
// myCustomObj.anotherObj.value.bind(myCustomObj);



// Constructor 'new'.
// var samir = { 
//   name: 'Samir Hossain',
//   age: 22,
//   job: 'Student'
// }
// var kinan = { 
//   name: 'Kinan Hossain',
//   age: 29,
//   job: 'Businessman'
// }
// var jamil = { 
//   name: 'Jemil Hossain',
//   age: 18,
//   job: 'Driver'
// }
// var zawad = { 
//   name: 'Zawad Ahmed',
//   age: 1,
//   job: 'Child'
// }
// var zonayed = { 
//   name: 'Zonayed Ahmed',
//   age: 21,
//   job: 'Developer'
// }
// var Person = function(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }
// var samir = new Person('Samir Hossain', 22, 'Student');

// ES6 (Destructuring):
// const zonayed = ['Zonayed Ahmed', 21, 'Student'];
// var name = zonayed[0];
// var age = zonayed[1];
// var profession = zonayed[2];
// console.log(name);
// console.log(age);
// console.log(profession);


// ES6 Spread Operator.
// var numbers = [1, 2, 3, 4];
// function calculate(a, b, c, d) {
//   console.log('Sum: ' + (a + b + c + d));
// }
//calculate(numbers);
// calculate(1, 2, 3, 4);
// calculate(1, 2, 3, 4);
// calculate(...numbers);


// ES6 Rest Parameter.
/////
// function arguments6(...anyName) {
//   for(var i = 0; i < anyName.length; i++) {
//      console.log('Argument passed: ' + anyName[i]);
//   }
// }
// arguments6('Bangladesh', 'India', 'Sri Lanka')
// arguments6('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut');
// arguments6('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')
/////
// const argumentsArr6 = (...anyName) => {
//   for(var i = 0; i < anyName.length; i++) {
//      console.log('Argument passed: ' + anyName[i]);
//   }
// }
// argumentsArr6('Bangladesh', 'India', 'Sri Lanka')
// argumentsArr6('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut');
// argumentsArr6('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')
/////
// const argumentsMeth6 = (...anyName) => {
//   anyName.map(oneArgs => console.log('Argument Passed: ' + oneArgs))
// }
// argumentsMeth6('Bangladesh', 'India', 'Sri Lanka')
// argumentsMeth6('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut');
// argumentsMath6('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')


// Copying Array.

//const numbers = [1, 3, 5, 7, 10];
//const copiedArray = numbers;
//const copiedArray = [...numbers];
//const copiedArray = numbers.slice(0,numbers.length);
//const copiedArray = numbers.splice(0,numbers.length);
//const copiedArray = numbers.splice(0,2); 
//const copiedArray = numbers.slice(0);
//const copiedArray = numbers.slice(0,2);
//const copiedArray = numbers.splice(0);
//const copiedArray = numbers.splice(0,numbers.length,);
//console.log(copiedArray);

// Emptying Array.

// let numbers = [1, 3, 5, 7, 10];
// const anotherNumbers= numbers;
// numbers.length=0;
// numbers = [];
// console.log(anotherNumbers);
// console.log(numbers);

// iterating array.
// let numbers = [1, 3, 5, 7, 10];
// numbers.forEach(function(num,index,arr){
//   console.log(index); 
//   console.log(arr);
//   console.log(num);
// });

// for(let number of numbers){
//   console.log(number);
// };

// for(let number of Object.entries(numbers)){
//   console.log(number);
// };

// for(let [index,number] of Object.entries (numbers)){
//   console.log(index,number);
// };

// Sorting Array.
//================================================================.....
// let numbers = [1, 3, 5, 7, 10];
// const sortArray=numbers.sort();
// console.log(sortArray);

// Sorting Array.
// const products = [
//   {
//     id:1,
//     name: "T-Shirt",
//     price: 10
//   },
{
//     id: 3,
//     name: "Microphone",
//     price: 10
//   },
{
//     id: 2,
//     name:"shoes",
//     price: 60
//   }
// ];
// const sortedResult = products.sort(function(a, b){
  //a > b 1;
  //a <b -1
  //a==b 0
  // const valueA = a.name.toLowerCase();
  // const valueB = b.name.toLowerCase();
  // if(valueA > valueB) return 1;
  // if(valueA < valueB) return -1;
  // if(a.id > b.id) return 1;
// if(a.id > b.id) return -1;
  //solution 2.
 // return ((a.id > b.id)? 1 : -1) || 0;
//   });
// console.log(sortedResult);


//  Reducing Array.

//const numbers = [1, 4, 6, 10];
//acc = 1 cur= 4;
//acc = 5 cur = 6;
//acc = 11 cur = 10;
// acc = 21 (Ans.);

//acc = 10 cur = 1;
//acc = 11 cur = 4;
//acc = 15 cur = 6;
//acc = 21 cur = 10;
//acc = 31 (Ans.);
// const sum = numbers.reduce((accumulator, current)=>{
//   return accumulator + current;
// });
// const sum = numbers.reduce((accumulator, current)=>{
//   return accumulator + current;
// },10);
// console.log (sum);

// Every and some helper.
//============================================================================
//return tre or false.
//  let numbers = [1, 7, 3, 9, 5];
// const result = numbers.every((number)=>{
//   return number >= 1;

// });
// console.log(result);
// const result = numbers.every((number)=>{
//   return number > 1;

// });
// console.log(result);


// Map method and chaining.
// Must return something. 
// Result will be a array.

// let numbers = [1, 7, 3, 9];
// const result = numbers
// .map(number => number * 2)
// .reduce ((a,b)=> a + b);
// console.log(result);


// const products = ['T-shirt', 'shoes'];
// let ul = '<ul'
// const result = products
// .map( item => ul +=`<li>${item}</li>`)
// .join(' ')
// ul += '</ul>'
// console.log(ul);


// Book practice .....
//Arrow Function
// var aFunc = function() {
//   console.log('A Demo ES5 Function Expression');
// }
// aFunc();
// const aFunc6 = () => console.log('A Demo ES6 Arrow Function');
// aFunc6();
// const currentAge622 = dob.map(oneDob => {
//   const age = 2018 - oneDob;
//      return age;
// });
// currentAge622;
// myName();
// function myName() {
//    console.log('Zonayed Ahmed');
// }
// myName();
// const myName = function() {
//    console.log('My name is Zonayed Ahmed');
// }
// (Lexical)'this'.
// const lex5 = {
//   aFunc: function() {
//      console.log(this);
//      return function() {
//         console.log(this);
//      }
//   }
// };
// lex5.aFunc()();



