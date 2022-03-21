'use strict';

const newForm = document.querySelector ('.js-new-form');

// newForm.classList.remove('collapsed');

const list = document.querySelector('.js-list');

// variables de info del primer gato

const kitten1url = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kitten1name = 'Anastacio'

// variables de info del segundo gato

const kitten2url = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kitten2name = 'Fiona'

// variables de info del tercer gato

const kitten3url = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kitten3name = 'Cielo'
const kittendescription = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
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
  <p class="card_description"> ${kittendescription}
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
<p class="card_description"> ${kittendescription}
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
<p class="card_description"> ${kittendescription}
</p>
</li>`

list.innerHTML += `${kittenOne}`;
list.innerHTML += `${kittenTwo}`;
list.innerHTML += `${kittenThree}`;

