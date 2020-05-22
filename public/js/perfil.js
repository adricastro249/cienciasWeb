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


// ******************* REVISTAS

/* ARMADO DE REVISTAS */

$("#revistas2").hide();

var misRevistas = document.getElementById("revistas1");
let nodeRev0 = document.createElement('DIV')
nodeRev0.classList.add("d-flex")
nodeRev0.classList.add("justify-content-center")

var iter = 0
data.revistas.forEach(revs => {

    let nodeRev1 = document.createElement('DIV')
    nodeRev1.classList.add("mt-5")
    let nodeImgRev = document.createElement('IMG')
    nodeImgRev.setAttribute('src', revs.imagenPerfil);

    let nodeRev2 = document.createElement('DIV')
    nodeRev2.classList.add("d-flex")
    nodeRev2.classList.add("justify-content-between")

    let nodeRev3 = document.createElement('DIV')

    let nodeRev4 = document.createElement('P')
    nodeRev4.classList.add("vol-revs")
    nodeRev4a = document.createTextNode(revs.vol)

    let nodeHr = document.createElement('HR')
    nodeHr.classList.add("diVolRev")

    let nodeRev5 = document.createElement('DIV')
    nodeRev5.classList.add("num-rev")


    let nodeRev6 = document.createElement('P')
    nodeRev6 = document.createTextNode("Nro");
    let nodeRev7 = document.createElement('P')
    nodeRev7a = document.createTextNode(revs.nro)

    let nodeRev8 = document.createElement('DIV')
    let nodeRev9 = document.createElement('I')
    nodeRev9.classList.add("fa-cloud-download-alt")
    nodeRev9.classList.add("fas")

    let nodeRev10 = document.createElement('DIV')
    nodeRev10.classList.add("vlRevs")
    if (iter > 1) {
        nodeRev10.style.display = "none"
    }

    misRevistas.appendChild(nodeRev0)
    nodeRev0.appendChild(nodeRev1)
    nodeRev1.appendChild(nodeImgRev)

    nodeRev1.appendChild(nodeRev2)
    nodeRev2.appendChild(nodeRev3)
    nodeRev3.appendChild(nodeRev4)
    nodeRev4.appendChild(nodeRev4a)
    nodeRev3.appendChild(nodeHr)
    nodeRev3.appendChild(nodeRev5)
    nodeRev5.appendChild(nodeRev6)
    nodeRev5.appendChild(nodeRev7)
    nodeRev7.appendChild(nodeRev7a)

    nodeRev2.appendChild(nodeRev8)
    nodeRev8.appendChild(nodeRev9)

    nodeRev0.appendChild(nodeRev10)

    iter++
})

    $("#mostrar-revistas2").click(function () {
        $("#revistas1").hide();
        $("#mostrar-revistas1").removeClass("active")
        $("#revistas2").show();
        $("#mostrar-revistas2").addClass("active")
    })


$("#mostrar-revistas1").click(function () {
    $("#revistas2").hide();
    $("#mostrar-revistas2").removeClass("active")
    $("#revistas1").show();
    $("#mostrar-revistas1").addClass("active")
})

// ******************* MIS FAVORITOS

$("#favoritas2").hide();

$("#mostrar-favs2").click(function () {
    $("#favoritas1").hide();
    $("#mostrar-favs1").removeClass("active")
    $("#favoritas2").show();
    $("#mostrar-favs2").addClass("active")
})


$("#mostrar-favs1").click(function () {
    $("#favoritas2").hide();
    $("#mostrar-favs2").removeClass("active")
    $("#favoritas1").show();
    $("#mostrar-favs1").addClass("active")
})




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
$("#btnFav5").click(function () {
    $("#fav5").hide();
})
$("#btnFav6").click(function () {
    $("#fav6").hide();
})
$("#btnFav7").click(function () {
    $("#fav7").hide();
})
$("#btnFav8").click(function () {
    $("#fav8").hide();
})