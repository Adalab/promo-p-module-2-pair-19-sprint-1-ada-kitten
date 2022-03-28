'use strict';

const newForm = document.querySelector ('.js-new-form');

// quitar clase al form
// newForm.classList.remove('collapsed');

const list = document.querySelector('.js-list');


// declarar en variables la info
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

// interpolación(?) de la info en la variable de cada gatito
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

// Que se vea todo
// list.innerHTML = kittenOne + kittenTwo + kittenThree; 

///

// buscador por valor del input:
const input_search_desc = document.querySelector('.js_in_search_desc');
// valor propuesto:
// input_search_desc.value = 'tranquilo';
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
//añadir y quitar la clase collapsed con condicional
if (newForm.classList.contains('collapsed')) {
  newForm.classList.remove('collapsed');
} else {
  newForm.classList.add('collapsed');
}

/// 

const item = document.querySelector('.js-item');

// añadir la clase collapsed con toggle
item.addEventListener('click', () => {
  newForm.classList.toggle('collapsed');
})

///

const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

// Mensaje validación de la info 1. Si al clicar en añadir no hay valores en los inputs se añade un warning
btnAdd.addEventListener('click', () => {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  }
});

///

const btnSrch = document.querySelector('.js-btn-srch');
const input_search_race = document.querySelector('.js_in_search_race');
const labelMesageErrorSrch = document.querySelector('.js-label-error-srch');

// Mensaje validación de la info . Si al clicar en añadir no hay valores en los inputs se añade un warning
btnSrch.addEventListener('click', (event) => {
  event.preventDefault();
  const valueSDesc = input_search_desc.value;
  const valueSRace = input_search_race.value;

  if (valueSDesc === '' || valueSRace === '' ) {
    labelMesageErrorSrch.innerHTML = '¡Error!';
  }
});

const cancelBtn = document.querySelector ('.js-button-cancel');

// al clicar el botón cancelar borra los valores de los inputs
cancelBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

if (valueDesc !== '' || valuePhoto !== '' || valueName !== '' || valueRace !== '') {

  inputDesc.value = ``;
  inputPhoto.value = ``;
  inputName.value = ``;
  inputRace.value = ``;
}
});

// al clicar el botón cancelar añade la clase collapsed
cancelBtn.addEventListener('click', () => {
  newForm.classList.toggle('collapsed');
  });

// FUNCIONES

// función quitar clase collapsed
function showNewDogForm () {
  newForm.classList.remove('collapsed');
}
// función añadir clase collapsed
function hideNewDogForm ()  {
  newForm.classList.add('collapsed');
}

// al clicar el botón cancelar añade la clase collapsed con una función
btnCnl.addEventListener('click',hideNewDogForm);


// 7.2 Función filterKitten para filtrar por descripción (copypaste de los materiales)
// no he llegado todavía

// function filterKitten(event) {
//   event.preventDefault();
//   console.log('hola');
//   listElement.innerHTML = '';
//   if (kittenDesc1.includes(descrSearchText)) {
//     listElement.innerHTML += kittenOne;
//   }
//   if (kittenDesc2.includes(descrSearchText)) {
//     listElement.innerHTML += kittenTwo;
//   }
//   if (kittenDesc3.includes(descrSearchText)) {
//     listElement.innerHTML += kittenThree;
//   }
// }


// añadir gatitos con una función con parámetros
function renderKitten(image, name, race, desc) {
  return `<li class="card">
  <article>
    <img
      class="card_img"
      src="${image}"
      alt="perrito"
    />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
    ${desc}</p>
  </article>
  </li>`
  }

// innerHTML necesarios para tener la página igual
// list.innerHTML += renderPuppy( puppy1Image, puppy1Desc, NameUp1, puppy1Race )

list.innerHTML += renderKitten( kitten1url, kitten1name, kittenrace, kitten1description)

list.innerHTML += renderKitten( kitten2url, kitten2name, kittenrace, kitten2description)

list.innerHTML += renderKitten( kitten3url, kitten3name, kittenrace, kitten3description)

// info en objetos
const kittenData1 = {
    url: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    name: 'Anastacio',
    desc: 'Majo, juguetón, cariñoso le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair'
  };

const kittenData2 = {
    url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
    name: 'Fiona',
    desc: 'Ruiseño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'Russian Shorthair'
};

const kittenData3 = {
  url: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Irish Shorthair'
};

// objetos en array
const kittenDataList = [kittenData1, kittenData2, kittenData3]

// Crea una función llamada renderKittenList(kittenDataList), donde tal es el parámetro. Añade la info de los gatitos como ha hecho Dayana con las adalabers lololol

function renderKittenList(parametro) {
//pendiente 
}
