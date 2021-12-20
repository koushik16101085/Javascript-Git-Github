const ul = document.querySelector("ul");
const form = document.forms[0];
const input = document.getElementById('productName');
console.log(input);
   function evtInformation(evt){
     evt.preventDefault();
     console.log('Type:', evt.type);
     console.log('Target',evt.target);
     const li = document.createElement('li');
     li.textContent = input.value;
     li.className = 'product-collection-item';
     ul.appendChild(li);
     form.addEventListener("submit",evtInformation);
   }