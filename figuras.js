//codigo del cuadrado
console.group("cuadrados");

function perimetroCuadrado (lado)
{
    return  lado*4;
}  

function areaCuadrado (lado)
{
    return lado*lado
} 
console.groupEnd();

//codigo del triangulo
console.group("Triangulos");


function perimetroTriangulo(lado1,lado2,base)
{
    return lado1+lado2+base;
} 

function areaTriangulo (base, altura)
{
    return (base*altura)/2
} 

//codigo circulo

console.group("Cicurlos")
const pi = Math.PI;

function diametroCirculo (radio)
{
    return radio*2
}

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro* pi
} 

function areaCirculo (radio)
{
    return pi*radio*radio;
} 

console.groupEnd();

// aqui interactuamos con html

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    resultadoCuadrado.innerHTML = ("El perimetro del cuadrado es: "+perimetro+"cm");

}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    resultadoCuadrado.innerHTML = ("El area del cuadrado es: "+area+"cm2");
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);

    resultadoCirculo.innerHTML = ("La circunferencia del circulo es de: "+perimetro+"cm");
}

function calcularAreaCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);

    resultadoCirculo.innerHTML = ("El area del cuadrado es: "+area+"cm2");
}

function calcularAltura(lado1, lado2, lado3)
    {
        if (lado1==lado2 && lado1!=lado3)
        {
            const altura = Math.sqrt((lado1*lado1)-((lado3/2)*(lado3/2)));
            return altura;
        }
        else if (lado1==lado3 && lado1!=lado2)
        {
            const altura = Math.sqrt((lado1*lado1)-((lado2/2)*(lado2/2)));
            return altura;
        }
        else if (lado2==lado3 && lado2!=lado1)
        {
            const altura = Math.sqrt((lado2*lado2)-((lado1/2)*(lado1/2)));
            return altura;
        }
        else
        {
            return 0;
        }
    }


function mostrarAltura()
{
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputLado3");

    const lado1 = input1.value;
    const lado2 = input2.value;
    const lado3 = input3.value;

    if (lado1 == lado2 || lado1 ==lado3 || lado2==lado3)
    {
        const resultadoALtura = calcularAltura(lado1, lado2, lado3);
        if (resultadoALtura>0)
        {
            resultadoAltura.innerHTML = "La altura del triangulo es de: "+resultadoALtura+" cm";
        }
        else
        {
            resultadoAltura.innerHTML = "Esto no es un triagunlo isóceles, es un equilatero" ;
        }
        
    }
    else
    {
        resultadoAltura.innerHTML = "Esto no es un triagunlo isóceles, recuerda que debe haber dos lados iguales";
    }

}