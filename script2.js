let precio = document.getElementById
let modelos15 = document.getElementById("modelos");
modelos15.onchange = mostrarSeleccion;
/**
 * MOSTRA SELECCIÓN MOSTRARÁ EL ELEMENTO SELECCIONADO EN EL SELECT Y LO DIBUJARÁ EN EL DOM
 */
function mostrarSeleccion() {
  let combo = document.getElementById("modelos")
  let selected = combo.options[combo.selectedIndex].text
  const modeloIngresado = kawas.filter(vehiculo => vehiculo.modelo.includes(selected));
  let intento100 = document.getElementById("elementoDinamico")
  intento100.innerHTML = ""
  modeloIngresado.forEach((elemento) => {
    intento100.innerHTML += `
  <div class="contenedorDinamico">
  <h3>Vehiculo seleccionado:</h3>
  <h5>${elemento.marca}</h5>
  <p>${elemento.modelo}   ${elemento.año}</p>
  <p>${elemento.cc} cc</p>
  <p>${formatoPeso.format(elemento.valor)} CLP</p>
  <img src="${elemento.imagen}"</img>
  <p>${elemento.descripcion}</p>
  <form id="formulario" class="col-lg-6 mx-auto row">
        <div class="form-group col-lg-12 justify-content-center">
            <label for="nombre">Ingresa tu nombre</label>
            <input type="text" class="form-control" id="nombre"  placeholder="Ingresa tu nombre" >
            <div id="nombreIncorrecto"></div>
        </div>
        <div class="form-group col-lg-6 justify-content-center">
            <label for="monto">Ingrese el monto a solicitar</label>
            <input type="number" class="form-control" id="monto"  placeholder="Mayor o igual a ${formatoPeso.format((elemento.valor) * 0.2)}" >
            <div id="montoIncorrecto"></div>
        </div>
        <div class="col-lg-6 justify-content-center">
            <label for="cuotas">Ingrese la cantidad de cuotas</label>
            <input type="number" class="form-control" id="cuotas" placeholder="Mayor o igual a 6">
            <div id="cuotaIncorrecto"></div>
        </div>
        <button id="btnCoti" type="submit" class="btn btn-dark">Cotiza ahora!</button>
    </form>`

    const formCotizacion = d.getElementById("formulario")

    formCotizacion.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre=d.getElementById("nombre").value
      const monto = d.getElementById("monto").value
      const cuotas = d.getElementById("cuotas").value

      const datosCotizacion = {
        nombre,
        monto,
        cuotas,
      }
      const datosDelCotizante = []
      if (datosCotizacion.monto > 0 && datosCotizacion.monto <= elemento.valor && datosCotizacion.monto >= (elemento.valor) * 0.2 && datosCotizacion.cuotas > 0 && datosCotizacion.cuotas >= 6) {
        datosDelCotizante.push(datosCotizacion)

        localStorage.setItem("datosDelCotizante", JSON.stringify(datosDelCotizante))
        localStorage.setItem("modeloIngresado", JSON.stringify(modeloIngresado))

        const interes = 3 / 100;
        let mensual = ((interes * datosCotizacion.monto) / (1 - Math.pow(1 + interes, -datosCotizacion.cuotas))).toFixed(0)
        let pagoTotalPrestamo = (mensual * datosCotizacion.cuotas).toFixed(0)
        let interesesTotal = (mensual * datosCotizacion.cuotas - datosCotizacion.monto).toFixed(0)

        if (datosCotizacion.monto > 0 && datosCotizacion.monto <= elemento.valor) {
          const resultadoFinal = document.getElementById("cotizacionFinal")
          resultadoFinal.innerHTML = `
<p>El monto solicitado es: <span style="font-weight: 600">${formatoPeso.format(datosCotizacion.monto)}</span></p>
<p>El pago mensual de las cuotas es de: <span style="font-weight: 600">${formatoPeso.format(mensual)}</span></p>
<p>El pago total será de: <span style="font-weight: 600">${formatoPeso.format(pagoTotalPrestamo)}</span></p>
<p>El pago total de intereses es de: <span style="font-weight: 600">${formatoPeso.format(interesesTotal)}</span></p>
`

        } else if (datosCotizacion.monto > elemento.valor) {
          console.log("El valor del credito es superior al valor del vehiculo")
        }
      } else {
        console.log("no se almacenó")
      }
    })

    const montoValido = d.getElementById("monto")
    const cuotasValidas = d.getElementById("cuotas")

    montoValido.addEventListener("blur", () => {
      if (montoValido.value > (elemento.valor) * 0.2 && montoValido.value <= elemento.valor) {
        const error = d.getElementById("montoIncorrecto")
        error.innerHTML = `<p>Monto solicitado correcto</p>`

      } else if (montoValido.value == 0) {
        const error = d.getElementById("montoIncorrecto")
        error.innerHTML = `<p>Monto no puede ser $<span style="font-weight: 600">0</span></p>`
      } else if (montoValido.value <= (elemento.valor) * 0.2) {
        const error = d.getElementById("montoIncorrecto")
        error.innerHTML = `<p>Monto debe ser igual o superior al <span style="font-weight: 600">20%</span> del valor del vehiculo</p>`
      } else {
        const error = d.getElementById("montoIncorrecto")
        error.innerHTML = `<p>El monto no puede ser mayor a <span style="font-weight: 600">${formatoPeso.format(elemento.valor)}</span></p>`
      }
    })
    cuotasValidas.addEventListener("blur", () => {
      if (cuotasValidas.value > 0 && cuotasValidas.value < 6) {
        const error = d.getElementById("cuotaIncorrecto")
        error.innerHTML = `<p>Cuotas deben ser igual o superior a <span style="font-weight: 600">6</span></p>`
      } else if (cuotasValidas.value == 0) {
        const error = d.getElementById("cuotaIncorrecto")
        error.innerHTML = `<p>Las cuotas no pueden ser <span style="font-weight: 600">0</span></p>`
      } else {
        const error = d.getElementById("cuotaIncorrecto")
        error.innerHTML = `<p>Cuotas correctas</p>`
        true
      }
    })


  })

}

const datosRegistroS = JSON.parse(localStorage.getItem("datosDelCotizante"))
const modeloRescatada = JSON.parse(localStorage.getItem("modeloIngresado"))
console.log(datosRegistroS[0].nombre)
if (datosRegistroS[0] &&modeloRescatada[0]) {
  let retomarCompra = document.getElementById("retomar")
  retomarCompra.innerHTML = `
  <h3>Hola ${datosRegistroS[0].nombre}! </h3>
  <h3>¿Ya te decidiste en comprar tu moto?  Estuviste cotizando una <span style="color:red;font-weight: 600">${modeloRescatada[0].modelo}</span></h3>
  `
} else {
console.log("casi")
}
