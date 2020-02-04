// ********** carpetas
$("#misCarpetas").hide();
$("#misEventos").show();
$("#misFavs").hide();
$("#versionPremium").hide();


// ********** eventos
$("#fav1").show();
$("#fav2").show();


$("#carpetas").click(function () {
    $("#misCarpetas").show();
    $("#misEventos").hide();
    $("#misFavs").hide();
    $("#versionPremium").hide();
})

$("#eventos").click(function () {
    $("#misCarpetas").hide();
    $("#misEventos").show();
    $("#misFavs").hide();
    $("#versionPremium").hide();
    console.log(misEventos);
    
})

$("#favs").click(function () {
    $("#misCarpetas").hide();
    $("#misEventos").hide();
    $("#misFavs").show();
    $("#versionPremium").hide();
})


$("#verPremium").click(function () {
    $("#misCarpetas").hide();
    $("#misEventos").hide();
    $("#misFavs").hide();
    $("#versionPremium").show();
})


$("#premiumRechaz").click(function () {
    $("#misCarpetas").hide();
    $("#misEventos").show();
    $("#misFavs").hide();
    $("#versionPremium").hide();
})

// ******************* MIS EVENTOS

// evento 1
document.getElementById("tituloEvent1").innerHTML= data.eventos[0].titulo;
document.getElementById("notaEvent1").innerHTML= data.eventos[0].texto;
document.getElementById("mesEvent1").innerHTML= data.eventos[0].month;
document.getElementById("diaEvent1").innerHTML= data.eventos[0].day;
document.getElementById("horaEvent1").innerHTML= data.eventos[0].time;
// document.getElementById("nota1").getElementsByTagName("tbody")[0].innerHTML=resultado
$("#mapaEvent1").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE1").text(data.eventos[1].address)



$("#botonQuitaEvt1").click(function () {
    $("#misEventosContenido").hide();

})


// ******************* MIS FAVORITOS

$("#btnFav1").click(function () {
    console.log("prueba");
    $("#fav1").hide();

})

$("#btnFav2").click(function () {
$("#fav2").hide();
})


// ***************** MIS CARPETAS
var cont= 1;
// agregaOtraCarpeta
$("#btnMasCarpetas").click(function () {
    console.log("Crea otra carpeta");
    var auxCont = cont;
    console.log(auxCont);
    
    let node = document.createElement("BUTTON")
        node.classList.add("d-flex")
        node.classList.add("justify-content-around")
        node.classList.add("carpeta")
        node.classList.add("p-2")
        node.classList.add("m-1")
        node.classList.add("m-1")
        
    
    let imgCarpeta = document.createElement("IMG")
        imgCarpeta.src = "./Recursos/PERFIL/Imagenes/icons8-opened-folder-96.png"
        imgCarpeta.alt = "logoCarpetas"
        imgCarpeta.style.width = "33%"
        imgCarpeta.style.height = "33%"
        imgCarpeta.id = "logoCarpetas"
        imgCarpeta.classList.add("p-2")
    
    let hCarpeta = document.createElement("H6")
        hCarpeta.classList.add("mt-1")
    let hCarpetaTitulo = document.createTextNode(`Carpeta`+ ` `+ `${auxCont+1}`)
        hCarpeta.appendChild(hCarpetaTitulo)
    
    node.appendChild(imgCarpeta)
    node.appendChild(hCarpetaTitulo)

    document.getElementById("agregaAquiCarpetas").appendChild(node);
    
        
    cont ++; 

})

