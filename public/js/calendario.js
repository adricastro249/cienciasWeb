
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

function botonesAgregaQuita() {
	

// evento 1
if (!misEventos.includes("evento1")) {
	console.log("No incluye el evento1");
	
	$("#botonQuitaE1").hide();
	$("#botonAgregaE1").show();
	
} else if (misEventos.includes("evento1")){
	console.log(misEventos);
	console.log("incluye el evento1");
	$("#botonAgregaE1").hide();
	$("#botonQuitaE1").show();
}

// evento2
if (!misEventos.includes("evento2")) {
	console.log("No incluye el evento2");
	
	$("#botonQuitaE2").hide();
	$("#botonAgregaE2").show();
	
} else if (misEventos.includes("evento2")){
	console.log(misEventos);
	console.log("incluye el evento2");
	$("#botonAgregaE2").hide();
	$("#botonQuitaE2").show();
}
}
botonesAgregaQuita() 

function inscribirse () {
	console.log(event);
	
	let click = event.toElement.name;
	console.log(click);
	misEventos.push(click)
	console.log("mis eventos son..." + misEventos);
	botonesAgregaQuita();

}

function desinscribirse () {
	console.log(event);
	let click = event.toElement.name;
	console.log(click);
	let aux = misEventos.indexOf(click)
	misEventos.splice(aux, 1);
	console.log("mis eventos son..." + misEventos);
	botonesAgregaQuita();

}

// mapas

$("#mapaEvent1").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE1").text(data.eventos[1].address)

$("#mapaEvent2").append(`<iframe class="border" src="${data.eventos[0].map}"></iframe>`)
$(".tituloMapaE2").text(data.eventos[1].address)