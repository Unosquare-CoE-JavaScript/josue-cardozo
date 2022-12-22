# **Design Patterns JavaScript**
## **Sections**

1. [**1. SOLID**](#1-solid)
2. [**2. Gamma Categorization**](#2-gamma-categorization)

----
### **1. SOLID**
  1.-Sinlge responsability 
    - Cada clase solo tiene que tener una razon de ser
    - Cada clase debe serr independiente, diferente y ocuparse de un solo problema
  
  2.-Open Close Principle
    - Open for extension,  close for modification

  3.- Liskov Substitution Principle
    - Siempre sera posible cambiar un tipo base por subtipo de la misma
  
  4.- Interface SegregationPrinciple
    - Solo pon lo necesario en una interface y que esten bien separadas por funcionalidad
    - YAGNI - You Ain't Going to Need It
  
  5.- Dependency Inversion Principle
    - Los clases superiores o los padres no pueden depender de las clases inferiores.

### **2. Gamma Categorization**
  - Cretional Patterns
    * manejan la creacion de objetos

  - Structural Patterns
    * Relacionados con la estructura de los objetos

  - Behavioral Patterns
    * No guardan ninguna relacion, cada uno es independiente.
    * Se adaptan al comportamiento.

  1. Builder (Creational)
      provee una API para la creacion de objetos de manera mas sencilla (normalmente devueleve una instancia nueva de un objeto o una instancia statica de la misma).
      > Definicion formal: 'When Piecewise object contruction is complicated, provide an API for doing it succintly'
  2. Factory (Creational)
      factori method.- metodo encargado de crear algo, manejando el procedimiento de creacion de este.
      > Definicion formal: 'A component responsible solely for the wholesale(not piecewise) creation of objects.'
  3. Prototype (Creational)
      Tienes un Objeto que lo almacenas en algun lado y utilizas este patron para crear una copia fiel a este.
      > Definicion formal: 'A patially or fully initialized object that you coopy (cloen) and make use of.'
  4. Singleton (Creational)
      Tienes un objeto con una sola instancia global, sirve para tener un mismo objeto a traves de toda la apliacion.
      > Definicion formal: 'A component which is instantiated only once.'
  5. Adapter (Structural)
      > Definicion formal: 'A construct which adapts an existing interface X to conform to required interface Y.'
  6. Bridge (Structural)
      > Definicion formal: 'A mechanism that decouples an interface from an implementation.'
  7. Composite (Structural)
      Permite el manejo de 2 tipos de datos o objetos como uno uniforme.
      > Definicion formal: 'A mechanism for treating individual objects and compositions of objects in a uniform manner.'
  8. Decorator (Structural)
      Permite agregar funcionalidad a un objeto sin romper el principio de 'Open Closed'
      > Definicion formal: 'Facilitates the addtion of behaviors to individual objects without inheriting from them.'
  9. Facade (Structural)
      > Definicion formal: 'Provides a simple, easy to understand/user interface over a large and sophisticated body of code.'
  10. Flyweight (Structural)
      > Definicion formal: 'A space optimization technique that lets us use less memory by storing externally the data associated with similar objects.'
  11. Proxy (Structural)
      Permite estar entre medio de una accion simulando la interfaz del objeto alcual se quiere ingresar mediante la accion.
      > Definicion formal: 'A class thath functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.'
  12. Chain of Responsibility (Behavioral)
      > Definicion formal : 'A chain of components who all get a chance to process a comand or a query, optionally having default processing implementation and ability to terminate the processing chain.'
  13. Command (Behavioral)
      > Definicion formal: 'An object which represents an instruction to perform a particular action. Contains all the information necessary for the action to be taken.'
  14. Interpreter (Creational)
      > Definicion formal: 'A component that processes structured text data. Does so by turning it into separate lexical tokens and then interpreting sequences of said tokens.'
  15. Iterator (Behavioral)
      > Definicion formal: 'An object that facilitates the traversal of a data structure.'
  16. Mediator (Behavioral)
      > Definicion formal: 'A component that facilitates communication between other components without them necessarily being aware of each other or having direct access to each other.'
  17. Memento (Behavioral)
      > Definicion formal: 'A token/handle representing the system state. Lets us roll back to the state when the token was generated'
  18. Observer (Behavioral)
      > Definicion formal: 'An observer is an object that wishes to be informed about events happening in the system. The enity generating the events is an observable.'
  19. State (Behavioral)
      > Definicion formal: 'A pattern in which the object's behavior is determined by its state. An object transitions from one state to another. Aformalized construct which manages state and transitions is called a state machine.'
  20. Strategy (Behavioral)
      > Definicion formal: 'Enables the exact behavior of a system to be selected at run-time.'
  21. Template Method (Behavioral)
      > Definicion formal: 'Allows us to define the 'skeleton' of the algorith,, with concrete implementations defined in subclasses.'
  22. Visitor (Behavioral)
      > Definicion formal: 'A component that knows how to travers a data structure composed of types.'