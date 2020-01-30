
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

/* var comprarIA = document.getElementById('comprarIA');
var btnComp = document.getElementsByClassName('botonComprar')

comprarIA.click();

function comprar() {
    let botCompIA = document.getElementById('comprarIA');
    let botCompCN = document.getElementById('compCN');
    let botCompMUN = document.getElementById('compMUN');
    let carrito = [];
   let revistas = [];

    botCompIA.addEventListener("click", function () {
        document.getElementById('cuerpoCarrito').innerHTML = `Comprar IA`;
        console.log("pruebaIA")
    })

    botCompCN.addEventListener("click", function () {
        document.getElementById('cuerpoCarrito').innerHTML = `Comprar CN`;
        console.log("pruebaIA")
    })

    botCompMUN.addEventListener("click", function () {
        document.getElementById('cuerpoCarrito').innerHTML = `Comprar CMUN`;
        console.log("pruebaIA")
    })

    console.log(carrito);
console.log(revistas);
}
comprar(); */

var carrito = [];
function comprar () {
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