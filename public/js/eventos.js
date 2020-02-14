// ********* AGENDA HOY

// evento 1
document.getElementById("tituloEvent1").innerHTML= data.eventos[0].titulo;
document.getElementById("notaEvent1").innerHTML= data.eventos[0].texto;
document.getElementById("mesEvent1").innerHTML= data.eventos[0].month;
document.getElementById("diaEvent1").innerHTML= data.eventos[0].day;
document.getElementById("horaEvent1").innerHTML= data.eventos[0].time;
// document.getElementById("nota1").getElementsByTagName("tbody")[0].innerHTML=resultado

// evento 2

document.getElementById("tituloEvent2").innerHTML= data.eventos[1].titulo;
document.getElementById("notaEvent2").innerHTML= data.eventos[1].texto;
document.getElementById("mesEvent2").innerHTML= data.eventos[1].month;
document.getElementById("diaEvent2").innerHTML= data.eventos[1].day;
document.getElementById("horaEvent2").innerHTML= data.eventos[1].time;

// evento 3

document.getElementById("tituloEvent3").innerHTML= data.eventos[1].titulo;
document.getElementById("notaEvent3").innerHTML= data.eventos[1].texto;
document.getElementById("mesEvent3").innerHTML= data.eventos[1].month;
document.getElementById("diaEvent3").innerHTML= data.eventos[1].day;
document.getElementById("horaEvent3").innerHTML= data.eventos[1].time;

// evento 1
document.getElementById("tituloEvent4").innerHTML= data.eventos[0].titulo;
document.getElementById("notaEvent4").innerHTML= data.eventos[0].texto;
document.getElementById("mesEvent4").innerHTML= data.eventos[0].month;
document.getElementById("diaEvent4").innerHTML= data.eventos[0].day;
document.getElementById("horaEvent4").innerHTML= data.eventos[0].time;

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


// evento3
if (!misEventos.includes("evento3")) {
	console.log("No incluye el evento3");
	
	$("#botonQuitaE3").hide();
	$("#botonAgregaE3").show();
	
} else if (misEventos.includes("evento3")){
	console.log(misEventos);
	console.log("incluye el evento3");
	$("#botonAgregaE3").hide();
	$("#botonQuitaE3").show();
}

// evento4
if (!misEventos.includes("evento4")) {
	console.log("No incluye el evento4");
	
	$("#botonQuitaE4").hide();
	$("#botonAgregaE4").show();
	
} else if (misEventos.includes("evento4")){
	console.log(misEventos);
	console.log("incluye el evento4");
	$("#botonAgregaE4").hide();
	$("#botonQuitaE4").show();
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

$("#mapaEvent1").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE1").text(data.eventos[1].address)

$("#mapaEvent2").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE2").text(data.eventos[1].address)

$("#mapaEvent3").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE3").text(data.eventos[1].address)

$("#mapaEvent4").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE4").text(data.eventos[1].address)


// ********** boton Paginación Comprar
$("#segundoBloque").hide();

$("#masBloq2Rev").click(function () {
    $("#segundoBloque").show();
    $("#primerBloque").hide();
})

$("#masBloqSigComprar").click(function () {
    $("#segundoBloque").show();
    $("#primerBloque").hide();
})

$("#masBloq1Rev").click(function () {
    $("#segundoBloque").hide();
    $("#primerBloque").show();
})

$("#masBloqPrevCompra").click(function () {
    $("#segundoBloque").hide();
    $("#primerBloque").show();
})

