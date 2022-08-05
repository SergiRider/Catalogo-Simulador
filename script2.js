 let modelos15= document.getElementById("modelos");
modelos15.onchange=mostrarSeleccion;


//ELEMENTOS DEL SELECTOR//
const catalogoKawas = document.getElementById("modelos");
kawas.forEach((vehiculo) => {
  const option = document.createElement("option");
  option.innerText = `${vehiculo.modelo}`;
  option.value = kawas.indexOf(vehiculo);
  catalogoKawas.append(option);

});
let htmlCode = ""
let cotiHTML = ""
let resultadoCoti = ""
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
  <p>${elemento.valor} CLP</p>
  <p>${elemento.descripcion}</p>
  <button id="btnMain" type="submit"class="btn btn-dark">Cotiza con nosotros</button>
  </div>`

  
  let boton = document.getElementById("btnMain")
  boton.addEventListener("click", cancel);
  function cancel() {
    boton.removeEventListener("click", cancel);
    const cotizacion = document.getElementById("cotizaciones")
    cotizacion.innerHTML =

      ` <form class="col-lg-6 mx-auto row">
            <div class="form-group col-lg-6 justify-content-center">
                <label for="titularConsulta">Ingrese el el monto a solicitar</label>
                <input type="text" class="form-control" id="titular" placeholder="Ingrese el el monto a solicitar">
            </div>
            <div class="col-lg-6 justify-content-center">
                <label for="monto">Ingrese la cantidad de cuotas</label>
                <input type="text" class="form-control" id="monto" placeholder="Ingrese la cantidad de cuotas">
            </div>
            <button id="btnCoti" type="submit" class="btn btn-secondary">Cotiza ahora!</button>
        </form>`
  }})
  
  let botonCoti = document.getElementById("btnCoti")
  function mostrar() {
    botonCoti.removeEventListener("click", mostrar);
    const retultadoCoti = document.getElementById("resultadoCoti")
    retultadoCoti.innerHTML = `
  <h2>Hello da</h2>
`
  }
  botonCoti.addEventListener("click", mostrar);
  
}
