/* ******Navbar************************************* 
==================================================*/
var navbar = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="index2.html"><img src="images/logo-blanco.png" alt="Homepage"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index2.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="secciones.html">Secciones</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Revista
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                        <a class="dropdown-item" href="portfolio-1-col.html">Quienes Somos</a>
                        <a class="dropdown-item" href="portfolio-2-col.html">Comprar</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="agendaHoy.html">AgendaHoy</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Contacto
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                        <a class="dropdown-item" href="portfolio-1-col.html">Colaborá</a>
                        <a class="dropdown-item" href="portfolio-2-col.html">Manda tu duda</a>
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
            <div class="col-6">
                <div class="footer__logo">
                    <a class="logo" href="index.html">
                        <img src="images/logo-blanco.png" alt="Homepage">
                    </a>
                </div> <!-- end footer_logo -->
            </div> <!-- end s-footer__subscribe -->

            <div class="col-2">
                <h6>Secciones</h6>
                <ul class="s-footer__linklist">
                    <li><a href="#0">Revista</a></li>
                    <li><a href="#0">Quienes Somos</a></li>
                    <li><a href="#0">Comprar</a></li>
                </ul>

            </div> <!-- end s-footer__sitelinks -->
            <div class="col-2">
                <h6>AgendaHoy</h6>
                <ul class="s-footer__linklist">
                    <li><a href="#0">Contacto</a></li>
                    <li><a href="#0">Mandanos tu nota</a></li>
                    <li><a href="#0">Colaborá</a></li>
                </ul>
            </div> <!-- end s-footer__archives -->

            <div class="col-2">
                <h6 id="redesFooter">Redes</h6>
                <div class="s-footer__linklist">
                    <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div> <!-- end s-footer__social -->


        </div>
    </div> <!-- end s-footer__main -->

    <div class="container">
        <div class="row">
            <div class="col">
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

document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;

$("#seccion3 .tituloCategoria").append("Ciencia y Sociedad")