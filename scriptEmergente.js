const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})

localStorage.setItem("datosDelCotizante", JSON.stringify(datosDelCotizante))

console.log(datosDelCotizante)

const datosRegistroA = JSON.parse(localStorage.getItem("intentos"))
console.log(datosRegistroA)

const datosRegistroB = JSON.parse(localStorage.getItem("nombres"))
console.log(datosRegistroB)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

getRandomInt(8)==0 ? alert(`Te interesa comprar una ${datosRegistroB[0]} a un precio de ${formatoPeso.format(datosRegistroA[0])}?`):
getRandomInt(8)==1 ? alert(`Te interesa comprar una ${datosRegistroB[1]} a un precio de ${formatoPeso.format(datosRegistroA[1])}?`): 
getRandomInt(8)==2 ? alert(`Te interesa comprar una ${datosRegistroB[2]} a un precio de ${formatoPeso.format(datosRegistroA[2])}?`):
getRandomInt(8)==3 ?alert(`Te interesa comprar una ${datosRegistroB[3]} a un precio de ${formatoPeso.format(datosRegistroA[3])}?`):
getRandomInt(8)==4 ?alert(`Te interesa comprar una ${datosRegistroB[4]} a un precio de ${formatoPeso.format(datosRegistroA[4])}?`):
getRandomInt(8)==5 ?alert(`Te interesa comprar una ${datosRegistroB[5]} a un precio de ${formatoPeso.format(datosRegistroA[5])}?`):
getRandomInt(8)==6 ?alert(`Te interesa comprar una ${datosRegistroB[6]} a un precio de ${formatoPeso.format(datosRegistroA[6])}?`):
getRandomInt(8)==7 ?alert(`Te interesa comprar una ${datosRegistroB[7]} a un precio de ${formatoPeso.format(datosRegistroA[7])}?`):
getRandomInt(8)==8 ?alert(`Te interesa comprar una ${datosRegistroB[8]} a un precio de ${formatoPeso.format(datosRegistroA[8])}?`):
console.log(getRandomInt(8))

 

/*
let infoModelo = document.getElementById("infoCompleta");
infoModelo.innerHTML = `
<h1>${}<h1>
`*/