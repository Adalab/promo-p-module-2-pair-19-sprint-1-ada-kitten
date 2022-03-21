'use strict';

const newForm = document.querySelector ('.js-new-form');

// newForm.classList.remove('collapsed');

const list = document.querySelector('.js-list');

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>` 

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`

list.innerHTML += `${kittenOne}`;
list.innerHTML += `${kittenTwo}`;
list.innerHTML += `${kittenThree}`;

// variables de info del primer gato

const kitten1url = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kitten1name = 'Anastacio'
const kitten1description = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten1race = 'British Shorthair';

// variables de info del segundo gato

const kitten2url = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kitten2name = 'Fiona'
const kitten2description = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten2race = 'British Shorthair';

// variables de info del tercer gato

const kitten3url = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kitten3name = 'Cielo'
const kitten3description = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kitten3race = 'British Shorthair';
