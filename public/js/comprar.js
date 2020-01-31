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

/*/--Esconder carrito y texto revistas/*/
var carrito = [];
var misRevistas = [];

$("#textRevistas").show();
$("#txtCarrito").show();
$("#btncomprarCarrito").hide();


function agregCarrito () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	carrito.push(click)
	console.log("mis revistas son..." + carrito);
	contCarrito()   
}

console.log(carrito);

function contCarrito() {
// Revistas en carrito
if (carrito.includes("comprarIA" || "comprarCN" || "comprarMUN")) {
	console.log("incluye comprarIA");
	$("#btncomprarCarrito").show();
	$("#txtCarrito").hide();	
} else if (!carrito.includes("comprarIA" || "comprarCN" || "comprarMUN")){
	console.log("No incluye comprarIA");
	$("#btncomprarCarrito").hide();
	$("#txtCarrito").show();
}
}


function comprar () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	misRevistas.push(click)
	console.log("mis revistas son..." + misRevistas); 
}

function contRevistas() {
	// Revistas en carrito
	if (misRevistas.includes("carrito")) {
		console.log("incluye contenido carrito");
		$("#textRevistas").hide();	
	} else if (!misRevistas.includes("carrito")){
		console.log("No incluye contenido carrito");
		$("#textRevistas").show();
	}
	}




/*/--Function Agregar al Carrito/*/
/* function desinscribirse () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	let aux = misEventos.indexOf(click)
carrito.splice(aux, 1);
	console.log("mis eventos son..." + misEventos);
	botonesAgregaQuita();

} */