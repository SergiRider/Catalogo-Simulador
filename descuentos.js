const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})

const datosRegistroA = JSON.parse(localStorage.getItem("intentos"))

const datosRegistroB = JSON.parse(localStorage.getItem("nombres"))

const datosImagenes = JSON.parse(localStorage.getItem("imagenes"))

function descuento(datosRegistroA){
    return formatoPeso.format(datosRegistroA-(datosRegistroA*0.1))
}


let random=Math.floor(Math.random()*9)+1

let mensaje0=document.getElementById("mensaje")
if(random==0){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[0]} a un precio de ${descuento(datosRegistroA[0])}?</h1>
    <img src="${datosImagenes[0]}"</img>`
}else if(random==1){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[1]} a un precio de ${descuento(datosRegistroA[1])}?</h1>
    <img src="${datosImagenes[1]}"</img>`
}else if(random==2){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[2]} a un precio de ${descuento(datosRegistroA[2])}?</h1>
    <img src="${datosImagenes[2]}"</img>`
}else if(random==3){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[3]} a un precio de ${descuento(datosRegistroA[3])}?</h1>
    <img src="${datosImagenes[3]}"</img>`
}else if(random==4){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[4]} a un precio de ${descuento(datosRegistroA[4])}?</h1>
    <img src="${datosImagenes[4]}"</img>`
}else if(random==5){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[5]} a un precio de ${descuento(datosRegistroA[5])}?</h1>
    <img src="${datosImagenes[5]}"</img>`
}else if(random==6){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[6]} a un precio de ${descuento(datosRegistroA[6])}?</h1>
    <img src="${datosImagenes[6]}"</img>`    
}else if(random==7){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[7]} a un precio de ${descuento(datosRegistroA[7])}?</h1>
    <img src="${datosImagenes[7]}"</img>`
}else if(random==8){
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[8]} a un precio de ${descuento(datosRegistroA[8])}?</h1>
    <img src="${datosImagenes[8]}"</img>`
}else{
    mensaje0.innerHTML=`<h1>Te interesa comprar una ${datosRegistroB[8]} a un precio de ${descuento(datosRegistroA[8])}?</h1>
    <img src="${datosImagenes[8]}"</img>`
}
