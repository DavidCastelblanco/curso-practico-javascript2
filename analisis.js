//helpers

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
    return (numerito%2===0);
}

//calculadora de mediana

function medianaSalariosCol (lista)
{
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length))
    {
        const personitaMitad1 = lista[mitad];
        const personitaMitad2 = lista[mitad-1];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
        
    }
    else
    {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana general
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);
const salariosColO= salariosCol;

const salariosColSorted = (salariosCol.sort(
    function (a,b){
       return a-b;
   }
));

const medianaGeneralCol = medianaSalariosCol(salariosColSorted)

//Mediana del top 10%

const spliceStart = parseInt((salariosColSorted.length *90)/100);

const salariosColTop10 = salariosColSorted.slice(spliceStart);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);


console.log({
   medianaGeneralCol,
   medianaTop10Col
});
