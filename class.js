const formatoPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
})


class Vehiculo {
    constructor(marca, modelo, año, cc, valor, color, rendimiento,descripcion) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cc = cc;
        this.valor = valor;
        this.color = color;
        this.rendimiento = rendimiento;
        this.descripcion=descripcion
    }
    
}

const kawasaki1 = new Vehiculo("KAWASAKI", "NINJA 400", "Año: " + 2022, "Cilindrada: "+398, formatoPeso.format(6300000), "COLOR: NEGRO", 4.1,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const kawasaki3 = new Vehiculo("KAWASAKI", "NINJA ZX-6R", "Año: " + 2021,"Cilindrada: "+ 598, formatoPeso.format(12000000), "COLOR: NEGRO", 5.5,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const kawasaki5 = new Vehiculo("KAWASAKI", "NINJA ZX-10R", "Año: " + 2021,"Cilindrada: "+ 998, formatoPeso.format(22000000), "COLOR: NEGRO", 5.9,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const kawasaki6 = new Vehiculo("KAWASAKI", "NINJA H2-R", "Año: " + 2019,"Cilindrada: "+ 998, formatoPeso.format(36000000), "COLOR: NEGRO Espejo", 8.5,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const ducati1 = new Vehiculo("DUCATI", "MONSTER 821", "Año: " + 2020,"Cilindrada: "+ 821, formatoPeso.format(9000000), "COLOR: ROJO DUCATI", 5.2,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const ducati3 = new Vehiculo("DUCATI", "PANIGALE 959", "Año: " + 2020,"Cilindrada: "+ 959, formatoPeso.format(18000000), "COLOR: ROJO DUCATI", 5.6,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const ducati4 = new Vehiculo("DUCATI", "MODELO: PANIGALE v4 S", "Año: " + 2022,"Cilindrada: "+ 1199, formatoPeso.format(32000000), "COLOR: TRI COLOR ITALIANO", 6.9,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const ducati5 = new Vehiculo("DUCATI", "MULTISTRADA V2 S", "Año: " + 2022, 1200, formatoPeso.format(20000000), "COLOR: ROJO DUCATI", 5.9,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const ducati6 = new Vehiculo("DUCATI", "DIAVEL", "Año: " + 2020,"Cilindrada: "+ 1260, formatoPeso.format(30000000), "COLOR: GRIS ARSENICA", 5.4,"Describir es explicar, de manera detallada y ordenada, cómo son las personas, animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar la acción y crear una que haga más creíbles los hechos que se narran.")
const arrayVehiculos = [kawasaki1, kawasaki3, kawasaki5, kawasaki6, ducati1, ducati3, ducati4, ducati5, ducati6];
