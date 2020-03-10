function processData() {
    event.preventDefault();
    var coment = [];
    var contadorComent = 2;
    let auxCont = `agregaComent`+contadorComent;
    let aux = event.toElement.form.elements.formControlTextarea1.value;
    console.log(event);
    console.log(event.toElement.form.elements.formControlTextarea1.value);
    // $("#acaAparecenComents").hide();
    let node = document.createElement("DIV"); // Create a <DIV> 1
        node.classList.add();
    let node2 =document.createElement("DIV");
        node2.classList.add("row");
    let node3 = document.createElement("DIV");
        node3.classList.add("col-3");
    let node4 = document.createElement("DIV");
        node4.classList.add("d-flex");
        node4.classList.add("justify-content-around");
    let imgNode4= document.createElement("IMG");
        imgNode4.src = "./images/nota/alejandroCurino.png" ;
    let node4_5 = document.createElement("DIV");
    let node4_5_Strong = document.createElement("STRONG");
        node4_5_Strong.classList.add("nombreComentario");
    let node4_5_StrongText = document.createTextNode("Angel Castro");
    let node4_5_Tiempo = document.createElement("P");
        node4_5_Tiempo.classList.add("tiempoComent");
    let node4_5_TiempoText = document.createTextNode("Hace 1 hora");
    let node3Coment = document.createElement("DIV");
        node3Coment.classList.add("col-9");
        node3Coment.classList.add("text-justify");
    let comentario = document.createTextNode(aux);
        node3Coment.appendChild(comentario);
    
    node4_5_Strong.appendChild(node4_5_StrongText);
    node4_5_Tiempo.appendChild(node4_5_TiempoText);                                 
    node4_5.appendChild(node4_5_Strong);
    node4_5.appendChild(node4_5_Tiempo);
    node4.appendChild(imgNode4);
    node4.appendChild(node4_5);
    node3.appendChild(node4);
    node2.appendChild(node3);
    node2.appendChild(node3Coment);
    node.appendChild(node2);  
    // let textnode = document.createTextNode(aux); // Create a text node
    node.classList.add("comentarioAgregado");
    node.setAttribute('id', auxCont)
    // node.appendChild(textnode); // Append the text to <li>
    document.getElementById(`comentariosUsuariosmb-`).appendChild(
        node); // Append <li> to <ul> con el id donde deseas colcoarlo
    let separador = document.createElement("HR")
    separador.classList.add("hrComent");
    
    document.getElementById(`comentariosUsuariosmb-`).appendChild(
        separador); // Append <li> to <ul> con el id donde deseas colcoarlo
    $("#formControlTextarea1").val('')
    contadorComent = contadorComent+1;
    
    document.getElementById("contComent").innerHTML = contadorComent;

       // document.getElementById("agregaComent").innerHTML = coment;
}
