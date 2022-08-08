const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})

class Vehiculo {
    constructor(marca, modelo, año, cc, valor, color, rendimiento,descripcion,imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cc = cc;
        this.valor = valor;
        this.color = color;
        this.rendimiento = rendimiento;
        this.descripcion=descripcion;
        this.imagen=imagen;
    }
}

const kawasaki1 = new Vehiculo("KAWASAKI", "NINJA 400", "Año: " + 2022, "Cilindrada: "+398, 6300000, "COLOR: NEGRO", 4.1,"La Ninja® 400 2020 de Kawasaki ofrece la mayor cilindrada de su categoría con 399 cc con la sofisticación de la potencia de dos cilindros. El rendimiento deportivo, la excelente ergonomía y el manejo ligero ofrecen una conducción suave y manejable que atrae a distintos pilotos por su rendimiento deportivo de alta velocidad. Los bajos asientos, el agresivo estilo moderno de la carrocería y los faros LED hacen de la Ninja 400 la elección ideal para los pilotos que buscan entrar en el mundo deportivo.", "https://kawasaki.melhuish.cl/wp-content/uploads/2020/02/400-blanca-lado.jpg")
const kawasaki3 = new Vehiculo("KAWASAKI", "NINJA ZX-6R", "Año: " + 2021,"Cilindrada: "+ 598, 12000000, "COLOR: NEGRO", 5.5,"La Kawasaki Ninja ZX-6R es la deportiva de altas prestaciones que en encuadra en la categoría supersport. Ofrece un uso dual, carretera/circuito, para los que quieren disfrutar del radical espíritu Ninja con un motor de 636 cc que ofrece una potencia máxima de 130 CV. Hereda mucho de la descatalogada Ninja ZX-6R 636 pero está dotada de la más moderna tecnología y de una apariencia inspirada en la todopoderosa ZX-10R.", "https://www.mundomotero.com/wp-content/uploads/2018/10/Kawasaki-ZX-6R-2019.jpg")
const kawasaki5 = new Vehiculo("KAWASAKI", "NINJA ZX-10R", "Año: " + 2021,"Cilindrada: "+ 998, 22000000, "COLOR: NEGRO", 5.9,"Un motor de 998 cc, un manejo excepcional y un estilo agresivo se combinan con una sofisticada electrónica de última generación para hacer que la Ninja ZX-10R ABS esté lista para las carreras o la conducción en la calle. Frenos Brembo® de última generación y control de tracción Kawasaki Sport.", "https://www.motofichas.com/images/phocagallery/Kawasaki/ninja-zx-10r-2021/01-kawasaki-zx-10r-2021-estudio-verde.jpg")
const kawasaki6 = new Vehiculo("KAWASAKI", "NINJA H2-R", "Año: " + 2019,"Cilindrada: "+ 998, 36000000, "COLOR: NEGRO Espejo", 8.5,"El desarrollo de la Ninja H2™R de Kawasaki supera los límites de cualquier otra motocicleta Kawasaki. Al exhibir un potente motor de cuatro cilindros en línea de 998 cc, electrónica de última generación y los últimos frenos Brembo®, la única motocicleta hiperdeportiva sobrealimentada de producción limitada del mundo representa la cúspide de la ingeniería de Kawasaki. Con asombrosa aceleración y una velocidad máxima alucinante solo apta para circuitos, la Ninja H2R ofrece la experiencia más estimulante sobre dos ruedas..", "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/10/Kawasaki-Ninja-H2R-2019-05-1200x900.jpg")
/*
const ducati1 = new Vehiculo("DUCATI", "MONSTER 821", "Año: " + 2020,"Cilindrada: "+ 821, formatoPeso.format(9000000), "COLOR: ROJO DUCATI", 5.2,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.", "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/10/Kawasaki-Ninja-H2R-2019-05-1200x900.jpg")
const ducati3 = new Vehiculo("DUCATI", "PANIGALE 959", "Año: " + 2020,"Cilindrada: "+ 959, formatoPeso.format(18000000), "COLOR: ROJO DUCATI", 5.6,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.", "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/10/Kawasaki-Ninja-H2R-2019-05-1200x900.jpg")
const ducati4 = new Vehiculo("DUCATI", "MODELO: PANIGALE v4 S", "Año: " + 2022,"Cilindrada: "+ 1199, formatoPeso.format(32000000), "COLOR: TRI COLOR ITALIANO", 6.9,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.", "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/10/Kawasaki-Ninja-H2R-2019-05-1200x900.jpg")
const ducati5 = new Vehiculo("DUCATI", "MULTISTRADA V2 S", "Año: " + 2022, 1200, formatoPeso.format(20000000), "COLOR: ROJO DUCATI", 5.9,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.", "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/10/Kawasaki-Ninja-H2R-2019-05-1200x900.jpg")
const ducati6 = new Vehiculo("DUCATI", "DIAVEL", "Año: " + 2020,"Cilindrada: "+ 1260, formatoPeso.format(30000000), "COLOR: GRIS ARSENICA", 5.4,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.", "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2018/10/Kawasaki-Ninja-H2R-2019-05-1200x900.jpg")
const ducatistas = [ducati1, ducati3, ducati4, ducati5, ducati6]
*/

const kawas = [kawasaki1, kawasaki3, kawasaki5, kawasaki6 ];
const d = document;

//ELEMENTOS DEL SELECTOR//
const catalogoKawas = document.getElementById("modelos");
kawas.forEach((vehiculo) => {
  const option = document.createElement("option");
  option.innerText = `${vehiculo.modelo}`;
  option.value = kawas.indexOf(vehiculo);
  catalogoKawas.append(option);

});