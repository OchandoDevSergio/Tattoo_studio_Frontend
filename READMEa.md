# TATTOO STUDIO - Frontend App - Estudio de tatuajes
![image](https://i.ibb.co/jfjnBSq/logo-4.webp)

## Datos generales :paperclip:
**El presente repositorio funciona en conjunto con el repositorio "Tattoo_studio_Backend"

Acceso administrador: 
Correo: sergmar@mail.com  Contraseña: Bb1234

Acceso cliente:
Correo: alcast@mail.com  Contraseña: Aa1234

Acceso artista:
Correo: cemogi@mail.com  Contraseña: Cc1234

## Tecnologías y dependencias
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![NPM](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat)](https://docs.npmjs.com/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat)](https://getbootstrap.com/docs/4.1/getting-started/introduction/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)](https://axios-http.com/docs/intro) [![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)](https://jwt.io/introduction) [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)](https://react.dev/learn) [![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=flat)](https://redux.js.org/introduction/getting-started) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)


## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Vistas :computer:](#vistas) 

- [Funcionamiento :arrow_forward:](#funcionamiento)

- [Errores conocidos :no_entry:](#errores-conocidos) 

- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Propuesto el proyecto de desarrollar una aplicación web para la gestión de un estudio de tatuaje, el presente repositorio supone la sección frontend del mismo. Esta sección habría de constar de una *SPA* (single page application), en la que los usuarios puedan: ver diseños de tatuajes realizados por los artistas del estudio y gestionar sus datos, su perfil y sus citas. Donde los artistas puedan gestionar el portfolio con sus diseños que se muestra y ver las citas que tienen concertadas. Por último donde los administradores puedan gestionar citas y añadir artistas.
Además la aplicación habría de distinguir, con el inicio de sesión, entre un *rol de usuario* cliente, otro de artista y también un rol de administrador, mostrando diferencias en las vistas de la aplicación y permitiendo además en función de esta distinción realizar diferentes cambios en la base de datos.

### Vistas

Todas las vistas se componen de: un cabezal en el que encontramos un botón con el logo del estudio que enlaza a la vista "Home", y distintos botones que varían en función del rol propio del usuario que inicie sesión; un body en el que se presentan las distintas vistas por las que naveguemos y por último un simple pie de página señalando el año del copyright.

Al entrar en la aplicación nos encontramos con la vista **Home**, en la que se nos muestra un carousel con imágenes del estudio para que el visitante pueda ver las instalaciones.

![home](https://i.ibb.co/qFGQ6MF/home.jpg)

La vista **Tattoos** cuenta con un subencabezado con una barra de búsqueda y nos muestra un infinite scroll en el que se contienen todos los diseños de tatuajes que podemos encontrar en los portfolios de los distintos artistas. Si pinchamos en la teajeta de algún diseño, se abrirá un modal que nos mostrará en detalle la imagen del diseño y los datos asociados. Además si introducimos un criterio de búsqueda en la barra del subencabezado, sólo se nos mostrarán aquellos diseños cuyo estilo indexado coincida con el criterio de búsqueda introducido.

![tattoos](https://i.ibb.co/pvyctwG/tattoossearch.jpg)

La vista **Register** nos muestra una serie de inputs a trevés de los cuales podremos introducir nuestros datos y registrarnos como usuario con el rol cliente en la base de datos de la aplicación.

![register](https://i.ibb.co/ZgqCJp3/register.jpg)

La vista **Login** nos solicita nuestras credenciales de usuarios para iniciar sesión.

![login](https://i.ibb.co/M5XtJ8V/login.jpg)

La vista **Admin** muestra a los administradores de la aplicación las opciones a las que tienen acceso privilegiado.

![admin](https://i.ibb.co/tK72x4Z/admin.jpg)

La vista **Newcar** permite a los administradores de la aplicación introducir nuevos vehículos en la base de datos de la misma.

![newcar](https://i.ibb.co/SRtsf61/lntroduce-car.jpg)

La vista **Userslist** muestra tarjetas a los administradores con los datos de todos los usuarios registrados en la base de datos (obviando sus passwords).

![userslist](https://i.ibb.co/gRwZTyj/userslist.jpg)

La vista **Profile** pemrite al usuario registrado, ya tenga el rol de cliente o el de administrador, cambiar los datos que le constan en la base de datos.

![profile](https://i.ibb.co/grTgWgh/profile.jpg)

### Funcionamiento

Se accede a la aplicación a través de la vista "Home", que inicialmente realiza una petición a la base de datos de todos los automóviles que constan en ella y nos los presenta en tarjetas. En el encabezado encontramos un input que nos permite hacer *búsquedas* de conjuntos de automóviles en función de la coincidencia del script introducido con sus marcas y/o modelos, aplicando un *debounce vanilla* para no realizar una búsqueda de cada letra. Además al hacer click sobre alguna tarjeta concreta, los datos del vehículo correspondiente se inscriben en *Redux*, se ejecuta el *método navigate* para cargar la vista "Showcar" en el body y se imprimen los datos del automóvil cargado en Redux en esta nueva vista.

En el encabezado también encontramos enlaces que emplean el método navigate para dirigirnos a las vistas "Register" y "Login".  

En la vista "Register" encontramos una serie de inputs en los que podremos introducir los datos de un nuevo usuario para posteriormente, a través de un botón, llevar a cabo una orden *post* que introduzca esa información en la base de datos, asignándole siempre un rol de cliente para generar un nuevo usuario. 

En la vista "Login" introducimos los credenciales de usuario para iniciar sesión, la aplicación cambia a partir de este punto el botón en el encabezado para registrarnos, sustituyéndolo por uno con nuestro nombre que nos conduciría a la vista "Profile" y también relaciona las credenciales introducidas con su rol asignado en la base de datos, cargando el *token* correspondiente en Redux.

En a vista "Profile" encontramos la posibilidad de cambiar nuestros datos de usuario en la base de datos a través de una orden *put*.

Si nos registramos con las credenciales de un administrador en el encabezado nos aparecerá un nuevo botón que rezará "Admin", al que podemos pinchar para que nos conduzca a una vista desde la que poder seleccionar entre dos opciones: "Add a new car" que cargaría la vista "Newcar" y "Users list" que cargaría la respectiva vista.

En la vista "Newcar" simplemente encontramos unos inputs en los que recoger los datos para enviar una orden post que añada un nuevo automóvil a la base de datos.

En la vista "Userslist" encontramos los datos del conjunto de los usuarios presentes en la base de datos aportados por una orden *get* y presentados en tarjetas.

### Errores conocidos

En la vista showcar desaparecen los datos del coche seleccionado de la tarjeta si se introduce algo en el input de búsqueda del header.

Si para iniciar sesión introducimos unas credenciales incorrectas no indica nada, simplemente no se inicia sesión.

### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://imgbb.com/

https://www.deviantart.com/yllivula/art/Car-Rental-Logo-781819442