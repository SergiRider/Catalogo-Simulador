
/*const table= document.getElementsByClassName("table")[0]

function createCard(number1,number2,number3){
    const card= document.createElement("div")
    card.className="card"

    const marca= document.createElement("div")
    marca.innerText =number1

    const modelo=document.createElement("div")
    modelo.className="right"
    modelo.innerText =number2

    const valor=document.createElement("div")
    valor.className="right"
    valor.innerText =number3

    card.append(marca)
    card.append(modelo)
    card.append(valor)

    return card
}
*/
/*
table.appendChild(createCard(kawasaki1.marca,kawasaki1.modelo,kawasaki1.valor))

const titulo=document.getElementById("tituloTarjeta")
titulo.innerText=kawasaki1.marca
const descripcion=document.getElementById("parrafoTarjeta")
descripcion.innerText=kawasaki1.modelo
const valor=document.getElementById("valorTarjeta")
valor.innerText=kawasaki1.valor
*/




const catalogoMotos= document.getElementById("modelos");
arrayVehiculos.forEach((vehiculo) => {
    const option = document.createElement("option");
    option.innerText = `${vehiculo.modelo}`;
    option.value = arrayVehiculos.indexOf(vehiculo);
    catalogoMotos.append(option);
    
});

function mostrarSeleccion(){

let combo=document.getElementById("modelos")
let selected= combo.options[combo.selectedIndex].text


const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(selected));
let contenedow = document.createElement("div")


for (const modelos of modeloIngresado){


  contenedow.innerHTML=

`<div class="card" style="width: 18rem;">
<div id="cuerpoTarjeta">
<h5 id="tituloTarjeta">${modelos.modelo} ahora si desde la tarjeta!${modelos.marca}${modelos.valor}</h5>
  <p id="parrafoTarjeta"></p>
  <p id="valorTarjeta"></p>
</div>
</div>`

}document.body.appendChild(contenedow)
}




