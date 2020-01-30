
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

var comprarIA = document.getElementById('comprarIA');
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
comprar();
