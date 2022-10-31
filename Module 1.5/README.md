# **Unit Testing and Test Driven Development in NodeJS**

1. [**What is Unit Testing?**](#1-what-is-unit-testing)
2. [**What is Test-Driven Development**](#2-what-is-test-driven-development)
3. [**Mocha and chai**](#3-mocha-and-chai)
4. [**chai palabras reservadas**](#4-chai-palabras-reservadas-assert)


---
### **1. What is Unit Testing?**
Viene a ser la validación más baja de lo que es el testing. Unit test se encarga de la validación de componentes o funciones simples al momento de desarrollar una aplicación, toma en cuenta casos en los cuales debe funcionar y casos en los cuales no funciona. 

    - Unit tests son la primera capa de seguridad que se puede dar a una aplicación mientras está en producción. 

    - Unit test valida test cases para funciones individuales. 

    - Estos son ejecutados y probados en el entorno de desarrollo. 

    - Son caracterizados por ser pruebas rapidas.
---
### **2. What is Test-Driven Development?**
TDD viene a ser una práctica que se aplica para poder entregar código de mejor calidad, consiste en pensar y escribir las pruebas de lo que se va a desempeñar, y luego escribir el código que pase la prueba que se planteó al principio: una vez realizado esto se busca refactorizar el código. 

	- Proceso en el cual el desarrollador toma responsabilidad por la calidad de código que entregara. 

	- Unit tests son escritos antes de escribir el código. 

	- No se escriben todos los test a la primera, ni el código de producción, todo tiene que seguir una secuencia lógica. 

	- Tests y código de producción son escritos de manera conjunta en porciones pequeñas. 

TDD sigue un flujo de trabajo, el cual es: 

	- Red: Escribir un unit test que falle. 

	- Green: Escribir código de producción, para que pase el unit test previo. 

	- Refactor: Refactorizar el unit test y el código de producción para hacerlo de manera más limpia, y repetir el flujo hasta que la funcionalidad este completa. 

Existen reglas a seguir para elaborar TDD: 

	- No escribirás código de producción hasta que escribas un unit test que falle. 

	- No escribirás más de un unit test que sea suficiente para que falle, y si no compila es una falla. 

	- No escribirás más código de producción que sea suficiente para pasar el unit test actual. 

 ---
 ### **3. Mocha and Chai**
- Mocha: 

    - Unit testing framework para JS que funciona también para NodeJS 
    - Funciona como una API para testing que trabaja conjunto al comportamiento para ayudar a la escritura y descripción de los unit test. 
    - Provee hook s para ejecutar el código antes y después de cada test individual o suites of tests. 
    - Provee una forma de hacer testeo asyncrono haciendo uso de promesas. 
    - Tiene parámetros como líneas de comandos, que ayudan a saber que test se está ejecutando y en qué orden. 
- Chai 
	- Es una librerías de aciertos que corre en NodeJs y así también en el browser. 
	- Como Mocha, Chai implementa un APi para especificar lo que espera obtener de un unit test. 
	- También provee una APi para la forma más clásica del TDD que se enfoca en los asserts. 
	- Funciona de una manera enfocada en el comportamiento donde busca esperar un resultado y lo valida con otro valor, para así llegar al assert querido. 

> Note: "Test Suites" son test agrupados similares que estan enfocados a testear una funcionalidad en particular.
---
 ### **4. Chai palabras reservadas (Assert)**
	- types
		- istrue
		- isNaN
		- exists
		- isArray
		- equal
		- isString
		- property
		- throws
	- BDD
		- should.//something
	- chains
		- to
		- be
		- been
		- is
		- that
		- which
		- has
		- have
		- with
		- at
		- of
		- same
		- but
		-does 
