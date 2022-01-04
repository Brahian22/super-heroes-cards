import { data } from '../data/data.js';

let btnMarvel = document.querySelector('#marvel');
let btnDc = document.getElementById('dc');
let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let itmMarvel = document.getElementById('itemMarvel');
let itmDc = document.getElementById('itemDC');

btnMarvel.addEventListener('click', () => {

    itmMarvel.innerHTML ='';
    itmDc.style.display = 'none'
    itmMarvel.style.display = 'block'



    let marvel = data.filter( heroe => heroe.publisher === 'Marvel Comics');
    marvel.forEach(item => {
        let { id, superhero, publisher, image } = item;
         
        template.querySelector('h5').textContent = superhero;
        template.querySelector('h4').textContent = publisher;
        template.querySelector('img').setAttribute('src', image );
        template.querySelector('img').dataset.id = id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone)
    })
    itmMarvel.appendChild(fragment)
})

btnDc.addEventListener('click', () => {
  
    itmDc.innerHTML ='';
    itmMarvel.style.display ='none'
    itmDc.style.display = 'inline-block'


    let dc = data.filter( heroe => heroe.publisher === 'DC Comics');
    dc.forEach(item => {
        let { id, superhero, publisher, image } = item;
         
        template.querySelector('h5').textContent = superhero;
        template.querySelector('h4').textContent = publisher;
        template.querySelector('img').setAttribute('src', image );
        template.querySelector('img').dataset.id = id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone)
    })
    itmDc.appendChild(fragment)
})

