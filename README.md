# Catalogo-Simulador
Catalogo Simulador es un programa que permite visualizar desde un catálogo diversos productos y se entrega 
la posibilidad de simular un credito de consumo para dicho producto.

El index.HTML es el archivo principal que se irá modificando dinamicamente desde el archivo funcionPrincipal.js, usuariosTestimonios.js y class.js

class.js aloja la información de los productos y algunas funcionalidades que utiliza la página para alojar en localStorage
funcionPrincipal.js aloja el código para manipular el DOM y reflejar la información requerida del usuario. 
usuariosTestimonios.js muestra en el apartado de carusel del HTML a diversos usuarios con sus testimonios sobre la pagina (se recopiló data de la API "getRandomUser" 
y se alojó de manera local para evitar problemas de consumo) y alojados en testimonios.json

De manera accesoria se incorporó un segundo HTML llamado descuentos.HTML que muestra posibles descuentos en ciertos productos que se muestran 
de manera randomizada bajo el archivo descuentos.js

Se utilizó el consumo además de la API EmailJs para hacer uso del sistema de envío de plantilla de correos mediante un formulario para así simular la interacción
entre usuario y compañía de credito de consumo o envíar sus consultas.
