// ********** secciones inicio
$("#mi-perfil").show();
$("#mis-carpetas").hide();
$("#mis-favoritos").hide();
$("#mis-revistas").hide();
$("#mis-settings").hide();

$("#radio_Perfil").click(function () {
    $("#mi-perfil").show();
    $("#mis-carpetas").hide();
    $("#mis-favoritos").hide();
    $("#mis-revistas").hide();
    $("#mis-settings").hide();
})

$("#radio_Carpeta").click(function () {
    $("#mi-perfil").hide();
    $("#mis-carpetas").show();
    $("#mis-favoritos").hide();
    $("#mis-revistas").hide();
    $("#mis-settings").hide();
})

$("#radio_Fav").click(function () {
    $("#mi-perfil").hide();
    $("#mis-carpetas").hide();
    $("#mis-favoritos").show();
    $("#mis-revistas").hide();
    $("#mis-settings").hide();
})

$("#radio_Rev").click(function () {
    $("#mi-perfil").hide();
    $("#mis-carpetas").hide();
    $("#mis-favoritos").hide();
    $("#mis-revistas").show();
    $("#mis-settings").hide();
})


$("#radio_Config").click(function () {
    $("#mi-perfil").hide();
    $("#mis-carpetas").hide();
    $("#mis-favoritos").hide();
    $("#mis-revistas").hide();
    $("#mis-settings").show();
})

// ******************* MIS EVENTOS

$("#botonQuitaEvt1").click(function () {
    $("#misEventosContenido").hide();
})


// ******************* REVISTAS

$("#revistas2").hide();

$("#mostrar-revistas2").click(function () {
    $("#revistas1").hide();
    $("#revistas2").show();
})

$("#mostrar-revistas1").click(function () {
    $("#revistas2").hide();
    $("#revistas1").show();
})


// ******************* MIS FAVORITOS

$("#btnFav1").click(function () {
    $("#fav1").hide();
})

$("#btnFav2").click(function () {
$("#fav2").hide();
})

$("#btnFav3").click(function () {
    $("#fav3").hide();
    })


    $("#btnFav4").click(function () {
        $("#fav4").hide();
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

