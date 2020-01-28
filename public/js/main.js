// ********** boton SECCIONES
$("#masSecc").click(function() {
    console.log("dia 2");
    
    $("#seccion3").show();
    $("#seccion4").show();
    })

//  ******** agrega titulo a SECCIONES- falta traer los datos del jsonGral, pero no estan los datos incluidos 
$("#seccion4 .tituloCategoria").append("OTRO NOMBRE")

// ********* AGENDA HOY

// trae el titutlo
$( window ).on( "load", function() {
    console.log( this.event );
    console.log( this.event.target.title );
    let titulo = this.event.target.title;
    $("#tituloPag").append(`<h1 class="col-3 text-right"> ${titulo} </h1> 
    <img src="./images/linea-ROSA.png" alt="lineaRosa" class="col-3">`)
});