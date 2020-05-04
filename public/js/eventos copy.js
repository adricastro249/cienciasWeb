document.getElementById("event1").style.visibility = "hidden"

// evento 2

document.getElementById("mesEvent2").innerHTML= data.eventos[1].month;
document.getElementById("diaEvent2").innerHTML= data.eventos[1].day;
document.getElementById("horaEvent2").innerHTML= data.eventos[1].time;



// ******* Inscribirme / desincribirme
const misEventos = [];

function botonesAgregaQuita() {
	

// evento 1
if (!misEventos.includes("evento1")) {
	console.log("No incluye el evento1");
	
	$("#botonQuitaE1").hide();
	$("#botonAgregaE1").show();
	
} else if (misEventos.includes("evento1")){
	console.log(misEventos);
	console.log("incluye el evento1");
	$("#botonAgregaE1").hide();
	$("#botonQuitaE1").show();
}

// evento2
if (!misEventos.includes("evento2")) {
	console.log("No incluye el evento2");
	
	$("#botonQuitaE2").hide();
	$("#botonAgregaE2").show();
	
} else if (misEventos.includes("evento2")){
	console.log(misEventos);
	console.log("incluye el evento2");
	$("#botonAgregaE2").hide();
	$("#botonQuitaE2").show();
}



}


botonesAgregaQuita() 
function inscribirse () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	misEventos.push(click)
	console.log("mis eventos son..." + misEventos);
	botonesAgregaQuita();

}

function desinscribirse () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	let aux = misEventos.indexOf(click)
	misEventos.splice(aux, 1);
	console.log("mis eventos son..." + misEventos);
	botonesAgregaQuita();

}

// mapas
/* $("#mapaEvent2").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE2").text(data.eventos[1].address)
 */