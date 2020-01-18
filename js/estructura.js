var navbar = `<!-- ====== Navegación ================================================== -->
<nav class="navbar fixed-top navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="index.html"><img src="images/logo-blanco.png" alt="Homepage"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="about.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="services.html">Secciones</a>
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
                    <a class="nav-link" href="services.html">AgendaHoy</a>
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

document.getElementById("navbar").innerHTML = navbar;
