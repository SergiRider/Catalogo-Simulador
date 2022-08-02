//ELEMENTOS DEL SELECTOR//
const catalogoMotos= document.getElementById("modelos");
arrayVehiculos.forEach((vehiculo) => {
    const option = document.createElement("option");
    option.innerText = `${vehiculo.modelo}`;
    option.value = arrayVehiculos.indexOf(vehiculo);
    catalogoMotos.append(option);
    
});
let htmlCode=""

function mostrarSeleccion(){

let combo=document.getElementById("modelos")
let selected= combo.options[combo.selectedIndex].text

const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(selected));

let intento100=document.getElementById("elementoDinamico")
intento100.innerHTML=""
modeloIngresado.forEach ((elemento) => {
  intento100.innerHTML+=`
  <div class="contenedorDinamico">
  <h3>Vehiculo seleccionado:</h3>
  <h5>${elemento.marca}</h5>
  <p>${elemento.modelo}   ${elemento.año}</p>
  <p>${elemento.cc} cc</p>
  <p>${elemento.valor} CLP</p>
  <p>${elemento.descripcion}</p>
  <a href="#" class="btn btn-dark">Cotiza con nosotros</a>
  </div>`
})
}
mostrarSeleccion()
