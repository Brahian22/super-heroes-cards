import {data} from '../data/data.js';

const btnMarvel = document.getElementById('marvel');
const dcComics = document.getElementById('dc');
const templateCard = document.getElementById('template-card').content;
const itemMarvel = document.getElementById('itemMarvel');
const itemDc = document.getElementById('itemDC');
const fragment = document.createDocumentFragment();




btnMarvel.addEventListener('click', () => {
    itemMarvel.innerHTML = '';
    itemDc.style.display = 'none';
    itemMarvel.style.display = 'block'

    let marvel = data.filter( heroe => heroe.publisher === 'Marvel Comics' );
    
    marvel.forEach(item => {
        const { image, id, superhero, publisher } = item;
    
        templateCard.querySelector('h5').textContent = superhero;
        templateCard.querySelector('h4').textContent = publisher;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('img').setAttribute('alt', superhero); 
        templateCard.querySelector('img').dataset.id = id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone)
        
    })

    itemMarvel.appendChild(fragment)
})

dcComics.addEventListener('click', () => {
    itemMarvel.innerHTML = '';
    itemDc.style.display = 'none';
    itemMarvel.style.display = 'block'

    let marvel = data.filter( heroe => heroe.publisher  === 'DC Comics' );
    
    marvel.forEach(item => {
        const { image, id, superhero, publisher } = item;
    
        templateCard.querySelector('h5').textContent = superhero;
        templateCard.querySelector('h4').textContent = publisher;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('img').setAttribute('alt', superhero); 
        templateCard.querySelector('img').dataset.id = id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone)
        
    })

    itemMarvel.appendChild(fragment)
})







