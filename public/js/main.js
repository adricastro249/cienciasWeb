/* var signOutButton = document.getElementById('sign-out-button');
var entrar = document.getElementById('btnEntrar');
var micuenta = document.getElementById('btnMiCuenta'); */

$("btnEntrar").show();
$("#sign-out-button").hide();
$("#btnMiCuenta").hide();


/* 
$("#btnAcceder").click(function () {
	$("#btnMiCuenta").show();
	$("#btnLogOut").show();
	$("#btnEntrar").hide();
})


$("#btnLogOut").click(function () {
	$("#btnMiCuenta").hide();
	$("#btnLogOut").hide();
	$("#btnEntrar").show();
})
 */

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

/*  var loginB = document.getElementById('#login2');

loginB.addEventListener("click", function(){
	console.log("prueba");
	
  });  */

/* 
const nameUser = "";
const emailUser ="";
const idUser = "";
const foto = ""; 
 */



var btnAcceder = document.getElementsByClassName("login2");

//Recorres la lista de elementos seleccionados
for (var i = 0; i < btnAcceder.length; i++) {
	//Añades un evento a cada elemento
	btnAcceder[i].addEventListener("click", function () {
		//Aquí la función que se ejecutará cuando se dispare el evento
		alert("conectando");
		var provider = new firebase.auth.GoogleAuthProvider();;
		firebase.auth()
		.signInWithPopup(provider)
		.then(function(result){
	
	// The signed-in user info.
	var user = result.user;

console.log(user);
console.log(user.displayName);
console.log(user.email);
console.log(user.photoURL);


$(".botonEntrar").hide();
$("#sign-out-button").show();
$("#btnMiCuenta").show();

alert("Bienvenido " + user.displayName)

//********* Perfil 
document.getElementById("nombrePerfil").innerHTML= user.displayName;
document.getElementById("emailPerfil").innerHTML= user.email;
$('#fotoPerfil').append("<img src='" + user.photoURL +"'/>");


		});
	});
}









//guarda automaticamente los datos del usuario
/* function guardaDatos(user) {
	var usuario ={
		uid:user.uid,
		nombre:user.displayName,
		email:user.email,
		foto:user.photoURL
	}

	firebase.database().ref("usuarios").push(usuario)
};



$('#guardar').click(function(){
firebase.database().ref("prueba").set({
	nombre:"Adriana",
	sexo: "femenino",
	edad: "15"
})

console.log("probadn db")
}); */
// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
/* firebase.auth().onAuthStateChanged(function (user) {
	
	user ? handleSignedInUser(user) : handleSignedOutUser();
	alert("hubo un cambio en el estado del usuario")
});

 */

var logOutButton = document.getElementById('sign-out-button');
 
// Bind Sign out button.
logOutButton.addEventListener('click', function (e) {
	alert("desconectando")

	$("btnEntrar").show();
	$("#sign-out-button").hide();
	$("#btnMiCuenta").hide();

	e.preventDefault();
	firebase.auth().signOut();

location.reload();
});

// Listen for auth state changes
firebase.auth().onAuthStateChanged(onAuthStateChanged);



/* 
  document.querySelector('.login2').addEventListener('click', event => {
alert("probando");
console.log("prueba"); */

/* 	var provider = new firebase.auth.GoogleAuthProvider();
alert("esto es"+ provider);
	firebase.auth().signInWithPopup(provider); */
/*   }) */

/*  $("#login").click(function () {
	alert("probando");
	var provider = new firebase.auth.GoogleAuthProvider();
	alert("esto es"+ provider);
	firebase.auth().signInWithPopup(provider);

})
 */