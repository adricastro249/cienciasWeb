/* ******Navbar************************************* 
==================================================*/
var navbar = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container">
        <a class="navbar-brand" href="index.html"><img src="./images/logo-blanco.png" alt="Homepage"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link text-white" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="secciones.html">Secciones</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Revista
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                        <a class="dropdown-item" href="quienesSomos.html">Quienes Somos</a>
                        <a class="dropdown-item" href="comprar.html">Comprar</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="agendaHoy.html">AgendaHoy</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Contacto
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                        <a class="dropdown-item" href="colabora.html">Colaborá</a>
                        <a class="dropdown-item" href="mandaTuDuda.html">Manda tu duda</a>
                    </div>
                </li>
                <li class="nav-item">
 
<div>

<a href="incioSesion.html">
        <button type="button" class="btn btn-outline-light btn-lm botonEntrar" id="btnEntrar" data-toggle="modal"
            data-target="#modalEntrar">
            Entrar
        </button></a>

        <a href="perfil.html">
            <button type="button" class="btn btn-outline-danger btn-lm" id="btnMiCuenta" href="nota1.html">
                Mi cuenta
            </button></a>

        <button type="button" id="sign-out-button" class="btn btn-outline-success btn-lm" href="">Salir</button>




</div>
 </li>

            </ul>
        </div>
    </div>
</nav>`;

// ******Footer ==================================================
var footer = `

<footer class="text-white footer">
<div class="container">
  <div class="row">
    <div class="col-5 mt-5 mb-5">
      <div class="footer__logo">
        <a class="logo" href="index.html">
          <img src="./images/logo-blanco.png" alt="Homepage">
        </a>
      </div> <!-- end footer_logo -->
    </div> <!-- end s-footer__subscribe -->

     <div class="col-2 mt-5">
      <a class="nav-link text-white" href="secciones.html">Secciones</a>
      <div class="mt-5">
        <a class="dropdown-toggle ml-3">Revista</a> <br>
        <a class="text-white-50 ml-3" href="quienesSomos.html">¿Quienes somos?</a>
        <br>
        <a class="text-white-50 ml-3" href="quienesSomos.html">Comprar</a>
      </div>
    </div> <!-- end s-footer__sitelinks -->
    
    
    <div class="col-1 mt-5">
      <div class="vl"></div> 
      </div>

    <div class="col-2 mt-5">
      <a class="nav-link text-white" href="agendaHoy.html">AgendaHoy</a>
      <div class="mt-5">
        <a class="dropdown-toggle ml-3">Contacto</a> <br>
        <a class="text-white-50 ml-3 tipoDelgada" href="mandaTuDuda.html">Mandanos tu nota</a>
        <br>
        <a class="text-white-50 ml-3 tipoDelgada" href="colabora.html">Colaborá</a>
      </div>
    </div> <!-- end s-footer__archives -->

    <div class="col-1 mt-5">
      <div class="vl"></div> 
      </div>

    <div class="col-2 mt-5">

      <a href="incioSesion.html">
        <button type="button" class="btn btn-outline-light botonEntrar px-4 mt-2">
          Entrar
        </button></a>

      <h6 class= "mt-5" id="redesFooter">Redes</h6>
      <div class="s-footer__linklist mt-1">

        <img class="logoFace mr-3" src="./Recursos/Footer/facebook_blanco.png" alt="logoFace" href="">
        <img class="logoTw mr-3" src="./Recursos/Footer/twitter_blanco.png" alt="logoTw" href="">

        <a class="instaInsta" href="https://www.instagram.com/cienciahoy.ok/">
          <img class="logoInsta" src="./Recursos/Footer/instagram_blanco.png" alt="InstaLogo">
        </a>

      </div>

    </div> <!-- end col-2 mt-5 -->

  </div>
</div> <!-- end s-footer__main -->

<div class="container">
  <div class="row">
    <div class="col mt-2 mb-1">
      <div class="s-footer__copyright">
        <p class="derechosReservados">Todos los Derechos Reservados © 2019 CienciaHoy</p>
      </div>
      <div class="go-top">
        <a class="smoothscroll" title="Back to Top" href="#top"></a>
      </div>
    </div>
  </div>
</div> <!-- fin container Derechos Reservados -->

</footer> <!-- end s-footer -->

`


// ********************** trae el titutlo
/* $(window).on("load", function () {
    console.log(this.event);
    console.log(this.event.target.title);
    let titulo = this.event.target.title;
    $("#tituloPag").append(`<h1 class="col-4 text-right"> ${titulo} </h1> 
    <img src="./images/linea-ROSA.png" alt="lineaRosa" class="col-4">`)
}); */



// ********************** Cuerpo Modal


var cuerpoModal = `
<!-- Cuerpo Modal -->
<div class="modal fade" id="modalEntrar" tabindex="-1" role="dialog"
    aria-labelledby="modalCenterTitleFooter" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-entrada">
            <div class="modal-headerEntrada">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-bodyEntrada">

                <div class="container-fluid">

                    <div class="row">
                        <div class="col">
                            <img class="p-3 logoNegro" src="./images/logoRecursoNegro.png" alt="logoNegro">
                        </div>

                        <div class="col ml-5">
                            <h4 class="textVerde mt-4">Para realizar acción deberá</h4>
                            <br>
                            <p>
                                <a href="incioSesion.html"><button type="button"
                                        class="btn btn-link txtCenter text-body">Acceder</button></a>
                            </p>
                            <button type="button" role="button" class="btnAhoraNo mt-5" data-dismiss="modal"
                                aria-label="Close">Ahora no</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Fin  Modal -->


`


// llamado INNERS
document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;

document.getElementById("cuerpoModal").innerHTML = cuerpoModal;




