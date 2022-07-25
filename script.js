class Vehiculo {
    constructor(marca, modelo, año, cc, valor, color, rendimiento) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cc = cc;
        this.valor = valor;
        this.color = color;
        this.rendimiento = rendimiento;
    }
    seleccion() {
        console.log("Has elegido una " + this.modelo + " del año " + this.año + ".")
    }
}
const kawasaki1 = new Vehiculo("MARCA: KAWASAKI", "MODELO: NINJA 400", "Año: " + 2022, 398, 6300000, "COLOR: NEGRO", 4.1)
const kawasaki2 = new Vehiculo("MARCA: KAWASAKI", "MODELO: NINJA 400", "Año: " + 2021, 398, 6300000, "COLOR: BLANCO", 4.1)
const kawasaki3 = new Vehiculo("MARCA: KAWASAKI", "MODELO: NINJA ZX-6R", "Año: " + 2021, 598, 12000000, "COLOR: NEGRO", 5.5)
const kawasaki4 = new Vehiculo("MARCA: KAWASAKI", "MODELO: NINJA ZX-6R", "Año: " + 2022, 598, 12000000, "COLOR: VERDE KAWA", 5.5)
const kawasaki5 = new Vehiculo("MARCA: KAWASAKI", "MODELO: NINJA ZX-10R", "Año: " + 2021, 998, 22000000, "COLOR: NEGRO", 5.9)
const kawasaki6 = new Vehiculo("MARCA: KAWASAKI", "MODELO: NINJA H2-R", "Año: " + 2019, 998, 36000000, "COLOR: NEGRO Espejo", 8.5)
const ducati1 = new Vehiculo("MARCA: DUCATI", "MODELO: MONSTER 821", "Año: " + 2020, 821, 9000000, "COLOR: ROJO DUCATI", 5.2)
const ducati2 = new Vehiculo("MARCA: DUCATI", "MODELO: MONSTER 821", "Año: " + 2018, 821, 10000000, "COLOR: NEGRO", 6)
const ducati3 = new Vehiculo("MARCA: DUCATI", "MODELO: PANIGALE 959", "Año: " + 2020, 959, 18000000, "COLOR: ROJO DUCATI", 5.6)
const ducati4 = new Vehiculo("MARCA: DUCATI", "MODELO: PANIGALE v4 S", "Año: " + 2022, 1199, 32000000, "COLOR: TRI COLOR ITALIANO", 6.9)
const ducati5 = new Vehiculo("MARCA: DUCATI", "MODELO: MULTISTRADA V2 S", "Año: " + 2022, 1200, 20000000, "COLOR: ROJO DUCATI", 5.9)
const ducati6 = new Vehiculo("MARCA: DUCATI", "MODELO: DIAVEL", "Año: " + 2020, 1260, 30000000, "COLOR: GRIS ARSENICA", 5.4)

//Formato a pesos CLP
const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})

const arrayVehiculos = [kawasaki1, kawasaki2, kawasaki3, kawasaki4, kawasaki5, kawasaki6, ducati1, ducati2, ducati3, ducati4, ducati5, ducati6];

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
    // BUSCAR VEHICULO POR MODELO
    function busquedaPorModelo() {
        let ingresado = (prompt("Modelo que buscas \n(Si quieres revisar todo el catalogo, solo apreta 'aceptar')")).toUpperCase()

        const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(ingresado));
        console.log(modeloIngresado)
        console.log("Total de vehiculos encontrados: " + modeloIngresado.length)

        for (const vehiculo of modeloIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo)

        }
    }
    function busquedaPorAño() {
        let ingresado = prompt("Año del modelo que buscas")
        const añoIngresado = arrayVehiculos.filter(vehiculo => vehiculo.año.includes(ingresado));
        console.log(añoIngresado)
        console.log("Total de vehiculos encontrados: " + añoIngresado.length)

        for (const vehiculo of añoIngresado) {
            console.log("-" + vehiculo.modelo + " año " + vehiculo.año)

        }
    }
    //BUSCAR VEHICULO POR CC
    function busquedaMayorCc() {
        let valor = prompt("Igual o superior a la Cilindrada que buscas")
        const ccIngresado = arrayVehiculos.filter(vehiculo => vehiculo.cc >= valor);
        console.log(ccIngresado)
        console.log("Total de vehiculos encontrados: " + ccIngresado.length)

        for (const vehiculo of ccIngresado) {
            console.log("-" + vehiculo.modelo + " con " + vehiculo.cc + "cc")
        }
    }
    function busquedaMenorCc() {
        let valor = prompt("Igual o menor a la Cilindrada que buscas")
        const ccIngresado = arrayVehiculos.filter(vehiculo => vehiculo.cc <= valor);
        console.log(ccIngresado)
        console.log("Total de vehiculos encontrados: " + ccIngresado.length)

        for (const vehiculo of ccIngresado) {
            console.log("-" + vehiculo.modelo + " con " + vehiculo.cc + "cc")
        }
    }
    //BUSQUEDA POR PRECIO
    function busquedaMayorPrecio() {
        let valor = prompt("Igual o mayor al precio que buscas")
        const precioIngresado = arrayVehiculos.filter(vehiculo => vehiculo.valor >= valor);
        console.log(precioIngresado)
        console.log("Total de vehiculos encontrados: " + precioIngresado.length)

        for (const vehiculo of precioIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + "\n Precio: $" + vehiculo.valor)
        }
    }
    function busquedaMenorPrecio() {
        let valor = prompt("Igual o menor al precio que buscas")
        const precioIngresado = arrayVehiculos.filter(vehiculo => vehiculo.valor <= valor);
        console.log(precioIngresado)
        console.log("Total de vehiculos encontrados: " + precioIngresado.length)

        for (const vehiculo of precioIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + "\n Precio: $" + vehiculo.valor)
        }
    }
    function busquedaPorConsumo() {
        let ingresado = (prompt("Modelo que buscas")).toUpperCase()
        const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(ingresado));
        console.log(modeloIngresado)
        console.log("Total de vehiculos encontrados para modelo: " + ingresado + " " + modeloIngresado.length)

        for (const vehiculo of modeloIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + " " + calculoRendimiento(100, vehiculo.rendimiento) + "Km/L")
        }
    }
    //BUSQUEDA POR COLOR
    function busquedaPorColor() {
        let ingresado = (prompt("Tenemos los siguientes colores:\n-Negro\n-Blanco\n-Rojo Ducati\n-Verde\n-Tri Color Italia\n-Negro Espejo\n-Gris Arsenica")).toUpperCase()
        const colorIngresado = arrayVehiculos.filter(vehiculo => vehiculo.color.includes(ingresado));
        console.log(colorIngresado)
        console.log("Total de vehiculos encontrados: " + colorIngresado.length)

        for (const vehiculo of colorIngresado) {
            console.log("-" + vehiculo.modelo + " " + vehiculo.color)
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
            alert("Contamos con modelos de los siguientes años:\n-2018\n-2020\n-2021\n-2022")
            busquedaPorAño();
            break;
        case "4":
            busquedaMayorCc();
            break;
        case "5":
            busquedaMenorCc();
            break;
        case "6":
            busquedaMayorPrecio();
            break;
        case "7":
            busquedaMenorPrecio();
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
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + " valor " + formatoPeso.format(vehiculo.valor))

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
let bienvenida = prompt("Hola " + ingresarNombre + "! ¿qué te gustaría hacer?\n1)Consultar catalogo de motos.\n2)Simular credito con nosotros.")
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