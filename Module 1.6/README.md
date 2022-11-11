## NodeJS: advanced Concepts 

Node JS tiene colecciones internas que usa para ejecutar el código que uno escribe. 

- V8: Código libre creado por Google, sirve para ejecutar código Js fuera del buscador. 

- libuv: Código libre basado en C++, que da acceso a node a el sistema operativo y al internet. 

No se usa directamente una de estas colecciones directamente, porque no están basada en JS al 100%, estas tienen un gran porcentaje de C++, así que se usa NodeJs como una interfaz agradable para el desarrollo. 

Como V8 y libuv estan basados en JS y C++, estos tienen que trabajar de manera conjunta, y lo hacen siguiendo un flujo de la siguiente manera: 

- js code: Código fuente basado en JS  

- NodeJS: Librerías usadas en el código fuente 

- process.binding(): Conecta JS con funciones C++ 

- V8: hace el parseo de valores JS y C++ 

- Node C++:  Librería de Node pera ya encontrada en su parte escrita en C++ 

- libuv: Da acceso a Node al sistema operativo. 

Cuando ejecutamos código en NodeJs este crea un solo hilo donde se genera un event loop, que viene a ser el ciclo de vida de JS.  

- Event loop: es algo así como un while loop, que se ejecuta mientras revisa 3 posibles escenarios en los cuales pueda continuar o terminar:	 

- si existen alguna función pendiente (setTimeout, setInterval, setImmediate). 

- si existe alguna operación del sistema pendiente (como un servidor escuchando en un puerto). 

- si existe alguna operación muy larga (como el módulo fs) 

Cada una de estos posibles escenarios son representados como array que almacenan si tiene alguna tarea pendiente. 

Dentro del while loop se revisa cada una de estos arreglos y verifica si ya se pueden ejecutar estas funciones, y cuando ya se termina espera a que alguna tarea pendiente esté lista para ser ejecutada, y finalmente busca manejar eventos de cierre. 

Para resumirlo tomaremos 5 puntos que trabaja todo lo que hay dentro del loop: 

- 1) Node mira las tareas pendientes relacionadas con los timers y ve si las funciones están listas para ser llamadas. (setTimeout, setInterval) 

- 2) Node revisa las tareas pendientes del OS y las operaciones pendientes, para así llamarlas una vez estén listas para ser ejecutadas. 

- 3) Pausa la ejecución cuando: 

- Una nueva tarea pendiente del OS esta lista 

- Una nueva operación pendiente esta lista 

- Un timer esta apunto o ya se completo 

- 4) Mira los timers pendientes y llama a cualquier setImmediate 

- 5) Maneja cualquiera evento de cierre. 

Hablando un poco de que NodeJs es single threaded y limita su capacidad, existen frameworks que no son single threaded. Se tiene que tener bien en cuanta que el event loop es single threaded, pero todo lo que corre fuera de eso puede o no ser single threaded. 

Esto pasa porque JS delega toda la funcionalidad a C++, esto quiere decir que para algunos casos el libuv debe ejecutar algunas tareas fuera del event loop. 

> Review: Todo empieza cuando se lanza el comando Node y lo que se quiere ejecutar, el loop se pregunta si tenesmo tareas aun para hacer, si respondemos con un sí, se ejecutan todas las tareas pendientes y se espera a los puertos en espera, en el caso de que se responda con un no el programa termina. 

## Improving Node Performance 

- Use Node in ‘Cluster’ Mode: conocido como múltiples procesos node que originan de un padre, que viene a ser el clúster manager. El clúster manager es el encargado de monitorear el estado de cada una de las instancias. 

- Use Worker Threads: Usa el mismo pool de thread, para delegar funciones, pero al final las cosas seguirán limitadas por la capacidad de nuestras computadoras. Estor trabajan con una serie de comunicación bidireccional donde se delegan las funciones. 

## Testing 

- Unit Testing: Se enfoca en una parte muy específica del código para ver que funcione de la manera esperada. 

- Integration Testing: Se enfoca en que múltiples unit test funcionen de manera conjunta, dando los resultados esperados. 