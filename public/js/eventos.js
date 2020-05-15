var nodeEvent = document.getElementById("listaEventos");


console.log(data.eventos);


data.eventos.forEach(event =>{

console.log(event);



let nodeEvent0 = document.createElement('DIV')
nodeEvent0.classList.add("col")
nodeEvent0.classList.add("mt-5")
nodeEvent0.classList.add("nota2")
nodeEvent0.classList.add("mb-5")

let nodeEvent1 = document.createElement('DIV')
nodeEvent1.classList.add("d-flex")

let nodeEvent2 = document.createElement('DIV')
nodeEvent2.classList.add("col-5")

let nodeImg = document.createElement('IMG')
nodeImg.setAttribute('src', event.imagen);

let nodeEvent3 = document.createElement('DIV')
nodeEvent3.classList.add("col-5")
nodeEvent3.classList.add("bloque-contenido")

let nodetitulo = document.createElement('DIV')
nodetitulo.classList.add("margin-titulo")

let nodetituloH1 = document.createElement('H1')
nodetituloH1.classList.add("titulo-conferencia")
nodetituloH1a = document.createTextNode(event.titulo);

let nodeEvent4 = document.createElement('DIV')
nodeEvent4.classList.add("p-2")
nodeEvent4.classList.add("flex-shrink-1")
nodeEvent4.classList.add("bd-highlight")

let nodeEvent5 = document.createElement('STRONG')
nodeEvent5.classList.add("tit-donde")
nodeEvent5a = document.createTextNode("Donde");

let nodeEvent6 = document.createElement('DIV')
nodeEvent6.classList.add("ubicacion")

let nodeEvent7 = document.createElement('P')
nodeEvent7a = document.createTextNode(event.location);

let nodeEvent8 = document.createElement('P')
nodeEvent8.classList.add("margin-negativo")
nodeEvent8a = document.createTextNode(event.address);

let nodeEvent9 = document.createElement('DIV')
nodeEvent9.classList.add("d-flex")
nodeEvent9.classList.add("flex-column")

let nodeEvent10 = document.createElement('BUTTON')
nodeEvent10.classList.add("mas-info")
nodeEvent10.classList.add("btn")
nodeEvent10.classList.add("text-justify")
nodeEvent10.setAttribute('type', "button");
nodeEvent10a = document.createTextNode("Más información")

let nodeEvent11 = document.createElement('BUTTON')
nodeEvent11.classList.add("inscribirse")
nodeEvent11.classList.add("btn")
nodeEvent11.setAttribute('type', "button");
nodeEvent11.setAttribute('id', "btnInscribir");
nodeEvent11a = document.createTextNode("Inscribirse")

let nodeEvent12 = document.createElement('DIV')
nodeEvent12.classList.add("col-2")
nodeEvent12.classList.add("bloque-fecha")

let nodeEvent13 = document.createElement('DIV')
nodeEvent13.classList.add("fechasEvent")

let nodeEvent14 = document.createElement('P')
nodeEvent14.classList.add("mesEv")
nodeEvent14a = document.createTextNode(event.month);

let nodeEvent15 = document.createElement('P')
nodeEvent15.classList.add("resaltaD")
nodeEvent15a = document.createTextNode(event.day);

let nodeEvent16 = document.createElement('DIV')
nodeEvent16.classList.add("horariosEvent")

let nodeEvent17 = document.createElement('STRONG')
nodeEvent17.classList.add('horario-evento')
nodeEvent17a = document.createTextNode("Horario");

let nodeEvent18 = document.createElement('P')
nodeEvent18.classList.add("resaltaH")
nodeEvent18a = document.createTextNode(event.time);

let nodeEvent19 = document.createElement('DIV')
nodeEvent19.classList.add("costoEntrad")
let nodeEvent20 = document.createElement('STRONG')
nodeEvent20.classList.add("costo-entrada-tit")
nodeEvent20a = document.createTextNode("Entrada");
let nodeEvent21 = document.createElement('P')
nodeEvent21.classList.add("costo-entrada")
nodeEvent21a = document.createTextNode(event.cost);



nodeEvent.appendChild(nodeEvent0)
nodeEvent0.appendChild(nodeEvent1)
nodeEvent1.appendChild(nodeEvent2)
nodeEvent2.appendChild(nodeImg)

nodeEvent1.appendChild(nodeEvent3)


nodeEvent3.appendChild(nodetitulo)
nodetitulo.appendChild(nodetituloH1)
nodetituloH1.appendChild(nodetituloH1a)

nodeEvent3.appendChild(nodeEvent4)
nodeEvent4.appendChild(nodeEvent5)

nodeEvent5.appendChild(nodeEvent5a)

nodeEvent4.appendChild(nodeEvent6)

nodeEvent6.appendChild(nodeEvent7)
nodeEvent7.appendChild(nodeEvent7a)
nodeEvent6.appendChild(nodeEvent8)
nodeEvent8.appendChild(nodeEvent8a)

nodeEvent4.appendChild(nodeEvent9)
nodeEvent9.appendChild(nodeEvent10)
nodeEvent10.appendChild(nodeEvent10a)

nodeEvent9.appendChild(nodeEvent11)
nodeEvent11.appendChild(nodeEvent11a)

nodeEvent1.appendChild(nodeEvent12)
nodeEvent12.appendChild(nodeEvent13)

nodeEvent13.appendChild(nodeEvent14)
nodeEvent14.appendChild(nodeEvent14a)
nodeEvent13.appendChild(nodeEvent15)
nodeEvent15.appendChild(nodeEvent15a)

nodeEvent12.appendChild(nodeEvent16)
nodeEvent16.appendChild(nodeEvent17)
nodeEvent17.appendChild(nodeEvent17a)

nodeEvent16.appendChild(nodeEvent18)
nodeEvent18.appendChild(nodeEvent18a)

nodeEvent12.appendChild(nodeEvent19)
nodeEvent19.appendChild(nodeEvent20)
nodeEvent20.appendChild(nodeEvent20a)

nodeEvent19.appendChild(nodeEvent21)
nodeEvent21.appendChild(nodeEvent21a)
})



var proxEvent = document.getElementById("lista-event-prox");
data.proxEventos.forEach(prox => {

let proxEvent1 = document.createElement('DIV')
proxEvent1.classList.add("row")

let proxEvent2 = document.createElement('DIV')
proxEvent2.classList.add("row")
proxEvent2.classList.add("col-4")
proxEvent2.classList.add("align-items-center")
proxEvent2.classList.add("p-0")
proxEvent2.classList.add("ml-2")

let proxEventImg = document.createElement('IMG')
proxEventImg.setAttribute('src', prox.imagen);

let proxEvent3 = document.createElement('P')
proxEvent3.classList.add("mb-0")
proxEvent3.classList.add("ml-3")
proxEvent3.classList.add("prox-event-detalles")

proxEvent3a = document.createTextNode(prox.time);

let proxEvent4 = document.createElement('DIV')
proxEvent4.classList.add("col-7")
proxEvent4.classList.add("ml-4")

let circle = document.createElement('FIGURE')
circle.classList.add("circle-bg")

let ulProxEvent = document.createElement('UL')

let liProxEvent = document.createElement('LI')
liProxEvent.classList.add("col")
liProxEvent.classList.add("align-items-center")
liProxEvent.classList.add("p-0")

let titEvent = document.createElement("A")
titEvent.classList.add("titEvent")
titEvent.classList.add("prox-event-detalles")
titEventa = document.createTextNode(prox.titulo);

let brTit = document.createElement("BR")

let ubicaEvent = document.createElement("A")
ubicaEvent.classList.add("ubicaEvent")
ubicaEvent.classList.add("prox-event-detalles")
ubicaEventa = document.createTextNode(prox.ubicacion);

proxEvent.appendChild(proxEvent1)
proxEvent1.appendChild(proxEvent2)

proxEvent2.appendChild(proxEventImg)
proxEvent2.appendChild(proxEvent3)
proxEvent3.appendChild(proxEvent3a)

proxEvent1.appendChild(proxEvent4)
proxEvent4.appendChild(circle)
proxEvent4.appendChild(ulProxEvent)

ulProxEvent.appendChild(liProxEvent)

liProxEvent.appendChild(titEvent)
titEvent.appendChild(titEventa)

liProxEvent.appendChild(brTit)



liProxEvent.appendChild(ubicaEvent)
ubicaEvent.appendChild(ubicaEventa)
})