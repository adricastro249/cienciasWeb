// ********** boton SECCIONES
$("#masSecc").click(function () {
    console.log("dia 2");

    $("#seccion3").show();
    $("#seccion4").show();
})

//  ******** agrega titulo a SECCIONES- falta traer los datos del jsonGral, pero no estan los datos incluidos 
$("#seccion4 .tituloCategoria").append("OTRO NOMBRE")

// ********* AGENDA HOY

// trae el titutlo
$(window).on("load", function () {
    console.log(this.event);
    console.log(this.event.target.title);
    let titulo = this.event.target.title;
    $("#tituloPag").append(`<h1 class="col-3 text-right"> ${titulo} </h1> 
    <img src="./images/linea-ROSA.png" alt="lineaRosa" class="col-3">`)
});




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


// ********** boton Paginación Revistas
$("#segundosEventos").hide();

$("#masBloq2Eventos").click(function () {
    $("#segundosEventos").show();
    $("#primerosEventos").hide();
})

$("#masSigEventos").click(function () {
    $("#segundosEventos").show();
    $("#primerosEventos").hide();
})

$("#masBloq1Eventos").click(function () {
    $("#segundosEventos").hide();
    $("#primerosEventos").show();
})

$("#masPrevEventos").click(function () {
    $("#segundosEventos").hide();
    $("#primerosEventos").show();
})


// ********** Formulario