// Event In Practice ................
///////////////////////////////////////////////////////

// const h1 =document.querySelector("h1");
// const li = document.querySelector('li');
// const lis = document.querySelectorAll("li");
 //const ul = document.querySelector("ul");
//  const ul = document.querySelector ("ul");
//  const form = document.forms[0];
//  const input = document.getElementById('productName');
// console.log(input);
    // function evtInformation(evt){
    //   evt.preventDefault();
//     console.log(evt);
    //   console.log('Type:', evt.type);
    //   console.log('Target',evt.target);
    //   const li = document.createElement('li');
    //   li.textContent = input.value;
    //   li.className = 'product-collection-item';
      //ul.appendChild(li);
     //ul.appendChild(li);
//      const li = document.createElement('li');
//      li.textContent = input.value;
//      li.className = 'product-collection-item';
        // console.log("Target value", evt.target.innerText);
        // console.log("input value:", input.value);
//     console.log("offset-x",evt.offsetX);
//     console.log("offset-y",evt.offsetY);
//     console.log("client-x",evt.clientX);
//     console.log("client-y",evt.clientY);
//     console.log("clicked H1");
 //}
// h1.addEventListener("click",evtInformation);
// lis.forEach(li => {li.addEventListener
// ("click", evtInformation);
// });
   //form.addEventListener("submit",evtInformation);



/////////////////////////////////////////////////////////////////
// Event Bubbling And Event Delegation Practice .......
// Event Bubbling .......
// children to parent .......
///////////////////////////////////////////////////////////
// const li = document.querySelector("li");
//    const ul = document.querySelector("ul");
// const container = document.querySelector(".container");
// li.addEventListener("click",()=>{
//     console.log("You clicked li");
// });
// ul.addEventListener("click",()=>{
//     console.log("You clicked ul");
// });
// container.addEventListener("click",() => {
//     console.log("You clicked container");
// container.addEventListener("click",(evt) => {
//      console.log(evt.target);
//  });
///////////////////////////////////////////////////////////////
//  Event Delegation .......
// Parent To Children .......
////////////////////////////////////////////
//  container.addEventListener("click",(evt) => {
//       if(evt.target.id === "sample") {
//           console.log(evt.target);
//         evt.target.classList.add("custom");
//       }
//   });



















