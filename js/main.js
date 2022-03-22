'use strict';

const newForm = document.querySelector ('.js-new-form');

// newForm.classList.remove('collapsed');

const list = document.querySelector('.js-list');

// variables de info del primer gato

const kitten1url = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kitten1name = 'Anastacio'
const kitten1description = 'Majo, juguetón, cariñoso le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


// variables de info del segundo gato

const kitten2url = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kitten2name = 'Fiona'
const kitten2description = 'Ruiseño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


// variables de info del tercer gato

const kitten3url = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kitten3name = 'Cielo'
const kitten3description = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenrace = 'British Shorthair';


const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kitten1url}"
    alt="gatito"
  />
  <h3 class="card_title"> ${kitten1name} </h3>
  <h4 class="card_race"> ${kittenrace} </h4>
  <p class="card_description"> ${kitten1description}
  </p>
</article>
</li>` 

const kittenTwo = `<li class="card">
<img
  class="card_img"
    src="${kitten2url}"
  alt="gatito"
/>
<h3 class="card_title"> ${kitten2name} </h3>
<h4 class="card_race"> ${kittenrace} </h4>
<p class="card_description"> ${kitten2description} 
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${kitten3url}"
  alt="gatito"
/>
<h3 class="card_title"> ${kitten3name} </h3>
<h4 class="card_race"> ${kittenrace} </h4>
<p class="card_description"> ${kitten3description}
</p>
</li>`


// list.innerHTML += `${kittenTwo}`;
// list.innerHTML += `${kittenThree}`;

///

const input_search_desc = document.querySelector('.js_in_search_desc');

input_search_desc.value = 'tranquilo';

const descrSearchText = input_search_desc.value;

if(kitten1description.includes(descrSearchText)) {
  list.innerHTML += `${kittenOne}`;
}

if(kitten2description.includes(descrSearchText)) {
  list.innerHTML += `${kittenTwo}`;
}

if(kitten3description.includes(descrSearchText)) {
  list.innerHTML += `${kittenThree}`;
}


///



if (newForm.classList.contains('collapsed')) {
  newForm.classList.remove('collapsed');
} else {
  newForm.classList.add('collapsed');
}