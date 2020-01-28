function muestraMas () {
    console.log(this);
    
    // console.log(this.event.target.value);
    // var valor = this.event.target.value;
    // if (valor == "true"){
        console.log("validado");
        
    //     $("#seccion3 #seccion4").show();
    //     // console.log("me salte esto");
        
    //     this.event.target.value == "false";
    // } else{
    //     $("#seccion3 #seccion4").hide();
    // }
    document.getElementById('seccion3').style.display = 'block'
        
}

$("#masSecc").click(function() {
    console.log("dia 2");
    
    $("#seccion3").show();
    $("#seccion4").show();
    })

$("#seccion4 .tituloCategoria").append("OTRO NOMBRE")