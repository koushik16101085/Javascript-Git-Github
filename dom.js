// let val = document

// val = document.all;
// val = document.all[5];
// val = document.head;
// val = document.title;
// val = document.body;
// val = document.body;
// val = document.body.className;
// val = document.body.id;
// val = document.links[0];
// val = document.links[0]:
// .getAttribute("herf");
// val = document.characterSet;
// val = document.forms[0];
// val = document.forms[0].action;
// val = document.forms[0].method;
// val = document.script;
// console.log(val);

// let val;
// Accessimg Specific element method.
// val = document.getElementById("container");
// val = document.getElementByClassName("container");
// val = document.getElementByTagName("body"[0]);
// val = document.querySelector(".product-collection-item");
// val = document.querySelector("#container");
// val = document.querySelector(".container");
// val = document.querySelectorAll(".product-collection-item");
// console.dir(val);


// HTML collection vs Node List;
// let val;
// val = document.getElementByClassName("product-collection-item");
// console.log(val);
// Array te convart korthe parlhe forEach loop kaj korhe.
// val = Array(val);
// val.forEach(node => console.log (node));

// HTML collection
// for (let i =0; i< val; i++){
//     console.log(val[i]);
// }
// for(let node of val){
//     console.log(node);
// }


// console.log(val);

// Node list e Query Selector gullha use korthe hoi.
 //let val;
// val = document.querySelectorAll(".product-collection-item");
// console.log(val);
// console.log(val);
// Node List E Sob loop e kaj korhe.
// val.forEach(node => console.log (node));

// HTML collection
// for (let i =0; i< val; i++){
//     console.log(val[i]);
// }
// for(let node of val){
//     console.log(node);
// }
// console.log(val);


// Manipulating element.
////////////////////////////////////////////////////////////////////////////
// selection.
// let val;
// val = document.querySelector(".product-collection-item");

//manipulation .....
// val.style.color = "red";
//val.style.background-color = "Green";
// val.style.backgroundColor = "Green";
// val.innerText = "shirt";
// val.innerHTML = "<em>Shirt</em>";
// val = document.querySelector ("a");
// val = document.querySelector("a").getAttribute("href");
// val = document.querySelector("a").setAttribute("href", "https://facebook.com");
// val = val.className;
// val.className = "myClass";
// val = val.classList;
// val = classList.add("MyClass");
// val = val.id;
// val.textContent = 'Microphone';
// console.log(val.textContent);
// console.log(val);


// Traversing DOM ......
///////////////////////////////////
//let val;
// val = document.querySelector(".product-collection");
// val = val.children[0]
// .nextElementSibling
// .nextElementSibling
// .parentElement
// .parentElement.parentElement;
// val = val.children[0].nextSibling;
//val = val.children;
// console.log(val);

// Interacting and child Nodes.
// // 1 - Element;
// // 2 - Attribute (deprecated);
// // 3 - Text node;
// // 8 - comment;
// // 9 - Document itself;
// // 10 - Doctype;
 //val = document.querySelector(".product-collection");
//  val = val.childNodes[1].nodeName;
//val = val.childNodes[1].nodeType;
// if(val.childNodes[1].nodeType !== 3) {
//     val.childNodes[1].classList.add("MyClass");
// }
//console.log(val);



// Creating Element.
// const ul = document.querySelector("ul");
// const li = document.createElement('li');
// li.className = "product-collection-item";
// li.appendChild(document.createTextNode("MyItem"));
//ul.appendChild(li); // last e li add hobe.
//ul.prepend(li); // first e li add hobe.
//console.log(ul);


// Replacing and removing element.

// const oldHeading = document.querySelector(".h1");
// const newHeading = document.createElement("h1");
// const container = document.querySelector(".container");
// container.replaceChild(newHeading,oldHeading);
// oldHeading.replaceWith(newHeading);
// const list = document.querySelectorAll('.product-collection-item');
// const list = document.querySelector('ul.product-collection-item');
// list.lastElementChild.remove();
//    list.removeChild();
// console.log(ul);
// console.log(list);
// console.log(list.lastElementChild);
// console.log(list.lastChild); // Wrong Write Console System Now New.

// Event Introduction.....
// The Syntax .....
// To add a listener, we use a method called addEventListener .....

// element.addEventListener (type, functionToCall);

// var button = document.querySelector("button");
// let button = document.querySelector("button");
// const button = document.querySelector("button");

// button.addEventListener("click", function(){
//     console.log("SOMEONE CLICKED THE BUTTON!")
// });











