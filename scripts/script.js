import { data } from '../data/data.js';

let btnMarvel = document.querySelector('#marvel');
let btnDc = document.getElementById('dc');
let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let itmMarvel = document.getElementById('itemMarvel');
let itmDc = document.getElementById('itemDC');
let contenedor = document.getElementById('pruebaDelModal');



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
        template.querySelector('button').setAttribute('id', id)

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
        // template.querySelector('img').dataset.id = superhero;
        template.querySelector('button').setAttribute('id', id);
        const clone = template.cloneNode(true);
        fragment.appendChild(clone)
    })
    itmDc.appendChild(fragment);
})

itmDc.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){

        let idHeroe = e.srcElement.id;

        data.forEach(item => {
               const { id, superhero, publisher, image} = item;

               if (idHeroe == id ){
                   contenedor.innerHTML = `
                   <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">${superhero}</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                   <center>
                       <img src="${image}" alt="">
                   </center>
                   <h3>Franquicia: ${publisher}</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda natus, aperiam architecto
                       tempora unde soluta ducimus ea, ipsum cumque dicta ab laboriosam accusantium nemo itaque
                       provident voluptatibus dolorum laborum ratione.</p>
               </div>
                   `  
               }
        })
     
    }
})

itmMarvel.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){

        let idHeroe = e.srcElement.id;

        data.forEach(item => {
               const { id, superhero, publisher, image, first_appearance} = item;

               if (idHeroe == id ){
                   contenedor.innerHTML = `
                   <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">${superhero}</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                   <center>
                       <img src="${image}" alt="">
                   </center>
                   <h3>Franquicia: ${publisher}</h3>
                   <p>${superhero} es un gran heroe que tuvo su primera aparicion en el comic ${first_appearance}</p>
               </div>
                   `  
               }
        })
     
    }
})



