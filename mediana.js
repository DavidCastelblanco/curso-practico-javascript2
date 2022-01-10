
function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce(
        function (valorAcumulado= 0, nuevoElemento)
        {
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

function esPar(numerito)
{
    if (numerito%2 ===0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function comparar ( a, b )
{ 
    return a - b; 
}

let mediana;

function calcularMediana(lista)
{

    const mitadLista = parseInt(lista.length/2);

    if (esPar(lista.length))
    {
        const elemento1 = lista.sort(comparar)[mitadLista];
        const elemento2 = lista.sort(comparar)[mitadLista-1];
        const promedioelementos = calcularMediaAritmetica([elemento1, elemento2])
        mediana =promedioelementos;
        return mediana;
    }
    else
    {
        mediana = lista.sort(comparar)[mitadLista];
        return mediana;
    }
}

let listaDesorden = [5,8,7,3,1,9,12,1];
let listaOrden = listaDesorden;
let x =0;
for (i=0;i<=listaOrden.length;i++)
{
   for (j=0;j<listaOrden.length;j++)
   {
       if (listaOrden[j]>listaOrden[j+1])
       {
            x = listaOrden[j];
            listaOrden[j]=listaOrden[j+1];
            listaOrden[j+1]= x;
       }
   }
}

function ordenarLista(lista)
{

}



