# Are-U-Pwnd-Yet

## DESCRIPCIÓN:
Este proyecto es una plataforma de retos para construir habilidades dentro del área de ciberseguridad (blue team / red team).

Dirigido a estudiantes interesados en temas de seguridad y hacking ético.

Resuelve la necesidad de encontrar retos tipo Capture The Flag (CTF) en los cuales los estudiantes pueden poner a prueba o fortalecer sus habilidades técnicas para explotar vulnerabilidades reales que pueden aparecer en sitios o aplicaciones web de forma ética y segura, sin romper nada en un entorno real (lo cual conlleva consecuencias).


### Enlace a sitio (Vercel)
- [https://are-u-pwnd-yet.vercel.app](https://are-u-pwnd-yet.vercel.app)


---
## CAPTURAS:
### Escritorio
- #### Landing Page (index)

<p align="center">
  <img src="https://github.com/user-attachments/assets/ae09f31a-08dd-442c-9dda-f70471b0e22d" width="48%" />
  <img src="https://github.com/user-attachments/assets/d4b3a76f-7f6b-45db-ae1f-1ab0bd30077f" width="48%" />
</p>

- #### Competencias

- #### Registro

- #### Reto

### Móvil
- #### Landing Page (index)

- #### Competencias

- #### Registro

- #### Reto


## DECISIONES TÉCNICAS:
### Flexbox y Grid
Para el diseño, se utilizó Flexbox en el header para alinear elementos en una sola fila y distribuir los espacios de manera dinámica entre el logo, los enlaces y el botón de alternar tema. También se utilizó en la sección Hero del index para permitir que el texto y la terminal se alineen uno al lado del otro y colapsen de forma fluida si la pantalla se reduce. Además, está presente en header y footer de las tarjetas de los retos mostradas en el catálogo, para que los elementos se posicionen lado a lado de la tarjeta.

El uso de Grid, por otra parte, está en el catalogo de retos, ya que se requería un layout de dos dimensiones, es decir, mostrar las tarjetas en filas y columnas. Con 'auto-fit' y 'minmax', las tarjetas se adaptan al ancho disponible.

### Javascript
El proyecto utiliza Javascript y DOM para controlar tema visual (oscuro, claro), renderizado, filtro y búsqueda de retos, y validación de registro de usuario. 
Las tarjetas se generan dinámicamente desde *js/catalog.js* y se renderizan con un innerHTML, además por medio de event listeners se pueden aplicar filtros según la dificultad (clic en botones de filtro), o buscar según título, descripción o categoría (input de búsqueda y conicidencia de texto).

La validación de registro de usuario *js/validation.js* por su parte, se asegura de que los valores ingresados a los campos del formulario cumplan con las condiciones establecidas, como la longitud del nombre, estructura de correo electrónico válida, y que se haya marcado la casilla de uso ético. Estos datos ingresados son guardados en una constante junto con la fecha de creación. 
Si uno o mas campos son incorrectos, se guardan los errores en un arreglo que luego es mostrado al usuario y en la consola.

<img width="771" height="229" alt="Image" src="https://github.com/user-attachments/assets/35efdd5d-a310-4fa7-91c0-762c238d7e3c" />

 Si los campos son válidos, se envían correctamente y se simula una redirección del usuario a la página de catalogo *competencias.html*.

### Uso de Inteligencia Artificial
El uso de IA en el proyecto se ve reflejado principalmente en el archivo *css/styles.css* con el fin de optimizar tiempo, se realizaron los estilos a partir de las páginas HTML ya existentes, además se dió en prompt la instruccion de en qué secciones utilizar Flexbox y Grid. A partir del resultado generado, se hicieron ajustes en algunos tamaños, padding de los headers de las páginas, cambiar algunos colores, y posteriormente agregar el estilo de las tarjetas de los retos que se muestran en el catálogo.

También hubo uso de IA para ayudar a escribir algunos algoritmos, como por ejemplo los botones de filtro para retos en el catálogo. O por otra parte la forma en que se valida el correo electrónico en el registro.

### Dificultades y Pendientes

Inicialmente se buscaba hacer que en la plataforma se registraran equipos para competir, pero luego se optó por registrar cada usuario de forma individual para simplificar el desarrollo.

Aún se deben agregar retos documentados y con solución (Flag), lo cual se hará posteriormente, al ingresar a un reto del catálogo se muestra un mensaje, avisando al usuario de que el reto estará disponible próximamente.

Está pendiente el desarrollo de un top o podio de usuarios con mayor puntuación registrados en la plataforma.

