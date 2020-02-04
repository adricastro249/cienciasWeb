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

function crearListaRevista(event, idQueDeseas) {
	console.log(event);
	
	let click = event;
	let revista = data.revistas.find(e => e.matchID == click);
	$("#misRevistasCarrito").show()
	let node = document.createElement("DIV");                 // Create a <div> node prncipal
		node.classList.add("row");
		node.classList.add("col");
		node.classList.add("d-flex")
		node.classList.add("justify-content-between")
		node.classList.add("listaCarrito")
	let node1_1= document.createElement("DIV")		// Create node hijo1 aca va imagen
		node1_1.classList.add("col-5")
		node1_1.classList.add("p-0")
	let imgNode1_1= document.createElement("IMG")		// Create imag de hijo1
		imgNode1_1.src = revista.imagen;
		imgNode1_1.alt = revista.matchID;
		imgNode1_1.classList.add("imagenDeRevista");

	let node1_2= document.createElement("DIV")		// Create node hijo2 aca va datos de la revista
		node1_2.classList.add("col-7")
		node1_2.classList.add("datosDeRevista")
	let pTituloRev = document.createElement("P"); 	//Create P para nombre de Revista
		pTituloRev.classList.add("nombreDeRevista")
	let textContentNombreREv = document.createTextNode(revista.titulo) 	// creo el texto del nombre de la revista
		pTituloRev.appendChild(textContentNombreREv); 	//incluyo el nombre de la revista en su etiqueta P
	/* ** NO LLEVA PRECIO EN MIS REVISTAS
	let pPrecioRev = document.createElement("P"); 	//Create P para precio de Revista
		pPrecioRev.classList.add("precioRevista")
	let textContentPrecioREv = document.createTextNode(revista.buy) 	// creo el texto del Precio de la revista
		pPrecioRev.appendChild(textContentPrecioREv);  */	//incluyo el precio de la revista en su etiqueta P
	
		// **** ahora se anidan todos lo elementos de lo mas chico a lo macro
		// en datosDeRevista (node1_2) van los 2 P, que deben ser colcoados en el orden que se desea
		node1_2.appendChild(pTituloRev);
		/*  NO LLEVA PRECIO
		node1_2.appendChild(pPrecioRev); */

		// en el node1_1 va la imagen
		node1_1.appendChild(imgNode1_1);

		//en el node principal agregamos los 2 div que contiene en el orden que deseamos
		node.appendChild(node1_1)
		node.appendChild(node1_2)
		node.id = (revista.matchID)

		document.getElementById(idQueDeseas).appendChild(node);     // Append <li> to <ul> con el id donde deseas colcoarlo

		

}

function agregCarrito () {
	console.log(carrito);	
	console.log(event);
	let click = event.toElement.name;
	let revista = data.revistas.find(e => e.matchID == click);
	console.log( revista );
	
	if (!misRevistas.includes(click) && !carrito.includes(click)){	
	console.log(click);
	carrito.push(click)
	console.log("mis revistas son..." + carrito);
	$("#misRevistasCarrito").show()

<<<<<<< HEAD
	/* *** CODIGO QUE CREA LISTA DE REVISTA */
	
	let node = document.createElement("DIV");                 // Create a <div> node prncipal
		node.classList.add("row");
		node.classList.add("col");
		node.classList.add("d-flex")
		node.classList.add("justify-content-between")
		node.classList.add("listaCarrito")
		
	let node1_1= document.createElement("DIV")		// Create node hijo1 aca va imagen
		node1_1.classList.add("col-5")
		node1_1.classList.add("p-0")
	let imgNode1_1= document.createElement("IMG")		// Create imag de hijo1
		imgNode1_1.src = revista.imagen;
		imgNode1_1.alt = revista.matchID;
		imgNode1_1.classList.add("imagenDeRevista");

	let node1_2= document.createElement("DIV")		// Create node hijo2 aca va datos de la revista
		node1_2.classList.add("col-7")
		node1_2.classList.add("datosDeRevista")
	let pTituloRev = document.createElement("P"); 	//Create P para nombre de Revista
		pTituloRev.classList.add("nombreDeRevista")
	let textContentNombreREv = document.createTextNode(revista.titulo) 	// creo el texto del nombre de la revista
		pTituloRev.appendChild(textContentNombreREv); 	//incluyo el nombre de la revista en su etiqueta P
	let pPrecioRev = document.createElement("P"); 	//Create P para precio de Revista
		pPrecioRev.classList.add("precioRevista")
	let textContentPrecioREv = document.createTextNode(revista.buy) 	// creo el texto del Precio de la revista
		pPrecioRev.appendChild(textContentPrecioREv); 	//incluyo el precio de la revista en su etiqueta P
	
		// **** ahora se anidan todos lo elementos de lo mas chico a lo macro
		// en datosDeRevista (node1_2) van los 2 P, que deben ser colcoados en el orden que se desea
		node1_2.appendChild(pTituloRev);
		node1_2.appendChild(pPrecioRev);
=======
	let textnodeH6 = document.createElement("h6");
	textnodeH6.classList.add("titRevista");
	  textnode = document.createTextNode(revista.titulo);    // Create a text node
textnodeH6.appendChild(textnode)
>>>>>>> 18d8ee3e6743645765cbdc13b2ebc444a29f3c11

		// en el node1_1 va la imagen
		node1_1.appendChild(imgNode1_1);

		//en el node principal agregamos los 2 div que contiene en el orden que deseamos
		node.appendChild(node1_1)
		node.appendChild(node1_2) 

 
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

		/* let node = document.createElement("P");                 // Create a <li> 
		let textnode = document.createTextNode(e);         // Create a text node
		node.classList.add("listaRevistas");
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById("misRevistasDef").appendChild(node);     // Append <li> to <ul> con el id donde deseas colcoarlo
 */
		crearListaRevista(e, "misRevistasDef" )
		

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