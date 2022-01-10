const lista = [34,42,62,70];

function calcularMediaArmonica (lista)
{
    let divisor = 0;

    for (i=0;i<lista.length;i++)
    {
        divisor += 1/lista[i];
    }
    
    const mediaArmonica = lista.length/divisor;

    return mediaArmonica
}
