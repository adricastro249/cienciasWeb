

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



  var btnAcceder = document.getElementsByClassName("login2");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< btnAcceder.length; i++) {
        //Añades un evento a cada elemento
		btnAcceder[i].addEventListener("click",function() {
           //Aquí la función que se ejecutará cuando se dispare el evento
		   alert("probando");
var provider = new firebase.auth.GoogleAuthProvider();
alert("esto es"+ provider);
	firebase.auth().signInWithPopup(provider); 
        });
    }



	var logOutButton = document.getElementById('sign-out-button');

	logOutButton.addEventListener('click', function (e) {
		alert("desconectando")
		e.preventDefault();
		firebase.auth().signOut();
		location.reload();
	  });
	
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
