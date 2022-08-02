    // BUSCAR VEHICULO POR MODELO
    function busquedaPorModelo() {
        let ingresado = (prompt("Modelo que buscas \n(Si quieres revisar todo el catalogo, solo apreta 'aceptar')")).toUpperCase()

        const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(ingresado));
        console.log(modeloIngresado)
        console.log("Total de vehiculos encontrados: " + modeloIngresado.length)

        for (const vehiculo of modeloIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo)

        }
    }
    function busquedaPorAño(mensaje) {
        let ingresado = parseFloat(prompt(mensaje))
        while (isNaN(ingresado)||ingresado<0){
            ingresado=parseFloat(prompt(`Fecha incorrecta, ${mensaje}\nContamos con modelos de los siguientes años:\n-2018\n-2020\n-2021\n-2022`))
        }
        const añoIngresado = arrayVehiculos.filter(vehiculo => vehiculo.año.includes(ingresado));
        console.log(añoIngresado)
        console.log("Total de vehiculos encontrados: " + añoIngresado.length)

        for (const vehiculo of añoIngresado) {
            console.log("-" + vehiculo.modelo + " año " + vehiculo.año)
        }
        }
    
    //BUSCAR VEHICULO POR CC
    function busquedaMayorCc(mensaje) {
        let valor = prompt(mensaje)
        while(isNaN(valor)||valor<0||valor==""){
            valor=parseFloat(prompt("Numero invalido.\n"+mensaje))
        }
        const ccIngresado = arrayVehiculos.filter(vehiculo => vehiculo.cc >= valor);
        console.log(ccIngresado)
        console.log("Total de vehiculos encontrados: " + ccIngresado.length)

        for (const vehiculo of ccIngresado) {
            console.log("-" + vehiculo.modelo + " con " + vehiculo.cc + "cc")
        }
    }
    function busquedaMenorCc(mensaje) {
        let valor = parseFloat(prompt(mensaje))
        while(isNaN(valor)||valor<0||valor==""){
            valor=parseFloat(prompt("Numero invalido.\n"+mensaje))
        }
        const ccIngresado = arrayVehiculos.filter(vehiculo => vehiculo.cc <= valor);
        console.log(ccIngresado)
        console.log("Total de vehiculos encontrados: " + ccIngresado.length)

        for (const vehiculo of ccIngresado) {
            console.log("-" + vehiculo.modelo + " con " + vehiculo.cc + "cc")
        }
    }
    //BUSQUEDA POR PRECIO
    function busquedaMayorPrecio(mensaje) {
        let valor = parseFloat(prompt(mensaje))
        while(isNaN(valor) ||valor<0||valor==""){
            valor=parseFloat(prompt("Ingrese un número valido.\n"+mensaje))
        }

        const precioIngresado = arrayVehiculos.filter(vehiculo => vehiculo.valor >= valor);
        console.log(precioIngresado)
        console.log("Total de vehiculos encontrados: " + precioIngresado.length)

        for (const vehiculo of precioIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + "\n Precio: $" + vehiculo.valor)
        }
    }
    function busquedaMenorPrecio(mensaje) {
        let valor = parseFloat(prompt(mensaje))
        while(isNaN(valor)||valor==""||valor<0){
            valor=parseFloat(prompt("Ingrese un número valido.\n"+mensaje))
        }
        const precioIngresado = arrayVehiculos.filter(vehiculo => vehiculo.valor <= valor);
        console.log(precioIngresado)
        console.log("Total de vehiculos encontrados: " + precioIngresado.length)

        for (const vehiculo of precioIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + "\n Precio: $" + vehiculo.valor)
        }
    }
    function busquedaPorConsumo() {
        let ingresado = (prompt("Modelo que buscas")).toUpperCase()
        const modeloIngresado = arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(ingresado));
        console.log(modeloIngresado)
        console.log("Total de vehiculos encontrados para modelo: " + ingresado + " " + modeloIngresado.length)

        for (const vehiculo of modeloIngresado) {
            console.log("-" + vehiculo.marca + " " + vehiculo.modelo + " " + calculoRendimiento(100, vehiculo.rendimiento) + "Km/L")
        }
    }
    //BUSQUEDA POR COLOR
    function busquedaPorColor() {
        let ingresado = (prompt("Tenemos los siguientes colores:\n-Negro\n-Blanco\n-Rojo Ducati\n-Verde\n-Tri Color Italia\n-Negro Espejo\n-Gris Arsenica")).toUpperCase()
        const colorIngresado = arrayVehiculos.filter(vehiculo => vehiculo.color.includes(ingresado));
        console.log(colorIngresado)
        console.log("Total de vehiculos encontrados: " + colorIngresado.length)

        for (const vehiculo of colorIngresado) {
            console.log("-" + vehiculo.modelo + " " + vehiculo.color)
        }
    }
