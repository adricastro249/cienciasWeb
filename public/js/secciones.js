var nodeSecc = document.getElementById("superior");

data.secciones.forEach(secc => {

    let nodeSecc0 = document.createElement('DIV')
    nodeSecc0.classList.add("mt-5")
    nodeSecc0.classList.add("p-2")
    nodeSecc0.classList.add("flex-grow-1")
    nodeSecc0.classList.add("bd-highlight")
    nodeSecc0.classList.add(secc.codSecc)

    // nodeSecc0.setAttribute("id", secc.codSecc)

    let nodeSecc1 = document.createElement('DIV')
    nodeSecc1.classList.add("d-flex")
    nodeSecc1.classList.add("justify-content-between")

    let nodeSecc2 = document.createElement('H2')
    nodeSecc2.classList.add("tituloCategoria")
    nodeSecc2a = document.createTextNode(secc.nombreSecc)

    let nodeSecc3 = document.createElement('H5')
    nodeSecc3.classList.add("etiquetas")
    nodeSecc3a = document.createTextNode(secc.etiquetas)

    let nodeSecc4 = document.createElement('BUTTON')
    nodeSecc4.classList.add("btnNotasSecc")
    nodeSecc4.classList.add("pl-5")
    nodeSecc4.classList.add("pr-5")
    nodeSecc4.setAttribute('type', "button");
    nodeSecc4.setAttribute('id', secc.id);
    nodeSecc4.setAttribute('value', secc.codSecc);
    nodeSecc4a = document.createTextNode("Ver más notas")


    nodeSecc5 = document.createElement('HR');
    nodeSecc5.classList.add("divSecciones");


    nodeSecc.appendChild(nodeSecc0)
    nodeSecc0.appendChild(nodeSecc1)
    nodeSecc1.appendChild(nodeSecc2)
    nodeSecc2.appendChild(nodeSecc2a)
    nodeSecc1.appendChild(nodeSecc3)
    nodeSecc3.appendChild(nodeSecc3a)
    nodeSecc1.appendChild(nodeSecc4)
    nodeSecc4.appendChild(nodeSecc4a)
    nodeSecc0.appendChild(nodeSecc5)

    let nodeNota = document.createElement('DIV')
    nodeNota.classList.add("row")
    nodeNota.classList.add(secc.codSecc)

    let nodeNota1 = document.createElement('DIV')
    nodeNota1.classList.add("secCards")

    let nodeNota2 = document.createElement('DIV')
    nodeNota2.classList.add("d-flex")
    nodeNota2.classList.add("flex-wrap")
    nodeNota2.classList.add("justify-content-around")

    var iter = 0
    secc.notas.forEach(val => {

        let nodeNota3 = document.createElement('DIV')
        nodeNota3.classList.add("card")
        nodeNota3.classList.add("border-0")
        nodeNota3.classList.add("mb-5")
        if (iter > 5) {
            nodeNota3.style.display = "none"
            nodeNota3.setAttribute("title", secc.codSecc)
        }

        let nodeNota4 = document.createElement('A')
        nodeNota4.setAttribute('href', val.href);

        let nodeNotaImg = document.createElement('IMG')
        nodeNotaImg.classList.add("card-img-top")
        nodeNotaImg.setAttribute('src', val.imagen);

        let nodeNota5 = document.createElement('DIV')
        nodeNota5.classList.add("mt-2")
        nodeNota5.classList.add("d-flex")
        nodeNota5.classList.add("justify-content-between")

        let nodeNota6 = document.createElement('H5')
        nodeNota6.classList.add("text-left")
        nodeNota6.classList.add("autor")
        nodeNota6a = document.createTextNode(val.autor);


        let nodeNota7 = document.createElement('DIV')
        nodeNota7.classList.add("imgFlecha")

        let nodeNota8 = document.createElement('IMG')
        nodeNota8.classList.add("mt-2")
        nodeNota8.setAttribute('src', "./images/Home/flecha_notas.png");
        nodeNota8.setAttribute("alt", "flecha");

        let nodeNota9 = document.createElement('A')
        nodeNota9.classList.add("text-dark")
        nodeNota9.classList.add("titNotaMV")
        nodeNota9.classList.add("text-justify")
        nodeNota9.setAttribute('href', val.href);

        let nodeTit = document.createElement('STRONG')
        nodeTit = document.createTextNode(val.titulo);


        nodeNota10 = document.createElement('HR');
        nodeNota10.classList.add("divSeccionesNotas");
        if (iter > 2) {
            nodeNota10.style.display = "none"
        }

        nodeSecc.appendChild(nodeNota)
        nodeNota.appendChild(nodeNota1)
        nodeNota1.appendChild(nodeNota2)
        nodeNota2.appendChild(nodeNota3)
        nodeNota3.appendChild(nodeNota4)
        nodeNota4.appendChild(nodeNotaImg)
        nodeNota3.appendChild(nodeNota5)
        nodeNota5.appendChild(nodeNota6)
        nodeNota6.appendChild(nodeNota6a)
        nodeNota5.appendChild(nodeNota7)
        nodeNota7.appendChild(nodeNota8)
        nodeNota3.appendChild(nodeNota9)
        nodeNota9.appendChild(nodeTit)

        nodeNota3.appendChild(nodeNota10)

        iter++
    })

    var botonNotasSecc = nodeSecc4
    console.log(botonNotasSecc);
    botonNotasSecc.addEventListener("click", function (e) {
        console.log(e);
        var codSecciones = [];
        data.secciones.map(ele => {
            codSecciones.push(ele.codSecc)
        })
        console.log(codSecciones);
        let aBorrar = codSecciones.indexOf(botonNotasSecc.value)
        console.log(aBorrar);
        
        let seccHide = codSecciones.splice(aBorrar, 1)
        console.log(codSecciones);
        
        console.log($("[title*='" + botonNotasSecc.value + "']"))
        console.log("'"+botonNotasSecc.value+"'")
        $("[title*='" + botonNotasSecc.value + "']").show()
        console.log(("#"+codSecciones[0]));
        
        codSecciones.forEach(el=> {
            $("."+el).hide()
        })
        // console.log($("#"));
        // $("#" + botonNotasSecc.value).hide() 
        

    })

})