let modelos15 = document.getElementById("modelos");
modelos15.onchange = mostrarSeleccion;

function ventanaSecundaria(URL) {
    window.open(URL, "ventana1", "width=860,height=640,scrollbars=NO")
}
function mostrarSeleccion() {
    let combo = document.getElementById("modelos")
    let selected = combo.options[combo.selectedIndex].text
    const modeloIngresado = kawas.filter(vehiculo => vehiculo.modelo.includes(selected));

    localStorage.setItem("modeloIngresado", JSON.stringify(modeloIngresado))
    let intento100 = document.getElementById("elementoDinamico")
    intento100.innerHTML = ""
    modeloIngresado.forEach((elemento) => {
        intento100.innerHTML += `
  <div class="contenedorDinamico animate__animated animate__fadeIn">
  <h3>Vehiculo seleccionado:</h3>
  <h5>${elemento.marca}</h5>
  <p>${elemento.modelo}   ${elemento.año}</p>
  <p>${elemento.cc} cc</p>
  <p>${formatoPeso.format(elemento.valor)} CLP</p>
  <img src="${elemento.imagen}"</img>
  <p class="mt-5">${elemento.descripcion}</p>
  <form id="formulario" class="col-lg-6 mx-auto row">
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
        <button id="btnCoti" type="submit" class="btn btn-dark">
        Cotiza ahora!</button>
    </form>`

        validarDatos(monto, cuotas, elemento)

        const formularioo = document.getElementById("formulario")
        formularioo.addEventListener("submit", (e) => {
            e.preventDefault()

            const monto = document.getElementById("monto").value
            const cuotas = document.getElementById("cuotas").value

            cotizar(monto, cuotas, elemento, modeloIngresado)
        })
    })
}
function validarNombre() {
    const nombreValido = d.getElementById("nombre")

    nombreValido.addEventListener("blur", () => {
        if (isNaN(nombreValido.value) && nombreValido.value.length > 0) {
            const error = d.getElementById("nombreIncorrecto")
            error.innerHTML = `<p>Hola!</p>`
        } else {
            const error = d.getElementById("nombreIncorrecto")
            error.innerHTML = `<p>Nombre invalido</p>`
        }
    })
}
function validarDatos(monto, cuotas, elemento) {
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
        }
    })
}
function cotizar(monto, cuotas, elemento, modeloIngresado) {
    const datosCotizacion = {
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
            Swal.fire({
                title: 'Perfecto!',
                text: 'Lista la cotización!',
                icon: 'success',
                confirmButtonText: 'Ok',
            })
            const resultadoFinal = document.getElementById("cotizacionFinal")
            resultadoFinal.innerHTML = `
          <div class="contenedorResultado animate__animated animate__fadeIn">
<p>El monto solicitado es: <span style="font-weight: 600">${formatoPeso.format(datosCotizacion.monto)}</span></p>
<p>El pago mensual de las cuotas es de: <span style="font-weight: 600">${formatoPeso.format(mensual)}</span></p>
<p>El pago total será de: <span style="font-weight: 600">${formatoPeso.format(pagoTotalPrestamo)}</span></p>
<p>El pago total de intereses es de: <span style="font-weight: 600">${formatoPeso.format(interesesTotal)}</span></p>
</div>

    <h2>¿Te quieres contactar con nosotros? Envianos un correo para que nos contactémos contigo! &#129309</h2>
<form id="form">
<div class="field">
<div class="form-group col-lg-12 justify-content-center">
            <label for="nombre">Ingresa tu nombre:</label>
            <input type="text" required name="from_name" class="form-control" id="nombre"  placeholder="Ingresa tu nombre" >
            <div id="nombreIncorrecto"></div>
        </div>
        </div>
        <div  class="field">
        <div class="form-group col-lg-12 justify-content-center">
            <label for="email_id" >Ingresa tu correo:</label>
            <input type="email" name="email_id" class="form-control" id="email_id"  placeholder="Ingresa tu correo" required>
            <div id="correoIncorrecto"></div>
        </div>
        </div>
        <div class="field">
        <div class="form-group col-lg-12 justify-content-center">
            <label for="email_id">Contáctanos acá:</label>
            <input type="text" required name="message" class="form-control" id="message"  placeholder="Dejanos acá tu mensajito..." >
            <div id="correoIncorrecto"></div>
        </div>
        </div>
        <button id="btnCorreo" type="submit" class="btn btn-dark" >Enviar Email</button>
        </form>
`
            validarNombre(nombre)
            const btn = document.getElementById('btnCorreo');

            document.getElementById('form').addEventListener('submit', function (event) {
                event.preventDefault();
                btn.value = 'Sending...';
                const serviceID = 'default_service';
                const templateID = 'template_wwlna2p';
                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Send Email';
                        Swal.fire({
                            title: 'Enviado!',
                            text: 'Te contactaremos a la brevedad .',
                            icon: 'success',
                            confirmButtonText: 'Ok',
                        })
                        console.log('Enviado!');
                    }, (err) => {
                        btn.value = 'Send Email';
                        console.log(JSON.stringify(err));
                        Swal.fire({
                            title: 'Algo salió mal :c',
                            text: 'Revisa los campos obligatorios.',
                            icon: 'error',
                            confirmButtonText: 'Intenta de nuevo'
                        })
                    });
            });

        } else if (datosCotizacion.monto > elemento.valor) {
        }
    } else {
        console.log("no se almacenó")

        Swal.fire({
            title: 'Algo salió mal :c',
            text: 'Revisa los campos obligatorios.',
            icon: 'error',
            confirmButtonText: 'Intenta de nuevo'
        })
    }
    mostrarRegistro()
}
/**
 * MOSTRA SELECCIÓN MOSTRARÁ EL ELEMENTO SELECCIONADO EN EL SELECT Y LO DIBUJARÁ EN EL DOM
 */

function mostrarRegistro() {

    const modeloRescatada = JSON.parse(localStorage.getItem("modeloIngresado"))
    //DESESTRUCTURACIÓN//
    const { modelo } = modeloRescatada[0]
}
function imprimirRetomarCompra() {
    const prueba16 = modeloRescatada[0].modelo
    let retomarCompra = document.getElementById("retomar")
    retomarCompra.innerHTML = `
  <h3>Hola de nuevo &#128512 ! </h3>
  <br>
  <h3>¿Ya te decidiste en comprar tu moto &#128521?  Estuviste cotizando una <span style="color:red;font-weight: 600">${prueba16} &#128373</span></h3>
  `
}
const modeloRescatada = JSON.parse(localStorage.getItem("modeloIngresado"))

//OPERADOR LOGICO AND

modeloRescatada == null ? console.log("no hay datos") : imprimirRetomarCompra()
