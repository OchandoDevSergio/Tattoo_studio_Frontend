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

La vista **Profile** varía en función del rol de las credenciales con las que el usuario haya iniciado sesión. Si se trata de un administrador o un artista, se mostrarán una serie de inputs para cambiar la información de usuario en la base de datos. En cambio si se trata de un cliente, nos dará también la opción de acceder a una vista desde la que introducir nuestros datos de pago, o modificarlos si es que ya existen en la base de datos.

![profile](https://i.ibb.co/nkpsWSp/profile.jpg)

La vista **Appointments** varía en función del rol de las credenciales con las que el usuario haya iniciado sesión. Si se trata de un artista, simplemente se nos mostrará un infinite scroll con las distintas citas que se hayan concertado con él, ampliando sus tarjetas en un modal si se hace click sobre las mismas. En cambio si se trata de un cliente o administrador también nos aparecerá un subencabezado con un botón, que al hacer click nos conducirá a otra vista desde la que concertar una cita. Además tanto clientes como administradores tienen la opción de eliminar citas en el modal que emerge al hacer click sobre la tarjeta de una cita.

![appointments](https://i.ibb.co/xzHMzJJ/appointments.jpg)

![appointmentsadd](https://i.ibb.co/6nmZ14g/appointmentsaddcustomer.jpg)

La vista **Portfolio** es sólo accesible para los artistas y muestra un subencabezado con el nombre del artista y un botón que al pinchar conduce a otra vista desde la que añadir diseños asociados al artista en la base de datos. Bajo el subencabezado se nos presenta un infinite scroll con los diseños del artista, en los que podemos pinchar para que nos aparezca un modal en detalle, desde el que además podemos eliminarlos de la base de datos.

![portfolio](https://i.ibb.co/kmnMgP2/portfolio.jpg)

La vista **Admin** sólo accesible para usuarios registrados con el rol de administrador, nos muestra: un subencabezado con la opción de desplazarnos a otra vista desde la que añadir nuevos usuarios a la base de datos que compartan el rol de administrador; así como un infinite scroll con tarjetas en que se muestran las fichas de todos los usuarios existentes en la base de datos. Además cueando esas fichas corresponden a un usuario con el rol de cliente, nos presenta la opción de añadirle una ficha de artista y cambiar su rol, a través de un modal.

![admin](https://i.ibb.co/ftbfJt0/admin.jpg)

### Funcionamiento

Para el desarrollo de la aplicación se ha seguido un patrón de arquitectura de software *Modelo Vista Controlador*. Al acceder a la aplicación se cargan 3 elementos: siendo el que aparece en una posición superior un elemento común "Header", que consiste en un encabezado reactivo a si se ha iniciado sesión y el rol de usuario correspondiente; en posición intermedia un "Body" en el que se van cargando las distinatas vistas por las que vamos navegando y finalmente un "footer" estático.

En el encabezado encontramos un botón que emplea la funcionalidad *useNavigate* para dirigirnos a la vista Home y una serie de botones adicionales que varían dependiendo del rol. Si no hemos iniciado sesión los botones serán TATTOOS, LOG IN y REGISTER, conduciéndonos cada uno a sus respectivas vistas; si hemos iniciado sesión con el rol *customer* (cliente), se mantiene el botón TATTOOS, se añade APPOINTMENTS para conducirnos a la respectiva vista, se sustituye REGISTER por un botón con el nombre del usuario importado de *Redux* que nos conduce a la vista profile y también se sustituye LOG IN por LOG OUT que cerraría sesión. Si hemos iniciado sesión con el rol *artist* (artista), además de la configuración del encabezado para clientes, aparece PORTFOLIO que nos conduciría a la respectiva vista. Por último si hemos iniciado sesión con el rol *administrator* (administrador), además de la configuración del encabezado para clientes, aparece ADMIN que nos conduciría a la respectiva vista.

La vista Home funciona con un **Carousel** importado de *react-bootstrap* en el que se han realizado las modificaciones pertinentes para adaptarlo a las prestaciones y la estética deseada.

La vista Tattoos funciona con un *hook* del tipo *useEffect* que contiene un condicional vinculado a la barra de búsqueda del subencabezado. Cuando la barra de búsqueda se encuentra vacía (como sucede al entrar en la vista), se acciona una llamada a la base de datos que traería todos los diseños que constan en ella. Cuando por el contrario se ha introducido un criterio de búsqueda en la barra se acciona un **debounce** (desarrollado en JS vanilla con un *setTimeout*) y se procede con una llamada a la base de datos que traería todos los diseños cuyo campo "style" coincida con el criterio de búsqueda introducido, aunque éste no suponga el *string* completo que haya en el campo "style" de la tabla diseños. Cabe señalar que estas llamadas a la base de datos son **llamadas multitabla**, que vinculan el *id* del artista de la tabla "designs", con el id de la tabla "artists" para traernos todos los datos que queremos mostrar en pantalla de cada diseño. Cada vez que se recibe un conjunto de diseños, se realiza un *.map* y se presentan los diseños en un **infinite scroll** (importado de react y modificado estética y funcionalmente), a través de unas tarjetas. Estas tarjetas son un elemento común que al hacer click sobre ellas desplegará un **modal** importado de react-bootstrap para mostrar en detalle el diseño.

La vista Register funciona haciendo un **bind** de los valores que introducimos en unos elementos comunes del tipo *input* con los valores respectivos de un body que mandaremos con la llamada a la base de datos para registrar un usuario. Para asegurarnos de que sólo se puedan registrar usuarios con el rol cliente a través de este método, en el body se ha establecido como constante el parámetro "role_id". Además una funcionalidad exige que los strings introducidos en los inputs de contraseña y repetir contraseña sean idénticos para poder generar el usuario.

La vista Log in funciona solicitando los credenciales de correo electrónico y contraseña para hacer una llamada a la base de datos que devuelva el *token* pertinente. Una vez obtenido este token, se envía junto a la información del usuario que ha iniciado sesión (decodificada por *JsonWebToken*) a redux con el empleo de *useDispatch*, para que posteriormente en las distintas vistas y en el encabezado se haga uso de esa información, gracias a la función pertinente del *userSlice* que la recuperaría.

La vista profile funciona importando de redux los datos del usuario cuya sesión se encuentra iniciada, para rellenar un body con el que modificar los datos de tal usuario, pudiéndose modificar éstos por inputs vinvulados a los mismos (excepto por supuesto user_id y role_id que son constantes). Además, en caso de haber iniciado sesión con el rol de cliente, se buscará si existe en la base de datos una entrada en la tabla "paymentdatas" vinculada al id de usuario y de no ser así se permitirá navegar a una vista desde la que generarla o modificarla en caso de que sí exista.

La vista appointments funciona importando de redux los datos del usuario cuya sesión se encuentra iniciada, para realizar distintas llamadas a la base de datos. En todos los casos serán llamadas multitabla que contendrán información de las tablas "appointments", "artists" y "users". Los resultados de la llamada se mostrarán en un inifinite scroll a través de tarjetas. Pero cuando el usuario que accede tiene el rol de artista sólo devolverá los appointments en los que el artist coincida con él. Cuando el usuario que accede sea un administrador le aparecerán todos los appointments y además la posibilidad de acceder a otra vista desde la que puede generar nuevos appointments, introduciendo manualmente el id de artista y el id de usuario del cliente. Por último cuando el usuario que accede tiene el rol de cliente, sólo le devolverá los appointments en que el user_id coincida con el suyo y además podrá también acceder a la vista de generación de nuevos appointments pero en este caso se tomará de redux su id y se presentará, en un *dropdown* diseñado en JS vanilla, los nombres de los artistas en la base de datos para que se seleccione el adecuado; simulando además que se realizaría un pago en concepto de fianza por la cita, mostrando en pantalla los datos de pago vinculados al cliente en la base de datos y solicitando el CVC o CVV.

La vista portfolio funciona importando de redux los datos del usuario que ha iniciado sesión, para hacer una llamada multitabla a la base de datos que traiga los diseños asociados al artista para mostrarlos en un infinite scroll a través de trajetas que al hacer click nos muestren un modal desde el que se nos brinda la opción de eliminar el diseño de la base de datos. Para hacer esta eliminación emergería un segundo modal pidiendo una confirmación, que si se concede elimanría el diseño y llamaría de nuevo a la base de datos para actualizar los diseños mostrados. Además se presenta un subencabezado con el nombre del artista y la opción de acceder a otra vista desde la que añadir diseños con el artist_id del usuario que ha iniciado sesión.

Por último, la vista admin funciona haciendo una llamada a la base de datos que traiga los datos de todos los usuarios registrados, mostrándolos en tarjetas en un infinite scroll. En las tarjetas de los usuarios con el rol de cliente aparece un botón que abriría un modal para añadir a la base de datos un artista con el user_id de la tarjeta seleccionada. Además en el subencabezado se presenta la posibilidad de acceder a otra vista desde la que añadir usuarios a la base de datos que también tengan el rol de administrador.

Todas las vistas cuentan con funcionalidades para a través de useNavigate enviar al usuario a la vista home si no se dispone del rol requerido en la vista en la que se encuentra.

### Errores conocidos

-Si para iniciar sesión introducimos unas credenciales incorrectas no indica nada, simplemente no se inicia sesión.

-Al generar diferentes artistas y diferenciarlos a través de su nombre de pila en los appointments, se pueden repetir estos nombres. Podría haberse introducido un campo de nombre artístico o apodo para distinguirlos en la tabla de artistas de la base de datos.

-Al ser un proyecto didáctico appointmentadd para el rol de cliente no conduce a una pasarela de pago.

### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://imgbb.com/
