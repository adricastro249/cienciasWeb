
// ********** boton SECCIONES
$("#masSecc").click(function () {
    console.log("dia 2");

    $("#seccion3").show();
    $("#seccion4").show();
})

//  ******** agrega titulo a SECCIONES- falta traer los datos del jsonGral, pero no estan los datos incluidos 
$("#seccion4 .tituloCategoria").append("OTRO NOMBRE");
$("#seccion3 .tituloCategoria").append("Ciencia y Sociedad");

var contSecc = 1;
data.secciones.forEach(secc =>{
    console.log("lololo");
    console.log(secc);
    let idSecc= "tituloSecc"+contSecc
    console.log(idSecc);
    
    
    
    document.getElementById(`${idSecc}`).innerHTML = secc.nombreSecc;
    secc.forEach(nota => {
        console.log(nota);
        
        document.getElementById(`"tituloNota`+contSecc+`"`).innerHTML = nota.titulo;
    })
    contSecc++
} 
)


// ********** Formulario

