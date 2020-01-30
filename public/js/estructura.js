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
 <a class="nav-link" href="perfil.html">
                <button type="button" class="btn btn-outline-light btn-sm">Entrar</button></a>
            </li>


            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalEntrar">
                Entrar
            </button>
            <!-- Modal -->
            <div class="modal fade" id="modalEntrar" tabindex="-1" role="dialog"
                aria-labelledby="modalEntrarTitle" aria-hidden="true" >
                <div class="modal-dialog modal-xl modal-dialog-centered" role="document" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col">
                                        <img class="mt-2 p-5 mr-4 " src="./images/logoRecursoNegro.png" alt="logoNegro">
                                    </div>
    
                                    <div class="col">
                                        <h4 class="textVerde p-2 mt-5">Para realizar acción deberá</h4>
                                        <br>
                                        <p><a href="#" class="mt-5 text-body txtCenter" title="Tooltip">Entrar</a> </p>
                                        <br>
                                        <button type="button" role="button" class="btnAhoraNo" data-dismiss="modal"
                                            aria-label="Close">Ahora no</button>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       <!-- Fin Modal -->












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
                <h6>Secciones</h6>
                <ul class="s-footer__linklist">
                    <li><a class="text-white" href="#0">Revista</a></li>
                    <li><a class="text-white  href="#0">Quienes Somos</a></li>
                    <li><a class="text-white" href="#0">Comprar</a></li>
                </ul>

            </div> <!-- end s-footer__sitelinks -->
            <div class="col-3 mt-5">
                <h6>AgendaHoy</h6>
                <ul class="s-footer__linklist">
                    <li><a class="text-white" href="#0">Contacto</a></li>
                    <li><a class="text-white" href="#0">Mandanos tu nota</a></li>
                    <li><a class="text-white" href="#0">Colaborá</a></li>
                </ul>
            </div> <!-- end s-footer__archives -->

            <div class="col-2 mt-5">
              
  <!-- Button trigger modal -->
                <button type="button" class="btn btn-outline-light btn-sm" data-toggle="modal" data-target="#modalEntrar">
                    Entrar
                </button>

               <!-- Modal -->
        <div class="modal fade" id="modalEntrar" tabindex="-1" role="dialog"
            aria-labelledby="modalEntrarTitle" aria-hidden="true" >
            <div class="modal-dialog modal-xl modal-dialog-centered" role="document" >
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <img class="mt-2 p-5 mr-4 " src="./images/logoRecursoNegro.png" alt="logoNegro">
                                </div>

                                <div class="col">
                                    <h4 class="textVerde p-2 mt-5">Para realizar acción deberá</h4>
                                    <br>
                                    <p><a href="#" class="mt-5 text-body txtCenter" title="Tooltip">Entrar</a> </p>
                                    <br>
                                    <button type="button" role="button" class="btnAhoraNo" data-dismiss="modal"
                                        aria-label="Close">Ahora no</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       <!-- Fin Modal -->




                
                <h6 class=mt-5 id="redesFooter">Redes</h6>
                <div class="s-footer__linklist">

                <img class="" src="./Recursos/Footer/facebook_blanco.png" alt="logoFace" href="">
                <img class="" src="./Recursos/Footer/twitter_blanco.png" alt="logoTw" href="">

                <a class="instaInsta" href="https://www.instagram.com/cienciahoy.ok/">
                <img class="" src="./Recursos/Footer/instagram_blanco.png" alt="InstaLogo">
            </a>

                </div>
            </div> <!-- end s-footer__social -->
        </div>
    </div> <!-- end s-footer__main -->

    <div class="container">
        <div class="row">
            <div class="col mt-2 mb-5">
                <div class="s-footer__copyright">
                    <span>Todos los Derechos Reservados © 2019 CienciaHoy</span>
                </div>
                <div class="go-top">
                    <a class="smoothscroll" title="Back to Top" href="#top"></a>
                </div>
            </div>
        </div>
    </div> <!-- end s-footer__bottom -->

</footer> <!-- end s-footer -->`


// ********************** trae el titutlo
$(window).on("load", function () {
    console.log(this.event);
    console.log(this.event.target.title);
    let titulo = this.event.target.title;
    $("#tituloPag").append(`<h1 class="col-3 text-right"> ${titulo} </h1> 
    <img src="./images/linea-ROSA.png" alt="lineaRosa" class="col-3">`)
});


// llamado INNERS
document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;




