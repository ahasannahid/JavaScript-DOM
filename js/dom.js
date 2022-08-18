// console.log('hello from js');


// Option - 1: get element by tag name
// const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
// for(const li of liCollection){
//     console.log(li.innerText);
// }
// innertext mean selected document er vitorer likha
// const allHeadings = document.getElementsByTagName('h1');

// for(const heading of allHeadings){
//     console.log(heading.innerText);
// }

// Option - 2: get element by id name
// document.getElementById('fruits-title');
// document.getElementById('places-title').innerText;
// for changing inner text
// document.getElementById('places-title').innerText = "text what i want";

// const fruitsTitle =document.getElementById('fruits-title');
// fruitsTitle.innerText = 'changed';


// Option - 3: get elements by class name
// document.getElementsByClassName('important-places');


// const places = document.getElementsByClassName('important-places');
// // console.log(places);
// for(const place of places){
//     console.log(place.innerText);
// }


// Option - 4: query selector (will return first one)

// Option - 5: query selectorAll
// by id
// document.querySelectorAll('#fruits-title');
// by class
// document.querySelectorAll('.fruits-container');

// const someLi = document.querySelectorAll('.fruits-container li');
// // console.log(someLi);
// for( const li of someLi){
//     console.log(li.innerText);
// }




// styleig using js

/*-----------------------------------------------*/

const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections ){
    // console.log(section);
    section.style.border = '2px solid steelblue' ;
    section.style.marginBottom = '5px';
    section.style.padding = '15px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
    // ei style gulo sorasori inline e set kore
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'
const placesContainer = document.getElementById('places-container');
// class list diye class add or remove kora jay
placesContainer.classList.add('text-center');
placesContainer.classList.add('font-size');
placesContainer.classList.remove('text-center');

// node list mean tree structure


