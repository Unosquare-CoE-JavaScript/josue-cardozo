## What is an API? 

Es un servidor que usa una interfaz con peticiones HTTP para interactuar con algunos datos. 

## What about REST? 

Es un patrón de diseño para el desarrollo de API. Se enfoca en el trabajo múltiple con recursos de las DB, rutas y verbos HTTP. La forma de manejo de datos es la más básica y casi no generan dependencia entre sí. 

## Node.js and APIs 

Node está enfocada para aplicaciones muy concurridas y que no requieren mucho esfuerzo del CPU. 

## Express 

Es el estándar API marco de trabajo para Node. Se encarga de todo el trabajo tedioso, como el manejo de sockets, enrutamiento, manejo de errores y muchas cosas más. 

## What is Middleware? 

Es una lista de funciones que se ejecutan antes de nuestros controladores. Los mejores esceneraios para los cuales se utilizan Middlewares son: 

	- Para autenticación 

	- Transformar un request 

	- Hacer un seguimiento 

	- Manejo de errores 

## Schemas for a schemasless DB? 

Se usa esquemas para nuestros modelos manejados en mongoDB, con el uso de mongoose esto es mucho más fácil. MongoDB no maneja los esquemas, pero el uso de estos nos facilita el manejo de datos en mongoDB. 

 

## Routes and controllers 

Los controladores son una especie de middleware, que buscan devolver algún tipo de dato. 

Las rutas son os medios por los cuales, nos podemos comunicar con los datos requeridos pasando ciertos tipos de filtros. 

 