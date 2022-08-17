let modelos15 = document.getElementById("modelos");
modelos15.onchange = mostrarSeleccion;

/**
 * MOSTRA SELECCIÓN MOSTRARÁ EL ELEMENTO SELECCIONADO EN EL SELECT Y LO DIBUJARÁ EN EL DOM
 */
function mostrarSeleccion() {
  let combo = document.getElementById("modelos")
  let selected = combo.options[combo.selectedIndex].text
  const modeloIngresado = kawas.filter(vehiculo => vehiculo.modelo.includes(selected));

  localStorage.setItem("modeloIngresado", JSON.stringify(modeloIngresado))
  let intento100 = document.getElementById("elementoDinamico")
  intento100.innerHTML = ""
  modeloIngresado.forEach((elemento) => {
    console.log(elemento)
    intento100.innerHTML += `
  <div class="contenedorDinamico">
  <h3>Vehiculo seleccionado:</h3>
  <h5>${elemento.marca}</h5>
  <p>${elemento.modelo}   ${elemento.año}</p>
  <p>${elemento.cc} cc</p>
  <p>${formatoPeso.format(elemento.valor)} CLP</p>
  <img src="${elemento.imagen}"</img>
  <p class="mt-5">${elemento.descripcion}</p>
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
    validarNombre(nombre)
    validarDatos(monto, cuotas, elemento)
    
    const formularioo = document.getElementById("formulario")
    console.log(formularioo)
    formularioo.addEventListener("submit", (e) => {
      e.preventDefault()
      const nombre = document.getElementById("nombre").value
      const monto = document.getElementById("monto").value
      const cuotas = document.getElementById("cuotas").value

      cotizar(nombre, monto, cuotas, elemento, modeloIngresado)
    })
  })
}

const datosRegistroS = JSON.parse(localStorage.getItem("datosDelCotizante"))
const modeloRescatada = JSON.parse(localStorage.getItem("modeloIngresado"))
//DESESTRUCTURACIÓN//
const {nombre}=datosRegistroS[0]
const {modelo}=modeloRescatada[0]
console.log(nombre)
console.log(modelo)
/-/-/-/-/-/-/-/-/-//OPERADOR LOGICO AND//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/--------
nombre && modelo
 let retomarCompra = document.getElementById("retomar")
 retomarCompra.innerHTML = `
 <h3>Hola ${nombre}! </h3>
 <h3>¿Ya te decidiste en comprar tu moto?  Estuviste cotizando una <span style="color:red;font-weight: 600">${modelo}</span></h3>
 `