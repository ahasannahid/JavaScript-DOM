console.log('apend.js');
// create new element and add element using apend
// 1. where to be add
const placesList = document.getElementById('places-list');
// console.log(placesList);
// 2. what to be add
const li = document.createElement('li');
li.innerText = 'Pahartoli bon';
// 3. add the child
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. what to be add
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

//  set innerHTML directly
// ~ this symbol name carret
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-Shirt</li>
    <li>Lungi</li>
    <li>Sando Genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);