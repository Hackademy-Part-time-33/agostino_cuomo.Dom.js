/* TRACCIA 1
 */ 

let bottone1 = document.querySelector('.bottone1');
let bottone2 = document.querySelector('#bottone2');
let bottone3 = document.querySelector('.bottone3');
let paragrafo1 = document.querySelector('.paragrafo1');
let paragrafo2 = document.querySelector('.paragrafo2');
let paragrafo3 = document.querySelector('.paragrafo3');
let paragrafo = document.querySelectorAll('p');

bottone1.addEventListener('click', ()=>{

 paragrafo.forEach(query => {
    let r = Math.floor(Math.random() * (256 - 0));
    let g = Math.floor(Math.random() * (256 - 0));
    let b = Math.floor(Math.random() * (256 - 0));
    query.style.color= `rgb(${r},${g},${b})`;
 });
} );


bottone2.addEventListener('click', 
function Grassetto() {
    paragrafo.forEach(query=>
    query.classList.toggle('bold')
    );
}
);

bottone3.addEventListener('click', 
function Grassetto() {
    paragrafo.forEach(query=>
    query.classList.toggle('visibile')
    );
}
);


/* TRACCIA 2 */

let titolo= document.querySelector('#titolo');
let descrizione = document.querySelector('#descrizione');
let CreaArticolo = document.querySelector('.CreaArticolo');
let contenitore= document.querySelector('.contenitore');

CreaArticolo.addEventListener( 'click',()=>{
    if(descrizione.value && titolo.value != ''){
    let r = Math.floor(Math.random() * (256 - 0));
    let g = Math.floor(Math.random() * (256 - 0));
    let b = Math.floor(Math.random() * (256 - 0));
 let box = document.createElement('div');
 box.style.backgroundColor= `rgb(${r},${g},${b})`;
 box.classList.add("box","m-5");
 let date = new Date();
 let formatDate = date.toLocaleDateString()
 box.innerHTML= `<h2> ${titolo.value} <h2> <br> <p> ${descrizione.value}  <br> ${formatDate} `
 contenitore.appendChild(box);
 descrizione.value='';
 titolo.value='';
    }else { alert('inserisci qualcosa nei campi');
};
})