
var home= document.getElementById("home");
var bagagem = document.getElementById("bagagem");
var aviao = document.getElementById("aviao");
var info = document.getElementById("info");
var gasto = document.getElementById("gasto");
var ganho = document.getElementById("ganho");

function homes(){
	home.style.backgroundColor='#FF7B33';
	bagagem.style.backgroundColor='#66615C';
	aviao.style.backgroundColor='#66615C';
	info.style.backgroundColor='#66615C';
}

function bagagems(){
	bagagem.style.backgroundColor='#FF7B33';
	home.style.backgroundColor='#66615C';
	aviao.style.backgroundColor='#66615C';
	info.style.backgroundColor='#66615C';
}

function aviaos(){
	aviao.style.backgroundColor='#FF7B33';
	home.style.backgroundColor='#66615C';
	bagagem.style.backgroundColor='#66615C';
	
	info.style.backgroundColor='#66615C';
}

function infos(){
	info.style.backgroundColor='#FF7B33';
	home.style.backgroundColor='#66615C';
	bagagem.style.backgroundColor='#66615C';
	aviao.style.backgroundColor='#66615C';
	
}

function ganhof(){
	ganho.style.backgroundColor='#FF7B33';
	ganho.style.color='white';
	gasto.style.backgroundColor='#E2E2E2';
	gasto.style.color='#A3A3A3';

}

function gastof(){
	gasto.style.backgroundColor='#FF7B33';
	gasto.style.color='white';
	ganho.style.backgroundColor='#E2E2E2';
	ganho.style.color='#A3A3A3';
}
