
var actual=new Date();
function mostrarCalendario(year,month)
{
	var now=new Date(year,month-1,1);
	var last=new Date(year,month,0);
	var primerDiaSemana=(now.getDay()==0)?7:now.getDay();
	var ultimoDiaMes=last.getDate();
	var dia=0;
	var resultado="<tr>";
	var diaActual=0;
	console.log(ultimoDiaMes);
 
	var last_cell=primerDiaSemana+ultimoDiaMes;
 
	// hacemos un bucle hasta 42, que es el máximo de valores que puede
	// haber... 6 columnas de 7 dias
	for(var i=1;i<=42;i++)
	{
		if(i==primerDiaSemana)
		{
			// determinamos en que dia empieza
			dia=1;
		}
		if(i<primerDiaSemana || i>=last_cell)
		{
			// celda vacia
			resultado+="<td>&nbsp;</td>";
		}else{
			// mostramos el dia
			if(dia==actual.getDate() && month==actual.getMonth()+1 && year==actual.getFullYear())
				resultado+="<td class='hoy'>"+dia+"</td>";
			else
				resultado+="<td>"+dia+"</td>";
			dia++;
		}
		if(i%7==0)
		{
			if(dia>ultimoDiaMes)
				break;
			resultado+="</tr><tr>\n";
		}
	}
	resultado+="</tr>";
 
	var meses=Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
 
	// Calculamos el siguiente mes y año
	nextMonth=month+1;
	nextYear=year;
	if(month+1>12)
	{
		nextMonth=1;
		nextYear=year+1;
	}
 
	prevMonth=month-1;
	prevYear=year;
	if(month-1<1)
	{
		prevMonth=12;
		prevYear=year-1;
	}


 
/* ocument.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML="<a onclick='mostrarCalendario("+prevYear+","+prevMonth+")'>&lt;</a><div>"+meses[month-1]+"  "+year+"</div><div> <a onclick='mostrarCalendario("+nextYear+","+nextMonth+")'>&gt;</a></div>";
	document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML=resultado;
 */


	document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML=resultado;
	document.getElementById("mes").innerHTML="<a onclick='mostrarCalendario("+prevYear+","+prevMonth+")'>&lt;</a><div>"+meses[month-1]+"  "+year+"</div><div> <a onclick='mostrarCalendario("+nextYear+","+nextMonth+")'>&gt;</a></div>";

}
 
mostrarCalendario(actual.getFullYear(),actual.getMonth()+1);

// ******* Inscribirme / desincribirme
var misEventos = [];

function crearBotones(tipo) {
    switch (tipo) {
        // boton entrar
        case 1:
            return '<button type="button" id="botonEvent1" class="btn justify-content" value="true" name="evento1" > Inscribirme</button> <br>'
            break;
        // boton unirse
        case 2:
            return `<td class='text-center'><button  data-gameId= "${gameID}" class='join' id= "${gameID}"> Unirse</button> </td>`
            break;
        // no crees boton
        case 3:
            return "<td class='text-center'>No puedes entrar</td>"
            break;
        default:
            break;
    }
}




function colocaBoton() {	
console.log("boton");
console.log(misEventos);
// incribirse
if (!misEventos.includes("evento1")) {
	console.log("primer if");	
	$("#botonEvent1").append(`Inscribirme`);
	document.getElementById("botonEvent1").classList.add("inscribirse")
	// $("#botonEvent1").on("click", inscribirse());
	
	// classList.add("inscribirme")
	// celda.onclick.add(`preparaTiro(${String.fromCharCode(i + 64).toLowerCase() + j})`);
} 
if (!misEventos.includes("evento2")){
	console.log("2do if");	
	$("#botonEvent2").append(`Inscribirme`);
	document.getElementById("botonEvent2").classList.add("inscribirse")
}
// desincribirse
if(misEventos.includes("evento1")){
	console.log("3er if");	
	$("#botonEvent1").append(`Desinscribirme`);
	document.getElementById("botonEvent1").classList.add("desinscribirse")
}
if(misEventos.includes("evento2")){
	console.log("4to if");	
	$("#botonEvent2").append(`Desinscribirme`);
	document.getElementById("botonEvent2").classList.add("desinscribirse")
}
// 	$("#botonEvent2").append(`<button type="button" class="inscribirse btn justify-content "
// 	value="true" name="evento1" onclick="inscribirse()>Inscribirme</button> <br>`)
// }
// if(misEventos.includes("evento1")){
// 	$("#botonEvent1").append(`<button type="button" class=" btn justify-content desinscribirse"
// 	value="true" name="evento1">Inscribirme</button> <br>`)
// }
// if(misEventos.includes("evento2")){
// 	$("#botonEvent2").append(`<button type="button" class=" btn justify-content desinscribirse"
// 	value="true" name="evento2">Inscribirme</button> <br>`)}
// 
}
colocaBoton();

document.getElementsByClassName("inscribirse").addEventListener("click", inscribirse())

function inscribirse () {
		console.log(this);
		console.log("entre a insc");
		
		let events = this.name;
		misEventos.push(events);
		console.log(misEventos);
		
		
	}
	console.log("mis eventos son" + misEventos);
	


	function desinscribirse () {
		console.log(this);
		let events = this.name;
		misEventos.pop(events);
		console.log(misEventos);
		
	}
	

// addEventListener()
// function misEventosMas(e) {
// 	$(window).on("load", function () {
// 		console.log(this.event);
// 		console.log(this.event.target.title);
// 		let titulo = this.event.target.title;
// 		$("#tituloPag").append(`<h1 class="col-3 text-right"> ${titulo} </h1> 
// 		<img src="./images/linea-ROSA.png" alt="lineaRosa" class="col-3">`)
// 	});
// }
