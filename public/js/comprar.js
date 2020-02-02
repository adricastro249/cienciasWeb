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

$("#misRevistasCarrito").hide()
/* 
if (carrito.length ===0){
	$("#txtCarrito").show();
}else if (carrito.length < 0){
	alert("entre a carrito con algo")
	$("#misRevistasCarrito").show()
	document.getElementById("misRevistasCarrito").textContent(carrito)
	$("#txtCarrito").hide();
} */

$("#textRevistas").show();

$("#btncomprarCarrito").hide();


function agregCarrito () {
	console.log(carrito);	
	console.log(event);
	let click = event.toElement.name;
	
	if (!misRevistas.includes(click) && !carrito.includes(click)){	
	console.log(click);
	carrito.push(click)
	console.log("mis revistas son..." + carrito);
	$("#misRevistasCarrito").show()
	let node = document.createElement("LI");                 // Create a <li> node
	let textnode = document.createTextNode(click);         // Create a text node
	node.classList.add("listaCarrito")
	node.addEventListener("click", function () {
		console.log(this);
		this.remove();
		let aux = carrito.indexOf(click)
	carrito.splice(aux, 1);
	if (carrito.length === 0){
		$("#btncomprarCarrito").hide();
		$("#txtCarrito").show(); 
	}
	console.log("mis REVISTAS DEFINITIVAS en CARRITO son..." + carrito);		
	})
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("misRevistasCarrito").appendChild(node);     // Append <li> to <ul> con el id donde deseas colcoarlo
	
	$("#txtCarrito").hide();  
	$("#btncomprarCarrito").show();
} else if (carrito.includes(click)){
	alert("ya incluiste esta revista en el Carrito");
} else if (misRevistas.includes(click)){
	alert("ya compraste esta revista");
} 
console.log("carrito final:" + carrito);
console.log(carrito);



}


/* function contCarrito() {



// Revistas en carrito
if (carrito.includes("comprarIA" || "comprarCN" || "comprarMUN")) {
	console.log("incluye revistas para carrito");
	$("#btncomprarCarrito").show();
	$("#txtCarrito").hide();	
} else if (!carrito.includes("comprarIA" || "comprarCN" || "comprarMUN")){
	console.log("No incluye revistas para carrito");
	$("#btncomprarCarrito").hide();
	$("#txtCarrito").show();
}
} */


function comprar () {
	console.log(carrito);
	$("#btncomprarCarrito").hide();
	misRevistas = carrito;
	console.log("mis revistas son..." + misRevistas); 
	carrito = [];
	console.log("mi carrito tiene: "+ carrito);
	
console.log(misRevistas);

	// mostrar en misRevistas
	misRevistas.forEach(function (e) {
		console.log(e);		
		let node = document.createElement("LI");                 // Create a <li> 
		let textnode = document.createTextNode(e);         // Create a text node
		node.classList.add("listaRevistas");
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById("misRevistasDef").appendChild(node);     // Append <li> to <ul> con el id donde deseas colcoarlo

	})
	console.log("mis REVISTAS COMPRADAS son..." + misRevistas);	
	console.log("mi carrito quedo con : "+ carrito);

	var list = document.getElementById("misRevistasCarrito");   // Get the <ul> element with id="myList"
	// list.parentNode.removeChild(list)
	while (list.hasChildNodes()) {  
		list.removeChild(list.firstChild);
	  }
	$("#misRevistasCarrito").hide();
	$("#txtCarrito").show();
	$("#textRevistas").hide();


	
	

}
/* 
function contRevistas() {
	// Revistas en carrito
	if (misRevistas.includes("carrito")) {
		console.log("incluye contenido carrito");
		$("#textRevistas").hide();	
	} else if (!misRevistas.includes("carrito")){
		console.log("No incluye contenido carrito");
		$("#textRevistas").show();
	}
	} */




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