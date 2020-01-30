// ********** boton SECCIONES
$("#masSecc").click(function () {
    console.log("dia 2");

    $("#seccion3").show();
    $("#seccion4").show();
})

//  ******** agrega titulo a SECCIONES- falta traer los datos del jsonGral, pero no estan los datos incluidos 
$("#seccion4 .tituloCategoria").append("OTRO NOMBRE")
$("#seccion3 .tituloCategoria").append("Ciencia y Sociedad")

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

// ********** agregar a carrito
var posiblesCompras = [];