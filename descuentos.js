const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal*porcentajePrecioConDescuento)/100;

const cupones = [
    {
        nombre: "super",
        descuento: 15
    },
    {
        nombre:"mega",
        descuento:30
    }
]

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;

}

function realizardescuento()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue= inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue)

    const resultado = document.getElementById("resultado");

    resultado.innerText = "El precio con descuento es:$"+precioFinal;

}

function realizarDescuentoCupon()
{
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    //validar si el cupon del usuario esta en el array
    const encuentraCupon = function(cupon){
        return cupon.nombre === cuponValue;
    }

    const validarCupon = cupones.find(encuentraCupon);

    if (!validarCupon)
    {
        alert("No hay ese cupon");
    }
    //tomar el precio colocado por el usuario
    const inputPrice = document.getElementById("InputPrice");
    const priceValue= inputPrice.value;
    if(priceValue=="")
    {
        alert("falta ingresar precio")
    }
    else
    {
        const precioFinal = calcularPrecioConDescuento(priceValue, validarCupon.descuento);

         const resultado = document.getElementById("resultado");

        resultado.innerText = "El precio con  el cupon de descuento es:$"+precioFinal;
    }
    
    
}