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


/*/--Function Agregar al Carrito/*/

var carrito = [];
function agregCarrito () {
	console.log(event);
	
	let click = event.toElement.name;
	console.log(click);
	carrito.push(click)
    console.log("mis eventos son..." + carrito);
    
}

console.log(carrito);



/* function desinscribirse () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	let aux = misEventos.indexOf(click)
carrito.splice(aux, 1);
	console.log("mis eventos son..." + misEventos);
	botonesAgregaQuita();

} */