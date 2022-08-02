//Formato a pesos CLP
const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})
/**
 * Esta función se encarga de procesar la solicitud mediante prompt del usuario y devolver el catalogo de productos según su petición
 */
function calculoRendimiento(distancia, litros) {
    return (distancia / litros).toFixed(1)
}
function filtrado() {
    /**
     * Esta función se encarga de filtrar por marca según petición de usuario
     */
    function busquedaPorMarca() {
        let ingresado = (prompt("Marca que buscas\n(Si quieres revisar todo el catalogo, solo apreta 'aceptar')")).toUpperCase()
        const marcaIngresado = arrayVehiculos.filter(vehiculo => vehiculo.marca.includes(ingresado));
        console.log(marcaIngresado)
        console.log("Total de vehiculos encontrados: " + marcaIngresado.length)

        for (const vehiculo of marcaIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo)
        }
    }

    function ingresarOpción() {
        let num = prompt("Ingresa tu interes de busqueda:\n1) Marca\n2) Modelo\n3) Año\n4) Cilindrada+\n5) Cilindrada-\n6) Valor+\n7) Valor-\n8) Rendimiento\n9)Color")
        return num
    }
    switch (ingresarOpción()) {
        case "1":
            busquedaPorMarca();
            break;
        case "2":
            busquedaPorModelo();
            break;
        case "3":
            busquedaPorAño("Ingrese el año de interés.");
            break;
        case "4":
            busquedaMayorCc("Se buscará en un rango igual o superior al ingresado.");
            break;
        case "5":
            busquedaMenorCc("Se buscará en un rango igual o inferior al ingresado.");
            break;
        case "6":
            busquedaMayorPrecio("Se buscará en un rango igual o superior al valor indicado.");
            break;
        case "7":
            busquedaMenorPrecio("Se buscará en un rango igual o menor al valor indicado.");
            break;
        case "8":
            busquedaPorConsumo();
            break;
        case "9":
            busquedaPorColor();
            break;
        default:
            alert("Ingresa numero valido");
            break;
    }
}
/**
* Esta función se encarga de simular un credito de consumo según la cuotas pactadas en meses y bajo un interés fijo de 3,5%
*/
function cotizaConNotros() {
    let ingresarModelo = (prompt("Modelo que buscas ")).toUpperCase()

    const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(ingresarModelo))
    console.log("Total de vehiculos encontrados: " + modeloIngresado.length)

    if (modeloIngresado.length <= 0) {
        alert("No se encontraron vehiculos, se recomienda revisar catalogo de vehiculos.")}
        else if(ingresarModelo===""){
            alert("Debes ingresar un modelo valido.")
        }else {
    
        for (const vehiculo of modeloIngresado) {
            console.log(`-${vehiculo.marca} ${vehiculo.modelo} valor  ${formatoPeso.format(vehiculo.valor)}`)

            let valorIngresado = vehiculo.valor

            const principal = parseFloat(prompt("Ingresa el pie inicial:"));
            const interes = 3 / 100;
            const cuotas = parseFloat(prompt("Cuotas"));

            let diferencia = valorIngresado - principal
            let mensual = ((interes * diferencia) / (1 - Math.pow(1 + interes, -cuotas))).toFixed(0)
            let pagoTotalPrestamo = (mensual * cuotas).toFixed(0)
            let interesesTotal = (mensual * cuotas - diferencia).toFixed(0)
            console.log("El monto solicitado es: " + formatoPeso.format(diferencia))
            console.log("El pago mensual de las cuotas es de: " + formatoPeso.format(mensual))
            console.log("El pago total será de: " + formatoPeso.format(pagoTotalPrestamo))
            console.log("El pago total de intereses es de: " + formatoPeso.format(interesesTotal))
        }
    }
}
let ingresarNombre = prompt("Hola! ¿Cuál es tu nombre?")
let bienvenida = prompt(`Hola ${ingresarNombre}! ¿qué te gustaría hacer?\n1)Consultar catalogo de motos.\n2)Simular credito con nosotros.`)
switch (bienvenida) {
    case "1":
        filtrado()
        break;
    case "2":
        cotizaConNotros()
        break;
    default:
        break;
}