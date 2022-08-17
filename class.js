const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})

class Vehiculo {
    constructor(marca, modelo, año, cc, valor, color, rendimiento, descripcion, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cc = cc;
        this.valor = valor;
        this.color = color;
        this.rendimiento = rendimiento;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

const kawasaki1 = new Vehiculo("KAWASAKI", "NINJA 400", "Año: " + 2022, "Cilindrada: " + 398, 6300000, "COLOR: NEGRO", 4.1, "La Ninja® 400 2020 de Kawasaki ofrece la mayor cilindrada de su categoría con 399 cc con la sofisticación de la potencia de dos cilindros. El rendimiento deportivo, la excelente ergonomía y el manejo ligero ofrecen una conducción suave y manejable que atrae a distintos pilotos por su rendimiento deportivo de alta velocidad. Los bajos asientos, el agresivo estilo moderno de la carrocería y los faros LED hacen de la Ninja 400 la elección ideal para los pilotos que buscan entrar en el mundo deportivo.", "https://kawasaki.melhuish.cl/wp-content/uploads/2020/02/400-blanca-lado.jpg")
const kawasaki3 = new Vehiculo("KAWASAKI", "NINJA ZX-6R", "Año: " + 2021, "Cilindrada: " + 598, 12000000, "COLOR: NEGRO", 5.5, "La Kawasaki Ninja ZX-6R es la deportiva de altas prestaciones que en encuadra en la categoría supersport. Ofrece un uso dual, carretera/circuito, para los que quieren disfrutar del radical espíritu Ninja con un motor de 636 cc que ofrece una potencia máxima de 130 CV. Hereda mucho de la descatalogada Ninja ZX-6R 636 pero está dotada de la más moderna tecnología y de una apariencia inspirada en la todopoderosa ZX-10R.", "https://www.mundomotero.com/wp-content/uploads/2018/10/Kawasaki-ZX-6R-2019.jpg")
const kawasaki5 = new Vehiculo("KAWASAKI", "NINJA ZX-10R", "Año: " + 2021, "Cilindrada: " + 998, 22000000, "COLOR: NEGRO", 5.9, "Un motor de 998 cc, un manejo excepcional y un estilo agresivo se combinan con una sofisticada electrónica de última generación para hacer que la Ninja ZX-10R ABS esté lista para las carreras o la conducción en la calle. Frenos Brembo® de última generación y control de tracción Kawasaki Sport.", "https://www.motofichas.com/images/phocagallery/Kawasaki/ninja-zx-10r-2021/01-kawasaki-zx-10r-2021-estudio-verde.jpg")
const kawasaki6 = new Vehiculo("KAWASAKI", "NINJA H2-R", "Año: " + 2019, "Cilindrada: " + 998, 36000000, "COLOR: NEGRO Espejo", 8.5, "El desarrollo de la Ninja H2™R de Kawasaki supera los límites de cualquier otra motocicleta Kawasaki. Al exhibir un potente motor de cuatro cilindros en línea de 998 cc, electrónica de última generación y los últimos frenos Brembo®, la única motocicleta hiperdeportiva sobrealimentada de producción limitada del mundo representa la cúspide de la ingeniería de Kawasaki. Con asombrosa aceleración y una velocidad máxima alucinante solo apta para circuitos, la Ninja H2R ofrece la experiencia más estimulante sobre dos ruedas..", "https://i.ibb.co/M7BzQtm/Ninja-H2-R-Foto-Principal.jpg")
const ducati1 = new Vehiculo("DUCATI", "MONSTER 821", "Año: " + 2020, "Cilindrada: " + 821, 9000000, "COLOR: ROJO DUCATI", 5.2, "La Monster 821 recoge la herencia de la Monster 900 que, desde hace más de 25 años, revolucionó el mundo de la moto y representa la esencia de la verdadera sport naked. Esencial y deportiva, ágil y de alto desempeño, la Monster 821 combina a la perfección prestaciones y facilidad de conducción.", "https://i.ibb.co/d0xhGm4/Monster-821-MY18-Red-01-Data-Sheet-768x480.png")
const ducati3 = new Vehiculo("DUCATI", "PANIGALE 959", "Año: " + 2020, "Cilindrada: " + 959, 18000000, "COLOR: ROJO DUCATI", 5.6, "Potencia y ligereza. Prestaciones y control. La 959 Panigale logra el perfecto equilibrio de estos elementos. La potencia del bicilíndrico Superquadro de 955 cc y el exclusivo chasis monocasco crean una combinación única de prestaciones y facilidad de conducción. Ligera, fácil de maniobrar y controlar gracias también a la dotación técnica que encuentra en los frenos Brembo Monobloque con ABS Bosch, en el embrague amortiguador, en las suspensiones evolucionadas y regulables, y en toda la electrónica de control y gestión, la expresión más completa.", "https://i.ibb.co/g7KmTT9/Panigale-959-MY18-USA-Red-01-Data-Sheet-768x480.png")
const ducati4 = new Vehiculo("DUCATI", "PANIGALE v4", "Año: " + 2022, "Cilindrada: " + 1199, 32000000, "COLOR: TRI COLOR ITALIANO", 6.9, "La Panigale V4 2023 representa el último paso en el camino característico de las motos deportivas Borgo Panigale y toma vida de la experiencia de muchos años de Ducati Corse unida al continuo intercambio de conocimientos y tecnología del mundo de las carreras directamente a las motos de producción. Con esta versión, el proyecto Panigale V4 completa la evolución más significativa desde su creación. Las mejoras involucran todas las áreas: aerodinámica, ergonomía, motor, chasis y electrónica. El resultado es una moto aún más rápida en la pista y, al mismo tiempo, más intuitiva y menos fatigante para una amplia gama de pilotos. En resumen, ofrece una gran y gratificante emoción tanto para los pilotos profesionales como para los aficionados.", "https://i.ibb.co/4NPk9nN/Panigale-V4-MY22-Model-Preview-1050x650-v06.png")
const ducati5 = new Vehiculo("DUCATI", "MULTISTRADA V2 S", "Año: " + 2022, 1200, 20000000, "COLOR: ROJO DUCATI", 5.9, "La familia Ducati Multistrada continúa su evolución con la presentación de la nueva Multistrada V2: la moto ideal para disfrutar al máximo de cada ruta, versátil en el uso diario y en la ciudad, siempre con la deportividad y el estilo inconfundible que caracterizan a toda Ducati. La nueva bicilíndrica de la familia de motos duales Ducati es una moto de 360​​°, cada vez más intuitiva, cómoda, divertida y accesible, gracias también a la introducción de la versión de 35 kW para conductores con carnet A2. La Multistrada V2 es una motocicleta tecnológicamente avanzada, sofisticada y con un paquete electrónico extremadamente completo, sin olvidar el motor, la última evolución del Testastretta 11° de 937 cc, y representa la puerta de entrada perfecta al universo Ducati tourer. Durante las fases de desarrollo de esta moto, los principales puntos de atención fueron la ergonomía, la reducción de peso, las actualizaciones del motor y una serie de mejoras que siguen la filosofía de 'mejora continua'", "https://images.ctfassets.net/x7j9qwvpvr5s/2ppEjCgRMW08CGRqLKgtKw/6623374c2ee3a2aaeffba9af147f0037/MTS-V2-MY22-Model-Preview-1050x650-v06.png")
const ducati6 = new Vehiculo("DUCATI", "DIAVEL", "Año: " + 2020, "Cilindrada: " + 1260, 30000000, "COLOR: GRIS ARSENICA", 5.4, "Poderosa. Musculosa. Pero también ágil y eficaz en las curvas para disfrutar al máximo de la conducción.La Diavel 1260 combina el rendimiento de un maxi-naked con la ergonomía de una muscle cruiser. Su diseño reinterpreta el estilo Diavel con un look contemporáneo e integra a la perfección el motor Testastretta DVT 1262 de 162 CV, corazón palpitante de esta nueva Diavel 1260. La novedad del Modelo Año 22 se caracteriza por la elección de gráficos asimétricos y refinados que combinan gris brillante y negro mate como colores principales, a los que se añaden toques deportivos en amarillo, incluido el marco, la parte inferior trasera, la placa de asiento dedicada y algunos detalles de la moto. La Diavel 1260 S 'Black and Steel' se une a la versión S en color Thrilling Black & Dark Stealth con marco rojo y ruedas negras, estará disponible en los puntos de venta autorizados a partir de septiembre de 2021. La versión estándar está disponible en color Dark Stealth con marco negro y ruedas negras.", "https://images.ctfassets.net/x7j9qwvpvr5s/428z0qmtSQNaR3rpyVwGU9/38c7d210703f384b938745150a9f57fe/DVL-1260-Bl-MY21-Model-Preview-1050x650-v03.png")

const preciosos1 = [ducati5.valor,ducati1.valor,ducati3.valor,ducati6.valor,kawasaki1.valor,kawasaki1.valor,kawasaki3.valor,kawasaki5.valor,kawasaki6.valor]
console.log(preciosos1)
const preciosos2 = [ducati5.modelo,ducati1.modelo,ducati3.modelo,ducati6.modelo,kawasaki1.modelo,kawasaki1.modelo,kawasaki3.modelo,kawasaki5.modelo,kawasaki6.modelo]
const nombres=[...preciosos2]
const intentos=[...preciosos1]
const imagenesMotos=[ducati5.imagen,ducati1.imagen,ducati3.imagen,ducati6.imagen,kawasaki1.imagen,kawasaki1.imagen,kawasaki3.imagen,kawasaki5.imagen,kawasaki6.imagen]
const imagenes=[...imagenesMotos]
localStorage.setItem("nombres", JSON.stringify(nombres))
localStorage.setItem("intentos", JSON.stringify(intentos))
localStorage.setItem("imagenes", JSON.stringify(imagenes))
console.log(intentos)

const intento10={
    ...intentos
}
const intento11={
    ...nombres
}
console.log(intento11[0])
console.log(intento10[2])



const kawas = [kawasaki1, kawasaki3, kawasaki5, kawasaki6, ducati1, ducati3, ducati4, ducati5, ducati6];

const d = document;

//ELEMENTOS DEL SELECTOR//
const catalogoKawas = document.getElementById("modelos");
kawas.forEach((vehiculo) => {
    const option = document.createElement("option");
    option.innerText = `${vehiculo.modelo}`;
    option.value = kawas.indexOf(vehiculo);
    catalogoKawas.append(option);
});

function ventanaSecundaria(URL) {
    window.open(URL, "ventana1", "width=860,height=640,scrollbars=NO")
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
function cotizar(nombre, monto, cuotas, elemento, modeloIngresado) {
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
            Swal.fire({
                title: 'Perfecto!',
                text: 'Lista la cotización!',
                icon: 'success',
                confirmButtonText: 'Ok',
                
        })
            const resultadoFinal = document.getElementById("cotizacionFinal")
            resultadoFinal.innerHTML = `
            <div class="contenedorResultado">
  <p>El monto solicitado es: <span style="font-weight: 600">${formatoPeso.format(datosCotizacion.monto)}</span></p>
  <p>El pago mensual de las cuotas es de: <span style="font-weight: 600">${formatoPeso.format(mensual)}</span></p>
  <p>El pago total será de: <span style="font-weight: 600">${formatoPeso.format(pagoTotalPrestamo)}</span></p>
  <p>El pago total de intereses es de: <span style="font-weight: 600">${formatoPeso.format(interesesTotal)}</span></p>
  </div>
  `

        } else if (datosCotizacion.monto > elemento.valor) {
            console.log("El valor del credito es superior al valor del vehiculo")
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
}
const side_nav= document.getElementById("side_nav")
const toggle= document.getElementById("toggle")
const modelos= document.getElementById("modelos")

toggle.addEventListener("click",()=>{
    side_nav.classList.toggle("active")
})
modelos.addEventListener("change",()=>{
    side_nav.classList.toggle("active")
})
