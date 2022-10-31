# **You Don’t Know JS Yet: Scope & Closures**
## **Summary by Chapter**

1. [**What's the Scope?**](#1-whats-the-scope)
2. [**Illustrating Lexical Scope**](#2-illustrating-lexical-scope)
3. [**The Scope Chain**](#3-the-scope-chain)
4. [**Around the Global Scope**](#4-around-the-global-scope)
5. [**The (Not So) Secret Lifecycle of Variables**](#5-the-not-so-secret-lifecycle-of-variables)
6. [**Limiting Scope Exposure**](#6-limiting-scope-exposure)
7. [**Using Closures**](#7-using-closures)
8. [**The Module Pattern**](#8-the-module-pattern)
9. [**Appendix A: Exploring Further**](#9-exploring-further)
10. [**Appendix B: Practice**](#10-practice)


---
### **1. What's the Scope?**
* Compiled vs. Interpreted 

    - Compilado: Al momento de compilar un código, lo que se hace es, transformar todo el código en una serie de pasos que pueda entender la máquina para su póstuma ejecución 

    - Interpretado: Al momento de interpretar un código, lo que se hace es, transformar línea a línea el código dado a una instrucción para que la maquina la pueda ejecutar. 

* Compiling code 

Al momento de compilar el código de JS, es donde se asigna el scope correspondiente a cada variable. La compilación está hecha por 3 etapas básicas: 

	- Tokenizing/Lexing: Esta parte se enfoca en separar todo lo que se tenga en el código para generar tokens que los pueda identificar el compilador. 

	- Parsing: Una vez ya tokenizado todo el código se genera un árbol con todos los tokens generados que pertenecerán al lenguaje, este árbol generado se llama Abstract Syntax Tree , y es de donde se genera el código más básico entendido por la computadora. 

	- Code Generation: Se ejecuta todo el código generado por el AST, para que la computadora vaya realizando accione y reservando memoria. 

JS siendo un lenguaje compilado, existen 3 formas de validar esto, que es con la generación de errores que salen antes de ejecutar el condigo, dando así cabida a la idea de “compila luego ejecuta”. Los tipos de errores que salen para verificar dicha afirmación son: 

	- syntax errors 

	- early errors 

	- hoisting 

* Compiler Speak 

Al momento de compilar el código, existen múltiples operaciones que realiza el compilador en sí, entre las más importantes están las operaciones de derecha y las operaciones de izquierda. Estas operaciones hacen referencia a los dos lados que existen al momento de usar “=”, también son conocidas con sus nombres en inglés como “LHS” y “RHS”. Estos pueden ser tomados como fuentes (que proporcionan un valor) o como objetivos (que sirven para almacenar los datos que proporcionan las fuentes), cabe recalcar que no toda LHS puede ser un target y no toda RHS puede ser un source. 

	- Target(objetivo): se puede tomar a esto como una asignación a una variable, para que 	esta almacene algún tipo de valor en memoria, no toda asignación de variable esta tan clara 	como al momento de usar “=” algunas se encuentran de manera más implícita, como al 		momento de usar una iteración sobre un objeto. 

	- Source(fuente): viene a ser la raíz de donde saldrá todo valor para un target, la manera 	más sencilla de entender esto es, que todo aquelle que devuelva algún tipo de valor que pueda 	ser referenciado será un “source”. 

* Cheating: Runtime Scope Modifications 

Tenemos que tener en claro que el scope es generado al momento de la compilación, eso quiere decir que no se tiene un acceso directo al scope, para hacer cualquier tipo de manipulación sobre este. En JS existen 2 formas de acceder a el scope una es hacer uso de la función “eval()” y otra hacer uso de la palabra reservada “with”. 

La función “eval()” lo que hace es recibir un parámetro para ser evaluado, lo que quiere decir que será compilado al mismo tiempo de la compilación del código, lo que quiere decir que, si existe algún tipo de declaración dentro de esta función, se generar un cambio en el scope afectando a el tiempo d ejecución. 

Por otro lado, la palabra reservada “with” lo que hace es afectar directamente al scope, cambiándolo por un nuevo objeto, lo cual afecta grande mente al tiempo de ejecución y al desempeño de lo que se esté haciendo. 

* Lexical Scope 

Las variables pertenecen a un scope, donde estas existen y se pueden acceder, dichos scopes son asignados al momento de la compilación lo que se conoce como “lexical scope”. 

---
### **2. Illustrating Lexical Scope**
* Compiled vs. Interpreted 

- Compilado: Al momento de compilar un código, lo que se hace es, transformar todo el código en una serie de pasos que pueda entender la máquina para su póstuma ejecución 

- Interpretado: Al momento de interpretar un código, lo que se hace es, transformar línea a línea el código dado a una instrucción para que la maquina la pueda ejecutar. 

* Compiling code 

Al momento de compilar el código de JS, es donde se asigna el scope correspondiente a cada variable. La compilación está hecha por 3 etapas básicas: 

	- Tokenizing/Lexing: Esta parte se enfoca en separar todo lo que se tenga en el código para generar tokens que los pueda identificar el compilador. 

	- Parsing: Una vez ya tokenizado todo el código se genera un árbol con todos los tokens generados que pertenecerán al lenguaje, este árbol generado se llama Abstract Syntax Tree , y es de donde se genera el código más básico entendido por la computadora. 

	- Code Generation: Se ejecuta todo el código generado por el AST, para que la computadora vaya realizando accione y reservando memoria. 

JS siendo un lenguaje compilado, existen 3 formas de validar esto, que es con la generación de errores que salen antes de ejecutar el condigo, dando así cabida a la idea de “compila luego ejecuta”. Los tipos de errores que salen para verificar dicha afirmación son: 

	- syntax errors 

	- early errors 

	- hoisting 

* Compiler Speak 

Al momento de compilar el código, existen múltiples operaciones que realiza el compilador en sí, entre las más importantes están las operaciones de derecha y las operaciones de izquierda. Estas operaciones hacen referencia a los dos lados que existen al momento de usar “=”, también son conocidas con sus nombres en inglés como “LHS” y “RHS”. Estos pueden ser tomados como fuentes (que proporcionan un valor) o como objetivos (que sirven para almacenar los datos que proporcionan las fuentes), cabe recalcar que no toda LHS puede ser un target y no toda RHS puede ser un source. 

	- **Target(objetivo)**: se puede tomar a esto como una asignación a una variable, para que 	esta almacene algún tipo de valor en memoria, no toda asignación de variable esta tan clara 	como al momento de usar “=” algunas se encuentran de manera más implícita, como al 		momento de usar una iteración sobre un objeto. 

	- **Source(fuente)**: viene a ser la raíz de donde saldrá todo valor para un target, la manera 	más sencilla de entender esto es, que todo aquelle que devuelva algún tipo de valor que pueda 	ser referenciado será un “source”. 

* Cheating: Runtime Scope Modifications 

Tenemos que tener en claro que el scope es generado al momento de la compilación, eso quiere decir que no se tiene un acceso directo al scope, para hacer cualquier tipo de manipulación sobre este. En JS existen 2 formas de acceder a el scope una es hacer uso de la función “eval()” y otra hacer uso de la palabra reservada “with”. 

La función “eval()” lo que hace es recibir un parámetro para ser evaluado, lo que quiere decir que será compilado al mismo tiempo de la compilación del código, lo que quiere decir que, si existe algún tipo de declaración dentro de esta función, se generar un cambio en el scope afectando a el tiempo d ejecución. 

Por otro lado, la palabra reservada “with” lo que hace es afectar directamente al scope, cambiándolo por un nuevo objeto, lo cual afecta grande mente al tiempo de ejecución y al desempeño de lo que se esté haciendo. 

* Lexical Scope 

Las variables pertenecen a un scope, donde estas existen y se pueden acceder, dichos scopes son asignados al momento de la compilación lo que se conoce como “lexical scope”. 
---
### **3. The Scope Chain**
* “Lookup” Is (Mostly) Conceptual 

Hasta este punto entendemos que todo está asignado a un scope, pero al momento de hablar de una variable que no se encuentra declarada existe una asignación la cual no pertenece a ningún scope, esta llegara a ser asignada a su respectivo scope cuando el archivo asociado a la variable sea ejecutado. 

* Shadowing 

El shadowing viene a ser la sobre posición de una variable que se encuentra en el scope actual que se está leyendo, a la del scope externo. Un ejemplo más sencillo es tener variables con el mismo nombre ubicadas en distintos lugares, una a la altura del scope global y la otra dentro de una función que pertenece al scope global, como la búsqueda de variables es de adentro hacia afuera se topará primero con la variable que se encuentre dentro del scope de la función y no tomara en cuenta a la variable que está afuera, esta acción o evento es conocido como shadowing. 

Al momento de hacer al shadowing, es casi imposible acceder a las variables afectadas, pero no imposible. Cuando se habla del scope global, existe un modo de hacer referencia al objeto que hace referencia a dichos scope, el cual se llama “window” de esta forma se puede acceder a todas las variables declaradas en el scope global (Solo variables de tipo “var”). 

También existen ciertas restricciones al momento de hacer shadowing, una de las más importantes es que un var no puede hacer shadow directamente a un let, solo si el var se encuentra en un scope más adentro que el let. 

* Function Name Scope 

Las funciones tienen multiples formas de declararse, como las siguientes: 

	- function algo() {} 

	- var a = function b() {} 

	- var a = function(){} 

La primera es la más conocida, que tiene un nombre identificador para llamar a la función y que genera su propio scope; La segunda es especial ya que es una variable asignada a una función que tiene su propio identificador, para hacer uso de esta función en el contexto donde fue declarada solo se puede llamar a la variable “a” con los parámetros correspondientes, si se utiliza el nombre identificador de la función saltara un error de referencia ya que el nombre identificador “b” solo existe dentro del scope de la función; por último, se tiene la función anónima asignada a una variable “b”, que solo puede ser llamada por el nombre la variable asignada.  

* Arrow functions 

Son formas de funciones más simplificadas, las cuales por defecto son anónimas, pero pueden ser referenciadas por variables. En el libro menciona que crea un scope anidado, pero segun tengo entendido no crea ningun scope, pero haciendo pruebas llego a la conclusion de que no genera un scope nuevo sino que mantiene el scope del padre.

---
### **4. Around the Global Scope**
* Why Global Scope? 

Es la forma principal de unir todos los módulos de una aplicación, ya que la forma de trabajo por la cual se trabaja en JS es con módulos, se busca tener una forma de tener todo esto centralizado y controlado por un objeto que en este caso viene a ser el global scope, los cuales van cambiando sus nombres de acuerdo a las herramientas con las cuales estes trabajando. 

* Where Extactly is this Global Scope? 

Es la forma más pura que puede tener un programa de JS, ya que este es el encargado de manejar todas las variables globales y funciones, además de otras cualidades que se manejan a nivel de window. También se puede hablar de shadowing cuando se habla del global scope, pero esto es más delicado ya que se tiene que hablar de variables globales y de propiedades globales, esto quiere decir que una variable global puede hacer shadow a una propiedad del global scope. 

También existen otras formas de referencias a este tema del global scope, como por ejemplo cuando se habla de web workers que son formas de bifurcar nuevos hilos de ejecución, manteniendo una comunicación con la aplicación principal para no generar race conditions, para ingresar a estos se usa la palabra reservada “self” para hacer referencia a su global scope. 

Cuando se usa Node para hacer referencia a su global scope se usa la palabra reservada “module”, esto hace referencia a que Node está específicamente basado en módulos como lo está JS. 

* Global this 

La palabra reservada “this” hace referencia al contexto de quien lo ejecuta, eso quiere decir que, si estamos usando dicha palabra en el global scope, este apuntara a el objeto global donde se hacen todas las declaraciones globales. Teniendo tantas formas de hacer referencia al global scope en ES2020 se definió una palabra reservada que engloba todas estas formas de hacer referencia a el global scope, la cual es “globalThis”. 
---
### **5. The (Not So) Secret Lifecycle of Variables**
* When Can I Use a Varaible?  

Para hablar de variables tenemos que tener en cuenta de cómo funciona el hoisting. Hoisteing es el mecanismo que mueve las declaraciones al principio del scope, esto incluye funciones y variables, este mecanismo tiene una jerarquía que vienen a ser funciones y variables primero. Dado este mecanismo es que se permite hacer referencia a funciones de manera temprana incluso aunque estén por debajo de su referencia en el código (al igual que las variables).  

Cuando se habla de hoisting se tiene que tener fundamental cuidado en lo que viene a ser una declaración y una expresión, ya que con una declaración si es una variable esta se iniciará como indefinido, entonces si esta está haciendo referencia a una función esta no podrá ser referenciada hasta el momento de la ejecución. 

* Hoisting: Yet Another Metaphor  

Continuando lo que es hoisting, se tiene que tener en cuenta que no se mueve todas las declaraciones al inicio del scope, lo que se podría decir que hace es un parseo de todo el código para tener todas las declaraciones del código. Lo que busca hacer el hoisting es generar instrucciones que ayuden al tiempo de ejecución y tener un registro de las variables asignadas. 

* Re-declaration 

Cuando se habla de volver a declarar algo ya declarado el hoisting tiene mucho en juego ya que todo es procesado por el hoisting antes de ser ejecutado. En este caso existen variables que, si tienen la idea de ser reasignadas como el var que permite esta idea, pero cuando se habla de const o let esto no es permitido ya que cuando estas fueran introducidas a ES6 esta idea de re-declarar una variable llegaba a ser una gran falla en algunos sistemas. 

El caso del const es más claro que no permita una re-declaracion debido a que este si o si necesita un valor inicial al momento de ser declarado, y como este es inmutable por lógica no permite la re-declaracion de variables. 

* Uninitialized Variables (aka, TDZ) 

La manera más sencilla de entender esto es que viene a ser el tiempo en el cual una variable está presente pero no está inicializada, por ende, esta no puede ser utilizada. 

---
### **6. Limiting Scope Exposure**
* Least Exposure 

El scope nos servirá para limitar el acceso y la disponibilidad de algunas funciones y variables, aparte de que ayudara tener todo de una manera más controlada y organiza. Al tener todo más estructurado podremos evitar tres grandes problemas: 

	- Naming Collisions: imagina que tienes todo en un solo scope, en algún punto puede que llegues a tener variables o funciones con los mismos nombres, lo que llevara a modificar variable o ejecutar funciones las cuales no tenías planeado ejecutar. 

	- Unexpected Behavior: Imagina que tienes un cierto tipo de arreglo que trabaja con ciertos tipos de datos, al momento de trabajar con más persona y de que esta quiera aumentar la funcionalidad de este arreglo puede alterar o generar algún comportamiento no esperado en código ya desarrollado. 

	- Unintended Dependency: La dependencia que generar tu código al momento de trabajar con otros podría desembocar una falla en múltiples funcionalidades ya desarrolladas ante el más mínimo cambio que se haga para mejorar una sola cosa. 

Tomando en cuenta estos tres errores fundamentales que pueden llegar a desembocar por un mal uso del scope, es bueno tener una idea clara de cómo estos funcionan y como trabajar en conjunto junto con ellos. 
 

* Hiding in Plain (Function) Scope 

Jugando con el scope se puede llegar a esconder funciones y también variables con las cuales trabajan dichas funciones. La forma más fácil de entender esto es encerrar la función en cuestión dentro de otra junto con las variables que vaya usar, así de esta manera se generar un scope al cual no se pueda acceder desde el exterior. 

La forma de ocultar una función metiendo una dentro de otra llega ser muy tediosa, es por eso que existe una sintaxis para simplificar esto “(funciona a(){})()”, estas conocida como “Inmediately Invoke Funcional Expresión (IIIFE)”. 
 

Scoping with Blocks 

Se tiene otra forma de limitar el acceso jugando con los scopes, y esta vez es usando bloques ({…}), para esto se tiene que tener en claro que un bloque no necesariamente genera un scope, y no generalmente todo conjunto de {…} es un bloque.  

Para que un bloque genere un scope tiene que tener una declaración adentro, y para que sea considerado un bloque tiene que tener alguna expresión adentro. 

Cuando ya se empieza a hablar de bloque tenemos que separar nuestras variables ya que existen 2 tipos de variables: 

	- Block-scope: const y let 

	- Function-scope: var 

Este tipo de variables tomas especial énfasis en los tipos a los cuales son asignados, eso quiere decir que si un var es asignado dentro de block-scope y tiene la posibilidad de ser un function-scope este tomara el scope más grande. 

De esta manera jugando con los bloques es que se puede generar scopes dentro de funciones para limitar el acceso a funcionalidad y variables del mismo. 

* Function Declarations in Blocks 

Para este punto ya tendremos bien claro a donde pertenece cada forma de declaración de variable, pero que pasa con las funciones. Las funciones en la mayoría de los casos son Block-scope, y trabajan junto con el var y el const. 
---
### **7. Using Closures**
* See the Closure 

Closure se puede ver cuando una función puede usar variables de scopes exteriores mientras se encuentra en ejecución. Para que se considere un closure como tal tiene ciertos aspectos que se deben cumplir: 

	- Tiene que haber una función involucrada. 

	- Tiene que haber mínimo una referencia a una variable de otro scope. 

	- La función tiene que estar en otro scope al de la variable referenciada. 

Al momento de hacer uso de closure se genera un “live link” que mantiene un acceso total a la variable referenciada. 

* The Closure Lifecycle and Garbage Collection 

Al momento de hacer uso del closure, se tiene q tener muy en cuenta que se genera un espacio en memoria para hacer referencia a la variable en cuestión, lo que quiere decir que pueden existir grandes cantidades de uso de memoria. JS tiene un Garbage Collector que se encargar de todo lo que ya no se está utilizando, pero al momento de hablar de closures, existen partes donde no puede saber si existe alguna variable que no esté en uso, es por eso que cuando se trabaja con closures es mejor tener buen control de nuestras variables y des hacernos de las que ya no hacemos uso en cierto tiempo. 

* An Alternative Perspective 

Tratemos de entender de otra manera los closures, como se ve en el libro la mayoría de los ejemplos se trabaja con funciones que devuelven funciones, lo cual nos da a entender que existen un total de 3 scopes; ahora tratemos de pensar en un cuarto que sea el punto intermedio de la ejecución de la primera función y la función anidada, esto nos ayudara a entender cómo es que cada scope trabaja de manera conjunta al momento de desempeñar su funcionalidad y de esta manera ver como se mantienen las referencias a las variables. 

* Why Closure? 

La mejor respuesta viene a ser que te permite tener más estructurado el codigo, te permite tener un grado más limitado el scope y por último te deja crear instancias que las puedes reutilizar al momento de hacer tareas repetitivas. 

 
---
### **8. The Module Pattern**
* Encapsulation and Least Exposure 

El encapsulamiento busca tener todo organizado de una manera conjunta y que busquen un mismo propósito. Tener todo bien estructurado y organizado ayuda a que el proyecto pueda ser más mantenible a la larga ya que es más sencillo de hacer algún tipo de mantenimiento cuando se saben dónde están las cosas, aparte de que ayuda a su vez a limitar el acceso y la funcionalidad de ciertos componentes. 

* What Is a Module? 

Viene a ser una colección de información y funciones relacionadas, que tiene que cumplir ciertas características para ser un módulo: 

	- stateful: tiene que mantener algún tipo de estado para el acceso y actualización de la 		información. 

	- Outer Scope: debe existir un scope externo. 

	- Inner scope: tiene que existir al menos una porción de dato de estado que tenga algún tipo de 	restricción. 

	- Return: tiene que devolver la referencia a al menos una de sus funciones que trabaje con los 	datos de estado. 

* Node CommonJS Modules 

La mejor forma de trabajar los módulos es en carpetas y archivos separados como lo es CommonJS, donde ya se dijo como debe ser un módulo. Al tener los módulos separados se tiene q hacer la importación y exportación de dichos módulos, en si al habrá de exportar un módulo lo que se hace es hacer referencia a un objeto que tiene una referencia directa a una función o dato de un módulo. 

* Modern ES Modules (ESM) 

ESM es una forma de trabajar con módulos con JS donde trabaja de igual manera que CommonJS, solo que, aumentando más funcionalidades, como que solo trabaja con modo estricto por defecto y existe la palabra reservada “export” para hacer la exportación de un módulo. La forma de hacer una importación es con las palabras reservadas “import” y “from”, donde se indicará que se importará y de donde respectivamente.     
---
### **9. Exploring Further**
* Implied Scopes 

- Parameter scope: para esta parte existe la definicion de que los parámetros de una función son 	variables declaradas dentro de la función correspondiente, pero esto no es del todo cierto. 	Existen múltiples variaciones que pueden afectar a esta definición, como que se asigne un valor 	en el parámetro, que se ponga un arrow function como parámetro y estos generarían nuevos 	scopes y hasta un closure. 

Por tantos posibles casos es que se recomienda: 

- Nunca hacer shadowing a parámetros con variables locales. 

- Evitar usar parámetros por defecto que hagan closure, con cualquier otro parámetro. 

- Function name scope: este caso más que particular podría ser confuso ya que se pude 		declarar una función y dentro de esta se declare otra var con el mismo nombre de la función, 	esto se podría decir que genera algún tipo de shadowing, pero no es así ya que el nombre de la 	función y el de la variable declarada existen en dos distintos scopes. 

* Anonymous vs. Named Functions 

Los nombres en alas funciones ayudan en múltiples maneras. Al momento de trabajar en un código que no es el tuyo para entender mejor que hace cierta cosa, te guías por el nombre de las variables y de las funciones ya que esta guarda la esencia de lo que tratan de interpretar, Hablando de funcionalidad si una función no tiene nombre al momento de hacer el trace-back para detectar un error será mucho más complicado encontrarlo, o cuando intentes hacer una llamada recursiva no podrás hacerlo si tu función no tiene nombre. 

* Hoisting: Functions and Variables 

En el capítulo 5 fue donde más se habló de lo que es el hoisting y algunos casos en particular, aquí hablaremos de cómo se puede estructurar el código para, mantener alguna línea de lectura y cierto orden. Para las funciones es más entendible el código cuando son referenciadas al principio, pero declaradas más abajo, así como que no tienes que ver la implementación de algo innecesariamente, pero con las variables y de más es un poco más riguroso el orden que se propone. Cuando se trata de ordenar las variables se busca que dependencias estén declaradas al principio, luego las variables públicas o que no son muy sensibles y por último estará la declaración de las variables privadas, para así mantener un cierto grado de orden y de seguridad.  

* The Case for var 

Existen 3 formas formales de declarar una variable que viene a ser usando las palabras reservadas “var”,”let” y “const”. Existe un tipo de separación de bandos cuando dicen cuál es el mejor para ser usado, pero la verdad es que todo es depende al contexto, const está diseñado para ser block-scope y ser constante así que lo más lógico es dejarlo con un valor plano e inmutables en un bloque, let es de igual manera que const block-scope pero con más libertad al momento de trabajar con sus datos, y por último tenemos a var que es muy útil en muchos ambientes y aparte de todo es con lo que se estuvo trabajando por mucho tiempo y no dio tantos problemas como los que soluciono. 

* What’s the Deal with TDZ? 

La razón por la cual se da esto es porque existe una variable declarada pero no tiene un valor inicial, por lo tanto, es que entra a TDZ donde se tiene prohibido el ingreso a esta variable. La idea principal por la cual se llega a un TDZ es porque se necesita una variable en el scope pero no se sabe que valor ponerle hasta el momento de su asignación de valor. 

* Are Synchronous Callbacks Still Closures? 

Se dice que Synchronous y Asynchronous callbacks son lo mismo, si nos ponemos a analizar estos cumplirían en ambos casos la de ide de ser un closure ya que, al ser síncrono o asíncrono la idea fundamental del closure se seguirá cumpliendo.
---
### **10. Practice**
* Buckets of Marbles
``` 
//Global scope: red
var name = 'default';
var time;
function sayHi() {
  //scope 1: green
  function addTime() {
    //scope 2: blue
    {
      //block scope 1: zephyr
      let getHourLocation = 'morning | afternoon | night';
      time = `good ${getHourLocation}`
    }
  }
}

function addName() {
  //scope 3: yellow
  function addLastName() {
    var name = 'fullname';
    //scope 4: grey
    function addSignature(/*inplicit scope*/signature = '') {
      //scope 5: orange
      {
        //block scope 2: ocean-blue
        let smthHide = 'signature path';
      }
    }
  }
}
```
* Closure (PART 1)
```
function checkPrime(val) {
  let isPrime = true;
  if ( val === 1 ) {
    console.log("nose que es");
  }
  else if (val > 1) {
    for (let i=2; i < val; i++) {
      if (val % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}

function factorize(val) {
  if (!checkPrime(val)) {
    let i = Math.floor(Math.sqrt(val));
    while (val % i !=0) {
      i--;
    }
    return [...factorize(i), ...factorize(val/i)];
  }
  return [val];
}
```
* Closure (PART 2)
```
function toggle(...vals) {
  var auxArr = [];
  var current = [];
  return function next(){
    if (vals === []){
      vals = auxArr;
    }
    current = vals.shift();
    list.push(current);
    
    return current; 
  };
}
```
* Closure (PART 3)
```
function calculate() {
  let result = 0;
  
  let calculator = {
    add: function(number) {
      result += number;
      return this;
    },
    multiply: function(number) {
      result *= number;
      return this;
    },
    sub: function(number) {
      result -= number;
      return this;
    },
    divide: function(number) {
      result /= number;
      return this;
    },
    printResult: function() {
      return result;
    }
  }
  return calculator;
}

const calculator = calculate();
let result = calculator.add(20).add(50).multiply(35).sub(15).sub(31).divide(2.1).printResult(); 
console.log(result);
```