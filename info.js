// // Bind.
// function sayHi (age, profession){
//     return `Hi ${this} you are ${age} .You are a ${profession}` ;
// }
// const sayHiWithBinding = sayHi.bind("Samim");
// const outputCall = sayHiWithBinding.call(undefined, 25, "web developer)");
// const outputApply = sayHiWithBinding.apply(undefined,[25, "web developer"]);
// console.log(outputCall);
// console.log(outputApply); 


// Call And Apply.
// function sayHi (age1, profession1){
       //console.log(this);
//     console.log(`Hi ${this} you are ${age1} .you are a ${profession1}`);

// }


// const outputCall1 = sayHi.call("samim", 25, "web developer");
// const outputApply1 = sayHi.apply("samim",[25, "web developer"]);
// console.log(outputCall1);
// console.log(outputApply1); 

// Function Binding expression.
// Call And Apply.
// const sayHi = function(age, profession){
//     return `Hi ${this} you are ${age} .You are a ${profession}`
// }.bind('samim');
// const outputCall = sayHi.call(undefined, 25, "web developer");
// const outputApply = sayHi.apply(undefined,[25, "web developer"]);
// console.log(outputCall);
// console.log(outputApply);


// Copy by value(primitive)
//copy by reference.(reference/complex);
// let a = 10;
// let b = a;
// console.log(a); 
// console.log(b);

// a = 21;
// console.log(a);
// console.log(b);

// let obj1 ={value: 3};
// const obj2  = obj1;
// console.log(obj1);
// console.log(obj2);

// obj1.value = 5;
// console.log(obj1);
// console.log(obj2);

// pass by value.
// let a = 10;
// function passByValue(a){
//     a = true;
// }
// passByValue(a);
// console.log(a);
// //pass by reference.

// let obj = {value: 10};
// function passByReference(passedObj){
//     passedObj.value = 20;
// }
// passByReference(obj);
// console.log(obj);


// Copying Object1.
// const product1 ={
//     name: 'T Shirt',
//     price: 20,
//     availability: true
// }

// for (let key in product1){
//     console.log(product1[key]);
// }


// Copying Object1.
// const product1 ={
//     name: 'T Shirt',
//     price: 20,
//     availability: true
// }

// for (let key in product1){
//     console.log(product1[key]);
// }

// Copying Object3.
// const product1 ={
//     name: 'T Shirt',
//     price: 20,
//     availability: true
// }

// const product2 = Object.assign({},product1);
// console.log(product2);

// const product1 ={
//     name: 'T Shirt',
//     price: 20,
//     availability: true
// }

// const product2 = Object.assign({color: 'red'},product1);
// console.log(product2);

// const product1 ={
//     name: 'T Shirt',
//     price: 20,
//     availability: true
// }

// const product2 = Object.assign(product1, {color: 'red'});
// console.log(product2);


//cell.
//floor.
//random.
//abs.
//round.

// console.log(Math.floor(Math.random()*10));

// function getRandomInt(min, max) {

//     min = Math.cell(min);
//     max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

// }


