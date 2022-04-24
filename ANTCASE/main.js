let counter = 0;
let skin = '';
let id = [];
let slider = document.getElementById('slider');
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');
let body = document.querySelector('body');
let close = document.querySelector('popup__close');
let title = document.getElementsByClassName('popup__content');
let content = document.getElementsByClassName('popup__content');
btn.onclick = function(){
	btn.disabled = true; 
	counter -= Math.floor(Math.random() * (11001 - 8001)) + 8001;
	createSkins();
	slider.style.left = counter + 'px';
	btn.style.backgroundColor = '#2C2C2C';
	btn.style.cursor = 'auto';
  if (window.innerWidth > 786){
  	getNumber(562.4);
  }
  else if (window.innerWidth <= 786 && window.innerWidth >= 484) {
    getNumber(716);
  }
  else{
	  getNumber(805);
  } 
  setTimeout(function(){
  	id[a] == '<img src="images/niger.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Lasius niger</h2><img class="popup__img" src="images/Lasius-niger.jpg" alt="">':
	  id[a] == '<img src="images/muticus.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Messor muticus</h2><img class="popup__img" src="images/Messor-structor.jpg" alt="">':
	  id[a] == '<img src="images/rubra.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Myrmica rubra</h2><img class="popup__img" src="images/Manica-rubida.jpg" alt="">':
	  id[a] == '<img src="images/flavus.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Lasius flavus</h2><img class="popup__img" src="images/Lasius-flavus.jpg" alt="">':
	  id[a] == '<img src="images/fusca.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Formica fusca</h2><img class="popup__img" src="images/Formica-fusca.jpg" alt="">':
	  id[a] == '<img src="images/caespitum.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Tetramorium caespitum</h2><img class="popup__img" src="images/Tetramorium-caesp.jpg" alt="">':
	  id[a] == '<img src="images/nico.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Camponotus nicobarensis</h2><img class="popup__img" src="images/nicobar.jpg" alt="">':
    id[a] == '<img src="images/brunea.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Myrmicaria brunea</h2><img class="popup__img" src="images/Myrmicaria-brunea.jpg" alt="">':
    id[a] == '<img src="images/venator.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Harpegnathos venator</h2><img class="popup__img" src="images/Harpegnathos-venator.jpg" alt="">':
    id[a] == '<img src="images/leo.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Colobopsis leonardi</h2><img class="popup__img" src="images/Colobopsis-leonardi.jpg" alt="">':
    id[a] == '<img src="images/metal.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Rhytidoponera metallica</h2><img class="popup__img" src="images/R.-metallica.jpg" alt="">':
    id[a] == '<img src="images/oecop.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Oecophylla smaragdina</h2><img class="popup__img" src="images/Oecophylla-smaragdina.jpg" alt="">':
    id[a] == '<img src="images/barba.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Pogonomyrmex barbatus</h2><img class="popup__img" src="images/Pogonomyrmex-barbatus.jpg" alt="">':
    id[a] == '<img src="images/forfi.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Myrmecia fotficata</h2><img class="popup__img" src="images/Myrmecia-fotficata.jpg" alt="">':
    id[a] == '<img src="images/gigades.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Gigantiops destructor</h2><img class="popup__img" src="images/G-destructor.jpg" alt="">':
    id[a] == '<img src="images/rufipes.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Pseudoneoponera rufipes</h2><img class="popup__img" src="images/Pseudoneoponera-rufipes.jpg" alt="">':
    id[a] == '<img src="images/barb.png" alt="">' ? title[0].innerHTML += '<h2 class="popup__title">Вы поймали Messor barbarus</h2><img class="popup__img" src="images/Messor-barbarus.jpg" alt="">':
    title[0].innerHTML += '<h2 class="popup__title">Вы поймали Dinomyrmex gigas</h2><img class="popup__img" src="images/dinogig.png" alt="">';
    popupOpen();
  }, 7580);
}
function createSkins(){
	for (let i = 0; i < 75; i++){
		addRandomSkin()
		slider.innerHTML += skin;
	}
}
function addRandomSkin(){
	let randomNum = Math.floor(Math.random() * 10000) + 1;
	let randomChar = Math.floor(Math.random() * 3) + 1;

	if (randomNum > 9985){
		skin = '<img src="images/gigas.png" alt="">';
		id.push(skin);
	}
	else if (randomNum > 9900){
		randomChar == 1 ? skin = '<img src="images/oecop.png" alt="">':
		randomChar == 2 ? skin = '<img src="images/forfi.png" alt="">':
		skin = '<img src="images/gigades.png" alt="">';
		id.push(skin); 
	}
	else if (randomNum > 9600 && randomNum < 9900){
		randomChar = Math.floor(Math.random() * 2) + 1;
		randomChar == 1 ? skin = '<img src="images/metal.png" alt="">' : 
		skin = '<img src="images/barba.png" alt="">';
		id.push(skin);
	}
	else if (randomNum > 8500 && randomNum < 9600){
		randomChar == 1 ? skin = '<img src="images/venator.png" alt="">':
		randomChar == 2 ? skin = '<img src="images/leo.png" alt="">':
		skin = '<img src="images/rufipes.png" alt="">';
		id.push(skin);
	}
	else if (randomNum > 6000 && randomNum < 8500){
		randomChar == 1 ? skin = '<img src="images/nico.png" alt="">':
		randomChar == 2 ? skin = '<img src="images/brunea.png" alt="">':
		skin = '<img src="images/barb.png" alt="">';
		id.push(skin);
	}
	else{
		randomChar = Math.floor(Math.random() * (7 - 1)) + 1;
		randomChar == 1 ? skin = '<img src="images/niger.png" alt="">':
		randomChar == 2 ? skin = '<img src="images/muticus.png" alt="">':
		randomChar == 3 ? skin = '<img src="images/rubra.png" alt="">':
		randomChar == 4 ? skin = '<img src="images/flavus.png" alt="">':
		randomChar == 5 ? skin = '<img src="images/fusca.png" alt="">':
		skin = '<img src="images/caespitum.png" alt="">';
		id.push(skin);
	}
}
function popupOpen(){
  popup.classList.add("active");
  body.classList.add("active");
}
function getNumber(indexCounter){
	a = (-counter-indexCounter) / 150;
  let j = a % 1;
  if (j > 0.56){
  	console.log (a);
  	a = Math.round(a);
  	console.log (a);
  } else{
  	console.log (a);
    a = Math.floor(a);
    console.log (a);
  	}
}