// ***** AUTENTICACION
// ++ codigos de documentacion original firebase
/* var provider = new firebase.auth.GoogleAuthProvider();

//  acceder con google
firebase.auth().signInWithPopup(provider).then(function(result) {
	// This gives you a Google Access Token. You can use it to access the Google API.
	var token = result.credential.accessToken;
	// The signed-in user info.
	var user = result.user;
	// ...
  }).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// The email of the user's account used.
	var email = error.email;
	// The firebase.auth.AuthCredential type that was used.
	var credential = error.credential;
	// ...
  });

//   cerrar sesion
firebase.auth().signOut().then(function() {
	// Sign-out successful.
  }).catch(function(error) {
	// An error happened.
  });
 */
// fin d ecodigos de documentacion original firebase

// **************** LOGIN Y LOGOUT

$("#pruebaLoginAibby").click(function () {
	alert("probando");
	var provider = new firebase.auth.GoogleAuthProvider();
	alert("esto es"+ provider);
	firebase.auth().signInWithPopup(provider);
	
	
})

// ********** boton SECCIONES
$("#masSecc").click(function () {
    console.log("dia 2");

    $("#seccion3").show();
    $("#seccion4").show();
})

//  ******** agrega titulo a SECCIONES- falta traer los datos del jsonGral, pero no estan los datos incluidos 
$("#seccion4 .tituloCategoria").append("OTRO NOMBRE")
$("#seccion3 .tituloCategoria").append("Ciencia y Sociedad")

/



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

