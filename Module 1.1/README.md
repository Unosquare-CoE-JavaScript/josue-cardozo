# **You Don’t Know JS Yet: Get Started**
## **Summary by Chapter**

1. [**What Is JavaScript**](#1-what-is-javascript)
2. [**Surveying JS**](#2-surveying-js)
3. [**Digging to the Roots of JS**](#3-digging-to-the-roots-of-js)
4. [**The Bigger Picture**](#4-the-bigger-picture)
5. [**Appendix A: Exploring Further**](#5-appendix-a-exploring-further)
6. [**Appendix B: Practice, Practice, Practice**](#6-appendix-b-practice-practice-practice)


---
### **1. What Is JavaScript**

En JS existen 3 grandes pilares, los cuales son: scope/closures, prototypes/objects, and types/coercion. JS tiene múltiples formas de uso y capacidades, las cuales se fundamenta en estos 3 grandes pilares de los cuales se hablará más a profundidad en el capítulo 4. 

JavaScript viene a ser un lenguaje de programación desarrollado por Netscape en la década de los 90s. El lenguaje guarda cierta relación con Java y con el script, siendo así una forma de decir que dicho lenguaje es una forma de decir que todo lo que se desarrolla con este lenguaje de programación es de alguna manera más liviano. 

JavaScript esta especificado por el ECMAScript y a su vez está regulado por el TC39. Dejando en claro que estos términos no definen en todo su esplendor a lo que es JS sino herramientas que ayudan a su regulación y documentación debida. 

> ECMAScript: Especificación de lenguaje de scripting en la que se basa JS, que a su vez esta estandarizado por ECMA international. 

> TC39: Grupo de desarrolladores que se encarga de revisar ca nueva propuesta y el cumplimiento de los estándares. 

JS puede ser tomado de múltiples caras como ser que se puede implementar Object Oriented, de manera procedural y funcional. Existen ciertas restricciones al momento de hablar de versiones o de nuevas mejoras ya que JS no es Forward-Compatible pero al contrario si es Backward-Compatible, esto quiere decir que nuevas versiones de ECMAScript son compatibles con versiones pasadas, al contrario de las viejas versiones no son compatibles con las nuevas. 

La forma con la cual logra hacer compatible código nuevo con código antiguo es usando un transpilador ya sea uno externo como Babel u otro interno, esto lo que hace es convertir la sintaxis nueva a una sintaxis equivalente, pero de una versión más pasada. 

JS trabaja de la siguiente manera para que esta pueda ser entendido y ejecutado por la maquina donde se lo quiere ejecutar. Una vez terminado de ser escrito el código este pasa a ser transpilado y empacado por el WebPack, para así poder ser traducido en un árbol de sintaxis abstracto, luego teniendo el árbol estructurado este es traducido a un intermediario binario para que dé último paso pueda ser ejecutado por la máquina virtual que maneja JS. 

> Note: JS es un lenguaje compilado, porque procesa y verifica el programa antes de ejecutarlo. 

Una de las ventajas que existe en JS es usar variables sin previamente declararlas, pero esto apunta a más problemas al momento de ejecutar, es por eso que existe “use strict”;. Este conjunto de palabras reservadas indica que se hará la revisión previa de todo el código para ciertos estándares como declarar variables, no repetir nombres de funciones, etc. 

 > Note: JS es la implementación de los estándares de ECMAScript, que este guiado por el TC39, la cual puede correr en buscadores y otros entornos de JS, por lo cual también es válido decir que JS es un Multi-Paradigm language, esto quiere decir que te deja la interacción entre varios paradigmas como ser el Object-Oriented y la funcional. 

---
### **2. Surveying JS**

* Each File is a Program 

Un archivo .js es considerado como un programa que puede ejecutarse de manera independiente, esto no quiere decir que no pueda depender de otro archivo .js, o como se lo describe en el presente libro “Modulo”. 

* Values 

Es la forma fundamental de manejar los datos en la aplicación, o para mantener ciertos estados al momento de programar. Los cuales son: 

	- Primitivos				- Objetos 

		- Numbers				- Arreglos 

		- Strings				- Objetos 

		- Boleans 

		- Undefined 

		- Symbol 

* Declaring and Using Variables 

	- var : Deja declarar una variable para ser usada en esta porción de código, y puede o no tener un valor inicial. 

	- let : Deja declarar una variable para ser usada, pero en un contexto más reducido al que tiene el var, este es conocido como block-scoped y puede o no tener un valor inicial. 

	- const : Deja declarar una variable para ser usada en el mismo contexto que usa la palabra reservada let, a diferencia del let este si o si necesita un valor inicial. Esta palabra inicial no permite la reasignación de valores, pero si admite la mutación del valor en cuestión. 

	- Parametro : Deja declara una variable al momento de usar una función o clase, para así hacer referencia al valor con el cual trabajara esta función. 

* Functions 

Una función viene a ser un procedimiento enfocado a desarrollar alguna tarea, el cual puede ser invocado una o muchas ves. Para hacer la declaración de una función se usa la palabra reservada “function” seguida de un nombre y los parámetros con los cuales puede o no necesitar. 

> Nota: Actualmente las funciones pueden ser asignada a variables y así también a Key dentro de objetos. 

* Equal...ish 

Existen 2 formas de verificar la igualdad de valores en JS: 

	- ==: esta de aquí permite la coerción de tipos, ya que esta solo valida los valores en si sin tomar en cuenta el tipo. 

	- ===: esta otra se enfoca en el tipo y en el valor de las variables en cuestión que se quieren comparar. 

> Nota: Al momento de hacer la comparación de Objetos, se tiene que tener especial cuidado ya que ningún objeto es igual a otro a menos que se haga una referencia directa al mismo objeto. 

* How we Organize in JS 

	- Clases: En ECMAScript del 2015 fue cuando se introdujeron las clases a JS, desde entonces se puede hacer uso de la palabra reservada “class” para crear una nueva clase con un constructor y sus métodos correspondientes. Al hacer la implementación de las clases en JS también metieron lo que es la POO donde también metieron las palabras reservadas “extends”, que hace referencia a que la clase en cuestión heredara los atributos de la clase padre, “super”, que sirve para hacer referencia a la clase padre. 

	- Modulos:  En lo personal son la forma de trabajar con una programación más estructurada, y existen 2 formas de trabajarlos: 

		- Classic Modules: Donde tenemos un conjunto de funciones que trabajan entre sí para formar todo un sistema que se enfoque en un solo propósito, y se simula las propiedades basicas de una clase. 

		- ES Modules: donde todo esta separa por archivos .js donde cada archivo viene a ser un módulo enfocado a desempeñar una sola función en específico, y para que puedan trabajar entre si se usan los “exports” y los “imports” 

---
### **3. Digging to the Roots of JS**

* Iteration 

La idea básica de la iteración es recorrer una estructura dado un valor o varios valores con los cuales se desea trabajar, para eso fue que en ES6 se define next(), que simplifica la forma de hacer referencia a el siguiente valor dentro de un iterable. Existen múltiples maneras de recorrer estructuras de datos como ser:  

	- for … of 
    for (let a of b)  
    {…}

    - Spread … 
        var b = [...c]; 
        console.log(...c);

* Closure 

Es la forma por la cual una función recuerda y tiene acceso a variables fuera de su entorno, esto también es conocido como el contexto bajo el cual algo está siendo ejecutado. 

* “this” Keyword 

La palabra reservada “this” hace referencia a el contexto baja el cual una función está trabajando; el contexto estará definido bajo quien hizo el llamado de dicha función, es por eso que de esta forma se tiene una forma de acceso a esta variable fuera del contexto. 

* Prototypes 

Está enfocado en el patrón de diseño que lleva el mismo nombre, que la ide principal de este es crear objetos tomando otros como modelos, así de esta manera crear algún tipo unión entre estos para aumentar sus características base. Cuando un objeto es creado siendo referencia a otro este no modifica los valores iniciales del padre, ya que este no hace referencia al mismo espacio de memoria.

---
### **4. The Bigger Picture**

* Pillar 1: Scope and Closure 

Los scopes vienen a ser áreas donde una variable o una función es válida. Cada escope puede o no estar anidado uno dentro de otro, dando así accesibilidad a las variables y funciones con las cuales estas trabajan, pero existen ciertas restricciones lógicas ya que un scope que este dentro de otro más grande puede acceder a sus variables y funciones, pero no al contrario. 

La asignación de scopes a cada variable se hace en una compilación previa a la ejecución, también conocida como hoisting, donde se pueden distinguir dos tipos de scopes, uno el function-scope donde están declaradas todas las variables de tipo “var” y el otro el block-scope donde entran las declaraciones de “var y let”. 

> Closure: mejor comprendido como la interacción que existe entre scopes, la facilidad que ofrece de acceder a variables fuera del scope sin que exista ningún cambio a su entorno. 

> Hoisting: mecanismo que lee el código sin ejecutarlo, busca obtener declaraciones del código y asignar variables a su respectivo scope. 

* Pillar 2: Prototypes 

Viene a ser una forma más sencilla de generar algo como una herencia entre clases, solo que en este entorno no se llama herencia, se llama delegar. Prototype viene a ser un patrón de diseño, que se enfoca en crear objetos usando otros como modelo, es por esto que existe la delegación de funcionalidades que existen al momento de usar objetos.  

* Pillar 3: Types and Coercion 

Los tipos y la coerción en JS, vienen las partes menos valoradas de JS ya que no llegan a enfocar del todo su atención en estas. Se tiene que pensar de la siguiente manera, si no se tiene un buen fundamento de como los tipos funcionan, el proyecto en el que se esté trabajando puede llegar a hacer nada útil. 

> Coercion: Forma en la cual JS infiere los tipos con los cuales va a trabajar ciertos tipos de expresiones y funciones, para evitar errores en el tipo de dato con el que se espera trabajar.

--- 
### **5. Appendix A: Exploring Further**

* Values vs. References 

Un valor viene a ser un dato almacenado en un espacio de memoria, al cual se pueden acceder por las variables que sirven como referencia para poder acceder a estos. Se puede crear nuevas variables que hagan referencia al mismo espacio de memoria o que creen una copia del mismo espacio de memoria. 

Al momento de hacer uso de Objetos es donde es más notable que asignar un objeto a una nueva variable no genera una copia fiel de objeto, si no que crea una referencia al mismo espacio de memoria; lo que quiere decir que si se cambia algún valor desde el objeto original afectara a la nueva variable y viceversa. 

* So Many Functions Forms 

Existen múltiples formas de crear una función, las cuales pueden ser anónimas o las que tienen algún nombre, las funciones anónimas son más fáciles de entender como las arrow functions y las más comunes son las que tienen un identificador para ser usados. Aquí ejemplo de algunas funciones: 

``` 

function *two() { .. } 

async function three() { .. } 

async function *four() { .. } 

export function five() { .. } 

(function(){ .. })(); 

(function namedIIFE(){ .. })(); 

(async function(){ .. })(); 

(async function namedAIIFE(){ .. })();  

var f; 

f = () => 42; 

f = x => x * 2; 

f = (x) => x * 2; 

f = (x,y) => x * y; 

f = x => ({ x: x * 2 }); 

f = x => { return x * 2; }; 

f = async x => {  

	var y = await doSomethingAsync(x); 

	return y * 2;  

};  

someOperation( x => x * 2 ); 

``` 

* Coercive Conditional Comparison 

AL momento de usar condicionales con tipos de datos que no sean booleanos es que se aplica generalmente la coerción, que viene a inferir algún tipo valido para la condición. Si se pasa 1 como entero a una condicional, lo que pasara será que hará una conversión a un tipo de dato primitivo para hacer la validación de la condicional, y esto será así para todo tipo de ato que no sea un Bolean. 

* Prototypal “Classes” 

Este tipo de programación no es muy común en JS, pero es posible. Lo que se busca es lograr la delegación de clases al momento de crear objetos con clases como atributos, y de igual manera crear un objeto en base a este para así delegar su funcionalidad del objeto generador. 

---
### **6. Appendix B: Practice, Practice, Practice**
* Practicing Comparisons
```
function hourToNumber(hour) {
  const splitHour = hour.split(':');
  return Number( + splitHour[0] + (splitHour[1]/100));
}

function minuteToHour(minute) {
  const result = minute >= 60 ? minute/60 : minute/100;
  return result;
}

const dayStart = hourToNumber("07:30");
const dayEnd = hourToNumber("17:45");

function scheduleMeeting(startTime, durationMinutes) {
  
  const endTime = hourToNumber(startTime) + minuteToHour(durationMinutes);
  
  return hourToNumber(startTime) >= dayStart && endTime <= dayEnd;
}

scheduleMeeting("7:00",15);
scheduleMeeting("07:15",30);
scheduleMeeting("7:30",30);
scheduleMeeting("11:30",60);
scheduleMeeting("17:00",45);
scheduleMeeting("17:30",30);
scheduleMeeting("18:00",15);
```
* Practicing Closure
```
function range(start, end) {
  start = Number(start) || 0;
  if (end == undefined) {
    return function otherF(end) {
      return getSuccessors(start, end, []);
    }
  }
  else {
    end = Number(end) || 0;
    return getSuccessors(start, end, []);
  }
}

function getSuccessors(start, end, vals) {
  if (start <= end){
    vals.push(start)
    getSuccessors(start+1, end, vals);
  }
  return vals;
}

range(3,3);
range(3,8);
range(3,0);
var start3 = range(3);
var start4 = range(4);
start3(3);
start3(8);
start3(0);
start4(6); 
```
* Practicing Prototypes
```
// NO LO PUDE HACER SIN VER LAS SOLUCIONES 😿
function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
  symbols: [
    "X", "Y", "Z", "W", "$", "*", "<", "@"
  ],
  spin() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      );
    }
    this.position = (
      this.position + 100 + randMax(100)
    ) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      );
    }
    return this.symbols[this.position];
  }
};
var slotMachine = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel)
  ],
  spin() {
    this.reels.forEach(function spinReel(reel){
      reel.spin();
    });
  },
  display() {
    var lines = [];
    for(let linePos = -1; linePos <= 1; linePos++) {
      let line = this.reels.map(
        function getSlot(reel) {
          var slot = Object.create(reel);
          slot.position = (
            reel.symbols.length + 
            reel.position +
            linePos
          ) % reel.symbols.length;
          return reel.display.call(slot);
        }
      );
      lines.push(line.join(" | "));
    }
    
    return lines.join("\n");
  }
};
//reel.spin();
//reel.display();
slotMachine.spin();
slotMachine.display();
```
--- 