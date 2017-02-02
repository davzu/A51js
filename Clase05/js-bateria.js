//var audio = document.querySelector("audio");
var btn = document.getElementById("btn");
var body = document.body;


// selector css con atributo audio[data-rel=65]
// callback => es un llamado que se ejecuta luego de otra

var ejecutarSonido = function(e) {
		var listaAudios = document.querySelectorAll("audio");
		var codigoTecla;
		
		/*
		listaAudios.forEach(function(el, ind) {
			codigoTecla = el.getAttribute("data-rel");
			if(codigoTecla == e.keyCode) {
				el.currentTime = 0;
				el.play();
			}
		});
		*/

		for (var i = 0; i < listaAudios.length; i++) {
			codigoTecla = listaAudios[i].getAttribute("data-rel");
			console.log(codigoTecla);
			if(codigoTecla == e.keyCode) {
				listaAudios[i].currentTime = 0;
				listaAudios[i].play();
				break;
			}
		}
}

var ejecutarSonido2 = function(e) {
		var audio = document.querySelector('[data-rel="' + e.keyCode + '"]');
		audio.currentTime = 0;
		audio.play();
		console.log(audio);
}

// keycode.info
// btn.addEventListener("click", ejecutarSonido);
body.addEventListener("keydown", ejecutarSonido);