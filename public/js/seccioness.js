
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
    
    let contNotas = 1;
    
    document.getElementById(`${idSecc}`).innerHTML = secc.nombreSecc;

    secc.notas.forEach(nota => {
        
        console.log("el contador de nostas es : "+ contNotas);
        
        console.log(nota);
        let tituNota= "tituloNota"+contNotas+secc.codSecc;
        let textNota= "textoNota"+contNotas+secc.codSecc;
        let imgNota= "imgNota"+contNotas+secc.codSecc;
        console.log(tituNota)
        console.log(nota.titulo);
        
        
        document.getElementById(`${tituNota}`).innerHTML = nota.titulo;
        document.getElementById(`${textNota}`).innerHTML = nota.texto;
        document.getElementById(`${imgNota}`).src = nota.imagen;

        contNotas++
        console.log("terminaste un for each de notas"+ contNotas);
        
    }
    
    )
    contSecc++
} 
)


// ********** Formulario

