////////////////////////////////////////;
//Loop.
// const nums = [1, 3, 5, 7, 9];
// function summation(){
//  let total = 4;
 // for of loop.
//  for(let num of nums){
    
//      total = total + num;
    // total += num; 
//  }
 //return total;
//  return total;
// }
// console.log(summation());

// for of loop string.
// const names = ["selim","samim","don"];

// function totalStr(){
    // for of.
//     let nam = '';
//     for(let name of names){
//         nam = nam +' '+ name;
//     }
//     return nam;
// }
// console.log(totalStr());

///////////////////////////////;
//map.
//return array.
//work on each element.
//don't mutate original array.
//must bbe returned from inside.

// const nums = [1, 3, 5, 7, 9];
// const total = nums.map(num => {
//     return num * 2;
// const arrayMultiply = nums.map(num => num * 2);
// console.log(arrayMultiply);
//console.log(total);

/////////////////////////////;  
//find.
//return single element.
// work on each element.
//don't mutate original array.
//must be returned from inside.
//const nums = [1, 3, 5, 7, 10];
// const result = nums.find(num => num === 5);
//const result = nums.find(num => num % 2 !== 5);
//console.log(result); 

////////////////////////////////;
//filter.
// return array [element] based on condition.
// work on each element.
// don't mutate original array.
//must be returned from inside.
// const nums = [1, 3, 5, 7, 10];
// const result = nums.filter(num => num % 2 !== 0)
// console.log(result);

////////////////////////////////////////////////////////////////;
// some.
// return true/false based on condition.
// work on each element.
// don't mutate original array.
// must be returned from inside.

// const nums = [1, 3, 5, 7];
// const result = nums.some(num => num % 2 == 0)
// console.log(result);

////////////////////////////////////////////////////////////////;
// every.
// return true/false based on condition.
// work on each element.
// don't muted original array.
// must be returned from inside.
// const nums = [1, 3, 5, 7];
// const result = nums.every(num => num % 2 !== 0);
// console.log(result);

////////////////////////////////;
// findIndex.
// return index number based on condition.
// work on each element.
// don't mutate original array.
// must be returned from inside.

// const nums = [12, 32, 50, 7, 10];
// const result = nums.findIndex(num => num % 2 !== 0);
// console.log(result);

///////////////////////////////////////////;
// reduce(reducing array element).
// return based on criteria.
// work on each element.
// don't mutate original array.
// must be returned from inside.

// const nums = [1, 3, 5, 7, 10];
//const nums = [0, 3, 5, 7];
//const nums = [1, 1, 1, 1, 1];
// acc - 0 curr - 3;
// acc - 3 curr - 5;
// acc - 8 curr - 7;
// acc - 15;
// const result = nums.reduce((acc, curr) => acc + curr,5);
// console.log (result);
// acc - 5 curr - 0; result = 5;
// acc - 5 curr - 3; result = 8;
// acc - 8 curr - 5; result = 13;
// acc - 13 curr - 7; result = 20;

// const result = nums.reduce(function(acc, curr) { 
//   return  acc + curr
// },5);
// console.log (result);





