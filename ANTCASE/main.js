let counter = 0;
let skin = '';
let id = [];
let slider = document.getElementById('slider');
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');
let body = document.querySelector('body');
let close = document.querySelector('popup__close');
let title = document.getElementsByClassName('popup__title');
let content = document.getElementsByClassName('popup__content');
btn.onclick = function(){
	btn.disabled = true; 
	counter -= Math.floor(Math.random() * (11001 - 8001)) + 8001;
	createSkins();
	slider.style.left = counter + 'px';
	btn.style.backgroundColor = '#2C2C2C';
	btn.style.cursor = 'auto';
  console.log(counter);
  let a;
  if (window.innerWidth > 786){
    a = Math.round((-counter-562) / 150);
  }
  else if (window.innerWidth <= 786 && window.innerWidth >= 484) {
    a = Math.round((-counter-716) / 150);
  }
  else{
	  a = Math.round((-counter-816) / 150);
  } 
  setTimeout(function(){
  	id[a] == '<img src="images/niger.png" alt="">' ? title[0].innerHTML += 'Lasius niger':
	  id[a] == '<img src="images/muticus.png" alt="">' ? title[0].innerHTML += 'Messor muticus':
	  id[a] == '<img src="images/rubra.png" alt="">' ? title[0].innerHTML += 'Myrmica rubra':
	  id[a] == '<img src="images/flavus.png" alt="">' ? title[0].innerHTML += 'Lasius flavus':
	  id[a] == '<img src="images/fusca.png" alt="">' ? title[0].innerHTML += 'Formica fusca':
	  id[a] == '<img src="images/caespitum.png" alt="">' ? title[0].innerHTML += 'Tetramorium caespitum':
	  id[a] == '<img src="images/nico.png" alt="">' ? title[0].innerHTML += 'Camponotus nicobarensis':
    id[a] == '<img src="images/brunea.png" alt="">' ? title[0].innerHTML += 'Myrmicaria brunnea':
    id[a] == '<img src="images/venator.png" alt="">' ? title[0].innerHTML += 'Harpegnathos venator':
    id[a] == '<img src="images/leo.png" alt="">' ? title[0].innerHTML += 'Colobopsis leonardi':
    id[a] == '<img src="images/metal.png" alt="">' ? title[0].innerHTML += 'Rhytidoponera metallica':
    id[a] == '<img src="images/oecop.png" alt="">' ? title[0].innerHTML += 'Oecophylla smaragdina':
    id[a] == '<img src="images/barba.png" alt="">' ? title[0].innerHTML += 'Pogonomyrmex barbatus':
    id[a] == '<img src="images/forfi.png" alt="">' ? title[0].innerHTML += 'Myrmecia forficata':
    id[a] == '<img src="images/gigades.png" alt="">' ? title[0].innerHTML += 'Gigantiops destructor':
    id[a] == '<img src="images/rufipes.png" alt="">' ? title[0].innerHTML += 'Pachycondyla rufipes':
    id[a] == '<img src="images/barb.png" alt="">' ? title[0].innerHTML += 'Messor barbarus':
    title[0].innerHTML += 'Dinomyrmex gigas';
    popupOpen();
  }, 7600);
  console.log(id[a]);
  console.log(a);
  console.log((-counter - 280) / 150);
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