const elemento1 = document.getElementById("testimonio1")
const elemento2 = document.getElementById("testimonio2")
const elemento3 = document.getElementById("testimonio3")
const elemento4 = document.getElementById("testimonio4")
const elemento5 = document.getElementById("testimonio5")
const elemento6 = document.getElementById("testimonio6")
const elemento7 = document.getElementById("testimonio7")
const elemento8 = document.getElementById("testimonio8")

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
}
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
const promesa1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen1())
        }, 1000);
    })
}
const promesa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen2())
        }, 1100);
    })
}
const promesa3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen3())
        }, 1200);
    })
}
const promesa4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen4())
        }, 1300);
    })
}
const promesa5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen5())
        }, 1000);
    })
}
const promesa6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen6())
        }, 1000);
    })
}
const promesa7 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen7())
        }, 1000);
    })
}
const promesa8 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imagen8())
        }, 1000);
    })
}
promesa1()
promesa2()
promesa3()
promesa4()
promesa5()
promesa6()
promesa7()
promesa8()

const moonPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
		const sunPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
		const darkMode = document.querySelector("#dark_mode");
		let toggle2 = false;

		darkMode.addEventListener("click", ()=>{
			const timeline = anime.timeline({
				duration : 750,
				easing : "easeOutExpo"
			});
			timeline
			.add({
				targets:".moon",
				d:[{value: toggle2 ? moonPath: sunPath}] //moonPath ->sunpath
			})
			.add({
				targets:'#dark_mode',
				rotate : toggle2? 0 : 320
			},"-=350")
            .add({
				targets: "body",          
				backgroundColor: toggle2 ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle2 ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=750")
            .add({
				targets: "#principal",          
				backgroundColor: toggle2 ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle2 ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=700")
            
            .add({
                targets: ".form-group",
				backgroundColor: toggle2 ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle2 ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=711")
            .add({
                targets: "h5",
				backgroundColor: toggle2 ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle2 ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=711")
			.add({
                targets: ".contenedorDinamico",
				backgroundColor: toggle2 ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle2 ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=711")
            
            .add({
				targets: ".carousel-control-prev i, .carousel-control-next i",
				backgroundColor: toggle2 ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
				color: toggle2 ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
			},"-=750")
           
            
			
			if(!toggle2){
				toggle2 = true;
				$(".noche")
			}else{
				toggle2= false;
				$(".noche")
			}
			
		});