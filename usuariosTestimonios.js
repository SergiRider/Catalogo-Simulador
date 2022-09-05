const usuario1 = () => {
    const elemento1 = document.getElementById("testimonio1")
    function imagen1() {
        fetch("/testimonios.json")
            .then(res => res.json())
            .then(data => {
    
                elemento1.innerHTML = `
                
                <div class="img-box">
                <img src="${data[0].imagen}" width="100px" class="img-fluid rounded-circle">
                </div>
                <div class="thumb-content animate__animated animate__fadeIn">
                <h4>${data[0].nombre} ${data[0].apellido}</h4>
                <div>
                <p>El ejecutivo me atendió de lujo, me ofreció el mejor credito según mi perfil.</p>
                </div>
            `
            })
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen1())
        }, 1000);
    })
}
const usuario2 = () => {
    const elemento2 = document.getElementById("testimonio2")
    function imagen2() {
        fetch("/testimonios.json")
            .then(res => res.json())
            .then(data => {
                elemento2.innerHTML = `
                 <div class="img-box">
                <img src="${data[1].imagen}" width="100px" class="img-fluid rounded-circle">
                </div>
                <div class="thumb-content animate__animated animate__fadeIn">
                <h4>${data[1].nombre} ${data[1].apellido}</h4>
                <div>
                <p>Luego de años pude comprar la moto de mis sueños, gracias a SG &#128170</p>
                </div>
            `
            })
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen2())
        }, 1100);
    })
}
const usuario3 = () => {
    const elemento3 = document.getElementById("testimonio3")
    function imagen3() {
        fetch("/testimonios.json")
            .then(res => res.json())
            .then(data => {
                elemento3.innerHTML = `
                <div class="img-box">
                <img src="${data[2].imagen}" width="100px" class="img-fluid rounded-circle">
                </div>
                <div class="thumb-content animate__animated animate__fadeIn">
                <h4>${data[2].nombre} ${data[2].apellido}</h4>
                <div>
                <p>He recomendado SG a varies de mis amigues, ahora todes estamos andando en nuestras Ducatis &#128133</p>
                </div>
            `
            })
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen3())
        }, 1200);
    })
}
const usuario4 = () => {
    const elemento4 = document.getElementById("testimonio4")
    function imagen4() {
        fetch("/testimonios.json")
        .then(res => res.json())
        .then(data => {
            elemento4.innerHTML = `
             <div class="img-box">
            <img src="${data[3].imagen}" width="100px" class="img-fluid rounded-circle">
            </div>
            <div class="thumb-content animate__animated animate__fadeIn">
            <h4>${data[3].nombre} ${data[3].apellido}</h4>
            <div>
            <p>La atención fue expedita, en menos de 2 semanas ya me habían entregado mi H2R &#9889</p>
            </div>
        `
        })
}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen4())
        }, 1300);
    })
}
const usuario5 = () => {
    const elemento5 = document.getElementById("testimonio5")
    function imagen5() {
        fetch("/testimonios.json")
        .then(res => res.json())
        .then(data => {
            elemento5.innerHTML = `
             <div class="img-box">
            <img src="${data[4].imagen}" width="100px" class="img-fluid rounded-circle">
            </div>
            <div class="thumb-content animate__animated animate__fadeIn">
            <h4>${data[4].nombre} ${data[4].apellido}</h4>
            <div>
            <p>Al principio tenía mis dudas, pero los ejecutivos me dieron la confianza para comprar mi primera moto &#127949</p>
            </div>
        `
        })
}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen5())
        }, 1000);
    })
}
const usuario6 = () => {
    const elemento6 = document.getElementById("testimonio6")
    function imagen6() {
        fetch("/testimonios.json")
        .then(res => res.json())
        .then(data => {
            elemento6.innerHTML = `
             <div class="img-box">
            <img src="${data[5].imagen}" width="100px" class="img-fluid rounded-circle">
            </div>
            <div class="thumb-content animate__animated animate__fadeIn">
            <h4>${data[5].nombre} ${data[5].apellido}</h4>
            <div>
            <p>"No hagas una venta, haz un cliente", definitivamente tienen mi total fidelidad, volvería a confiar en SG &#128151</p>
            </div>
        `
        })
}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen6())
        }, 1000);
    })
}
const usuario7 = () => {
    const elemento7 = document.getElementById("testimonio7")

    function imagen7() {
        fetch("/testimonios.json")
        .then(res => res.json())
        .then(data => {
            elemento7.innerHTML = `
             <div class="img-box">
            <img src="${data[6].imagen}" width="100px" class="img-fluid rounded-circle">
            </div>
            <div class="thumb-content animate__animated animate__fadeIn">
            <h4>${data[6].nombre} ${data[6].apellido}</h4>
            <div>
            <p>El interés de los creditos es realmente bajo, de fácil acceso para mi bolsillo.</p>
            </div>
        `
        })
}    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen7())
        }, 1000);
    })
}
const usuario8 = () => {
    const elemento8 = document.getElementById("testimonio8")
    function imagen8() {
        fetch("/testimonios.json")
        .then(res => res.json())
        .then(data => {
            elemento8.innerHTML = `
             <div class="img-box">
            <img src="${data[7].imagen}" width="100px" class="img-fluid rounded-circle">
            </div>
            <div class="thumb-content animate__animated animate__fadeIn">
            <h4>${data[7].nombre} ${data[7].apellido}</h4>
            <div>
            <p>Excelente servicio &#11088&#11088&#11088</p>
            </div>
        `
        })
}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen8())
        }, 1000);
    })
}
usuario1()
usuario2()
usuario3()
usuario4()
usuario5()
usuario6()
usuario7()
usuario8()
