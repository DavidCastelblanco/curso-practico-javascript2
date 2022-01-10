var notas =[];
var contadorNotas = 0;


function ingresarNotas()
{
    var x = document.getElementById("userNota");
    nuevaNota = x.value;
    var y = document.getElementById("userPeso");
    nuevoPeso = y.value;

    var ingresarNota = notas.push({
        nota:nuevaNota,
        peso:nuevoPeso
    })
    contadorNotas += 1
    mostrarNotas.innerHTML +="<br>"+"Nota#"+contadorNotas+ "<br>Nota: "+nuevaNota +"<br>peso: "+nuevoPeso;
    mostrarNotas.innerHTML +='<hr>'
}

function calcularPromedioPonderado()
{

    let promedioPonderado =0;
    for (i=0;i<notas.length;i++)
    {
      promedioPonderado += notas[i].nota*(notas[i].peso/100);
    }
    console.log(promedioPonderado);
    resultado.innerText ="Tu promedio ponderado es "+promedioPonderado;
}

