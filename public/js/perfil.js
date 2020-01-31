// ********** carpetas
$("#misCarpetas").hide();
$("#misEventos").show();
$("#misFavs").hide();
$("#versionPremium").hide();


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
